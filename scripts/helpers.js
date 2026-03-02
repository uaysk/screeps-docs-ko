'use strict';

var pathFn = require('path');
var _ = require('lodash');
var url = require('url');
var cheerio = require('cheerio');
var lunr = require('lunr');

var localizedPath = ['docs', 'api'];

function startsWith(str, start){
  return str.substring(0, start.length) === start;
}

function localizeHref(href, lang) {
  if (!lang || lang === 'en') return href;
  if (!href || href[0] !== '/') return href;

  if (href === '/api' || href === '/api/') return '/api/index.' + lang + '.html';

  // Convert .html pages to .<lang>.html (Hexo i18n file naming style).
  if (/\.html$/.test(href) && !new RegExp('\\.' + lang + '\\.html$').test(href)) {
    return href.replace(/\.html$/, '.' + lang + '.html');
  }

  return href;
}

function resolveLang(ctx) {
  // Some generators incorrectly set `page.lang` to 'en' even for `*.ko.md`.
  // Prefer inferring from the source/path suffixes first.
  var source = (ctx && ctx.page && ctx.page.source) || '';
  var m = source.match(/\.([a-z]{2})\.md$/);
  if (m) return m[1];

  var p = (ctx && (ctx.path || (ctx.page && ctx.page.path))) || '';
  m = p.match(/\.([a-z]{2})\.html$/);
  if (m) return m[1];

  if (ctx && ctx.page && ctx.page.lang) return ctx.page.lang;

  return 'en';
}

function getSidebarData(site, lang) {
  // Prefer language-specific sidebar labels if present.
  return site.data['sidebar_' + lang] || site.data.sidebar;
}

hexo.extend.helper.register('page_nav', function(){
  var lang = resolveLang(this);
  var sidebar = getSidebarData(this.site, lang);
  var path = this.path;
  var list = {};
  var prefix = 'sidebar.';

  for (var i in sidebar){
    for (var j in sidebar[i]){
      list[localizeHref(sidebar[i][j], lang)] = j;
    }
  }

  var keys = Object.keys(list);
  var index = keys.indexOf('/'+path);
  var result = '';

  if (index > 0){
    result += '<a href="' + keys[index - 1] + '" class="article-footer-prev">' +
      '<i class="fa fa-chevron-left"></i><span>' + list[keys[index - 1]] + '</span></a>';
  }

  if (index < keys.length - 1){
    result += '<a href="' + keys[index + 1] + '" class="article-footer-next">' +
      '<span>' + list[keys[index + 1]] + '</span><i class="fa fa-chevron-right"></i></a>';
  }

  return result;
});

hexo.extend.helper.register('doc_sidebar', function(className){
  var lang = resolveLang(this);
  var sidebar = getSidebarData(this.site, lang);
  var path = this.path;
  var apiText = lang === 'ko' ? 'API 레퍼런스' : 'API Reference';
  var result = `<a href="${localizeHref('/api/', lang)}" class=api-link><span>${apiText}</span><img src="/img/link-external.svg"></a>`;
  var self = this;
  var prefix = 'sidebar.';

  _.each(sidebar, function(menu, title){
    if(title !== '_') {
      result += '<strong class="' + className + '-title">' + title + '</strong>';
    }

    _.each(menu, function(link, text){
      var itemClass = className + '-link';
      var localizedLink = localizeHref(link, lang);
      if (localizedLink === '/'+path) itemClass += ' current';

      result += '<a href="' + localizedLink + '" class="' + itemClass + '">' + text + '</a>';
    })
  });

  return result;
});

hexo.extend.helper.register('header_menu', function(className){
  var menu = this.site.data.menu;
  var result = '';
  var self = this;
  var lang = resolveLang(this);

  _.each(menu, function(path, title){
        result += '<a href="' + self.url_for(path) + '" class="' + className + '-link">' + title + '</a>';
  });

  return result;
});

hexo.extend.helper.register('canonical_url', function(lang){
  // `page.canonical_path` can be language-specific; derive from current path.
  var pagePath = (this.page && this.page.path) || this.path || '';
  var basePath = pagePath.replace(/\.([a-z]{2})\.html$/, '.html');
  var href = '/' + basePath.replace(/^\/+/, '');
  href = localizeHref(href, lang);

  return this.config.url.replace(/\/$/, '') + href;
});

hexo.extend.helper.register('url_for_lang', function(path){
  var lang = resolveLang(this);
  return localizeHref(this.url_for(path), lang);
});

hexo.extend.helper.register('raw_link', function(path){
  return 'https://github.com/screeps/docs/edit/master/source/' + path;
});

hexo.extend.helper.register('page_anchor', function(str){
  var $ = cheerio.load(str, {decodeEntities: false});
  var headings = $('h1, h2, h3, h4, h5, h6');

  if (!headings.length) return str;

  headings.each(function(){
    var id = $(this).attr('id');

    $(this)
      .addClass('article-heading')
      .append('<a class="article-anchor" href="#' + id + '" aria-hidden="true"></a>');
  });

  return $.html();
});

hexo.extend.helper.register('lunr_index', function(data){
  var index = lunr(function(){
    this.field('name', {boost: 10});
    this.field('tags', {boost: 50});
    this.field('description');
    this.ref('id');
  });

  _.sortBy(data, 'name').forEach(function(item, i){
    index.add(_.assign({id: i}, item));
  });

  return JSON.stringify(index.toJSON());
});

hexo.extend.helper.register('canonical_path_for_nav', function(){
  var path = this.page.canonical_path;

  if (startsWith(path, 'docs/') || startsWith(path, 'api/')){
    return path;
  } else {
    return '';
  }
});

hexo.extend.helper.register('lang_name', function(lang){
  var data = this.site.data.languages[lang];
  return data.name || data;
});

hexo.extend.helper.register('disqus_lang', function(){
  var lang = resolveLang(this);
  var data = this.site.data.languages[lang];

  return data.disqus_lang || lang;
});
