FROM node:16-alpine as dev

WORKDIR /usr/src/api

COPY package*.json .

RUN npm i --location=global typeorm ts-node
RUN npm i --location=global @nestjs/cli

CMD yarn install && npm run start:dev

FROM node:16-alpine as prod

WORKDIR /usr/src/api

COPY package*.json .

RUN npm i --location=global typeorm ts-node
RUN npm i --location=global @nestjs/cli

CMD yarn install && npm run build && npm run start
