# syntax=docker/dockerfile:1
FROM  node:12.18.1
ENV NODE_ENV=production
WORKDIR /app
COPY . .
RUN npm install --force
RUN npm  i --legacy-peer-deps --production
EXPOSE 3000
CMD ["node", "src/index.js"]