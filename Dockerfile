FROM node:10-alpine as node

WORKDIR /app

COPY package*.json /app/

RUN npm install

RUN npm install express

RUN npm install  body-parser

RUN npm install mysql2

COPY ./ /app/

FROM nginx:1.13

COPY --from=node /app/dist/ /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 8100

CMD ["node", "app.js"]
