FROM node:20-alpine3.20

COPY ./zeus /home/node/app

WORKDIR /home/node/app

RUN npm i
RUN npm run build

CMD [ "npm", "run",  "start" ]