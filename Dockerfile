FROM node:current-slim

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start"]