This project contains the sources of the [documentation web site](http://docs.screeps.com) for Screeps online game.

You need to have Node.js in order to build this project.

1. Install all npm dependendcies:

```
npm install
cd api
npm install
cd ..
```
    
2. Generate static site:

```
npm run generate
cd api
npm run generate
cd ..
```

You can use `generate-watch` instead of `generate` to sync changes in real time.

3. Run development server:

```
npm run server
```

## Docker (BrowserSync, port 3000)

Build and run a container that generates the site (docs + API) and serves it via BrowserSync on port 3000.
When opening `/` or `/api/`, it redirects to Korean pages by default (`/index.ko.html`, `/api/index.ko.html`).

This Docker build expects `node_modules/` and `api/node_modules/` to exist in the build context. If you don't want to install Node locally, you can install deps via Docker:

```bash
docker run --rm -v "$PWD":/app -w /app node:10-buster npm ci
docker run --rm -v "$PWD/api":/app -w /app -e npm_config_ignore_scripts=true node:10-buster npm install
```

```bash
docker build -t screeps-docs .
docker run --rm -p 3000:3000 screeps-docs
```

## Docker Compose

```bash
docker compose up --build
```
