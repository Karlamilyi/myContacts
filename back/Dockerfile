FROM node:22-alpine

COPY package.json .

RUN npm install --production

COPY . .

COPY .env /src/.env

WORKDIR /src

EXPOSE 3000

CMD ["node", "/src/index.js"]