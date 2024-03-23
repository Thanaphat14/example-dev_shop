FROM node:14-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npm install express

RUN npm install  body-parser

RUN npm install mysql2

RUN npm install ejs

COPY . .

EXPOSE 8100

CMD ["node", "app.js"]
