FROM node:10-buster AS build

WORKDIR /app

COPY . .

# This Dockerfile expects dependencies to already exist in the build context
# (`node_modules/` and `api/node_modules/`). This avoids `npm ci` inside Docker
# which can be slow or restricted in some environments.
RUN test -d node_modules || (echo "Missing node_modules/. Install deps before building the image." && exit 1)
RUN test -d api/node_modules || (echo "Missing api/node_modules/. Install API deps before building the image." && exit 1)

# Build main docs into /app/public
RUN npm run generate

# Build API docs into /app/public/api (see api/_config.yml public_dir)
RUN cd api && npm run generate


FROM node:10-buster-slim AS runtime

WORKDIR /app

RUN npm i -g browser-sync@2.18.8

COPY --from=build /app/public ./public
COPY --from=build /app/browser-sync.config.js ./browser-sync.config.js

EXPOSE 3000

CMD ["browser-sync", "start", "--config", "browser-sync.config.js"]
