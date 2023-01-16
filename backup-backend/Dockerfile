# Install dependencies only when needed
FROM node:16-alpine 
#Next we create a directory to hold the application code inside the image
WORKDIR /app
# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./


# RUN yarn install
# #To bundle your app's source code inside the Docker image, use the COPY instruction:
COPY . .
# should I have yarn build at this stagge ?

RUN ls -a

CMD ["node", "dist/server.js"]
