FROM node:16-alpine

RUN mkdir /ioetSolution

COPY package.json  /ioetSolution

COPY ./src/ /ioetSolution/src

COPY ./test/ /ioetSolution/test

COPY scheduleData.txt /ioetSolution

WORKDIR /ioetSolution

RUN npm install

CMD npm run start