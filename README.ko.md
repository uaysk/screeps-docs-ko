이 프로젝트는 Screeps 온라인 게임의 [문서 웹사이트](http://docs.screeps.com) 소스 코드를 포함합니다.

이 프로젝트를 빌드하려면 Node.js가 필요합니다.

1. 모든 npm 의존성을 설치합니다:

```
npm install
cd api
npm install
cd ..
```
    
2. 정적 사이트를 생성합니다:

```
npm run generate
cd api
npm run generate
cd ..
```

실시간으로 변경 사항을 동기화하려면 `generate` 대신 `generate-watch`를 사용할 수 있습니다.

3. 개발 서버를 실행합니다:

```
npm run server
```

## Docker (BrowserSync, 포트 3000)

문서(메인 + API)를 생성한 뒤 BrowserSync로 3000번 포트에서 서빙하는 컨테이너를 빌드/실행합니다.
`/` 또는 `/api/`로 접속하면 기본적으로 한국어 페이지(`/index.ko.html`, `/api/index.ko.html`)로 리다이렉트됩니다.

이 Docker 빌드는 빌드 컨텍스트에 `node_modules/` 및 `api/node_modules/`가 존재한다고 가정합니다. 로컬에 Node를 설치하지 않으려면, 아래처럼 Docker로 의존성을 설치할 수 있습니다:

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
