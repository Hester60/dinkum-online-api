FROM node:16-alpine

WORKDIR /usr/src/api

COPY package*.json .

RUN npm i -g @nestjs/cli

CMD yarn install && npm run start:dev
