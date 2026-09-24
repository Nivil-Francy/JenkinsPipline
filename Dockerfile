# Build stage
FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY app.js ./

# Production stage
FROM node:24-alpine

WORKDIR /app

# npm is only required during the build, not at runtime
RUN rm -rf /usr/local/lib/node_modules/npm

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/app.js ./

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "app.js"]
