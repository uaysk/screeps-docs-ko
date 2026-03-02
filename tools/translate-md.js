#!/usr/bin/env node
'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');

function parseArgs(argv) {
  const args = {
    lang: 'ko',
    roots: ['source', 'api/source'],
    overwrite: false,
    dryRun: false,
    model: process.env.TRANSLATE_MODEL || process.env.OPENAI_MODEL || 'gpt-4.1-mini',
    baseUrl: process.env.TRANSLATE_BASE_URL || process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1',
    apiKey: process.env.TRANSLATE_API_KEY || process.env.OPENAI_API_KEY || '',
    concurrency: Number(process.env.TRANSLATE_CONCURRENCY || '2'),
  };

  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--lang') args.lang = argv[++i];
    else if (a === '--root') args.roots = [argv[++i]];
    else if (a === '--roots') args.roots = argv[++i].split(',').map(s => s.trim()).filter(Boolean);
    else if (a === '--overwrite') args.overwrite = true;
    else if (a === '--dry-run') args.dryRun = true;
    else if (a === '--model') args.model = argv[++i];
    else if (a === '--base-url') args.baseUrl = argv[++i];
    else if (a === '--api-key') args.apiKey = argv[++i];
    else if (a === '--concurrency') args.concurrency = Number(argv[++i] || '2');
    else if (a === '--help' || a === '-h') args.help = true;
  }

  return args;
}

function toLocalizedPath(filePath, lang) {
  if (!filePath.endsWith('.md')) throw new Error(`Not a markdown file: ${filePath}`);
  if (filePath.endsWith(`.${lang}.md`)) return filePath;
  return filePath.slice(0, -3) + `.${lang}.md`;
}

async function* walkMarkdownFiles(rootDir) {
  const stack = [rootDir];
  while (stack.length) {
    const dir = stack.pop();
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === '_data' || entry.name === '_posts') continue;
        stack.push(full);
        continue;
      }
      if (entry.isFile() && entry.name.endsWith('.md')) yield full;
    }
  }
}

function buildPrompt(markdown, lang) {
  return [
    `Translate the following documentation page to ${lang}.`,
    `Requirements:`,
    `- Preserve Markdown structure (headings, lists, tables).`,
    `- Do NOT translate code blocks, inline code, URLs, or file paths.`,
    `- Preserve Hexo tags like {% ... %} and any HTML as-is.`,
    `- Preserve any front-matter keys and formatting; translate only the human-readable values (e.g. title).`,
    `- Keep product and API identifiers (e.g. Screeps, Game, Memory) unchanged.`,
    ``,
    `---`,
    markdown,
  ].join('\n');
}

function splitProtectedPrefix(markdown) {
  const lines = markdown.split('\n');
  const scanLimit = Math.min(lines.length, 60);
  for (let i = 0; i < scanLimit; i++) {
    if (lines[i].trim() === '---') {
      const prefix = lines.slice(0, i + 1).join('\n') + '\n';
      const rest = lines.slice(i + 1).join('\n');
      return { prefix, rest, hasPrefix: true };
    }
  }
  return { prefix: '', rest: markdown, hasPrefix: false };
}

function buildPromptWithProtectedPrefix({ prefix, body, lang }) {
  return [
    `Translate documentation to ${lang}.`,
    `Rules:`,
    `- DO NOT change anything inside <PROTECTED> ... </PROTECTED>.`,
    `- Translate only inside <TRANSLATE> ... </TRANSLATE>.`,
    `- Do NOT translate code blocks, inline code, URLs, file paths, or Hexo tags like {% ... %}.`,
    `- Preserve Markdown structure.`,
    ``,
    `<PROTECTED>`,
    prefix,
    `</PROTECTED>`,
    ``,
    `<TRANSLATE>`,
    body,
    `</TRANSLATE>`,
    ``,
    `Output format:`,
    `1) The exact PROTECTED text`,
    `2) Immediately followed by the translated TRANSLATE text`,
    `Do not include <PROTECTED> or <TRANSLATE> tags in the output.`,
  ].join('\n');
}

async function openAIChatCompletion({ baseUrl, apiKey, model, prompt }) {
  const url = `${baseUrl.replace(/\/$/, '')}/chat/completions`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: 'You are a careful technical translator.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.2,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Translation API error ${res.status}: ${text.slice(0, 400)}`);
  }

  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content;
  if (!content) throw new Error('Translation API returned no content');
  return content;
}

async function withRetries(fn, { retries = 4 } = {}) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn(attempt);
    } catch (err) {
      lastErr = err;
      const msg = String(err && err.message ? err.message : err);
      const shouldRetry =
        /429|rate limit|timeout|ECONNRESET|ETIMEDOUT|EAI_AGAIN/i.test(msg) && attempt < retries;
      if (!shouldRetry) break;
      const delayMs = 800 * Math.pow(2, attempt);
      await new Promise(r => setTimeout(r, delayMs));
    }
  }
  throw lastErr;
}

async function runWithConcurrency(items, limit, fn) {
  const queue = [...items];
  const workers = Array.from({ length: Math.max(1, limit) }, async () => {
    while (queue.length) {
      const item = queue.shift();
      await fn(item);
    }
  });
  await Promise.all(workers);
}

async function main() {
  const args = parseArgs(process.argv);
  if (args.help) {
    process.stdout.write(
      [
        'Usage: node tools/translate-md.js [options]',
        '',
        'Options:',
        '  --lang ko                Target language code (default: ko)',
        '  --root source            Translate one root directory',
        '  --roots source,api/source Translate multiple roots',
        '  --overwrite              Overwrite existing .<lang>.md files',
        '  --dry-run                Print planned actions only',
        '  --model <name>           Model name (default: env TRANSLATE_MODEL/OPENAI_MODEL)',
        '  --base-url <url>         API base URL (default: https://api.openai.com/v1)',
        '  --api-key <key>          API key (default: env TRANSLATE_API_KEY/OPENAI_API_KEY)',
        '  --concurrency N          Parallel requests (default: 2)',
        '',
        'Env:',
        '  TRANSLATE_API_KEY / OPENAI_API_KEY',
        '  TRANSLATE_MODEL / OPENAI_MODEL',
        '  TRANSLATE_BASE_URL / OPENAI_BASE_URL',
        '  TRANSLATE_CONCURRENCY',
        '',
      ].join('\n')
    );
    return;
  }

  const isDryRun = args.dryRun;
  if (!args.apiKey && !isDryRun) {
    throw new Error(
      'Missing API key. Set TRANSLATE_API_KEY (or OPENAI_API_KEY), or pass --api-key.'
    );
  }

  const repoRoot = process.cwd();
  const candidates = [];
  for (const root of args.roots) {
    const absRoot = path.resolve(repoRoot, root);
    for await (const file of walkMarkdownFiles(absRoot)) {
      if (file.endsWith(`.${args.lang}.md`)) continue;
      candidates.push(file);
    }
  }

  candidates.sort();

  await runWithConcurrency(candidates, args.concurrency, async (file) => {
    const out = toLocalizedPath(file, args.lang);
    if (!args.overwrite) {
      try {
        await fs.access(out);
        process.stdout.write(`skip (exists): ${path.relative(repoRoot, out)}\n`);
        return;
      } catch (_) {
        // continue
      }
    }

    process.stdout.write(`translate: ${path.relative(repoRoot, file)} -> ${path.relative(repoRoot, out)}\n`);
    if (args.dryRun) return;

    const input = await fs.readFile(file, 'utf8');
    const { prefix, rest, hasPrefix } = splitProtectedPrefix(input);
    const body = rest;
    const prompt = hasPrefix
      ? buildPromptWithProtectedPrefix({ prefix, body, lang: args.lang })
      : buildPrompt(input, args.lang);

    const translated = await withRetries(() =>
      openAIChatCompletion({
        baseUrl: args.baseUrl,
        apiKey: args.apiKey,
        model: args.model,
        prompt,
      })
    );

    await fs.writeFile(out, translated.replace(/\r\n/g, '\n'), 'utf8');
  });
}

main().catch((err) => {
  process.stderr.write(String(err && err.stack ? err.stack : err) + '\n');
  process.exitCode = 1;
});

process.stdout.on('error', (err) => {
  if (err && err.code === 'EPIPE') process.exit(0);
});
