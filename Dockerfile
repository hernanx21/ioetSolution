FROM node:16-alpine
RUN mkdir /ioetSolution
COPY package.json  /ioetSolution
COPY src /ioetSolution
COPY test /ioetSolution
COPY scheduleData.txt /ioetSolution
WORKDIR /ioetSolution
RUN npm install
CMD npm run start