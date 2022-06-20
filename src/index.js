const { Document } = require('./entity/Document');
const { DocumentRepository } = require('./helpers');
const fs = require('fs');
const events = require('events');

const eventEmitter = new events.EventEmitter();
const document = new Document(new DocumentRepository(), eventEmitter);

fs.readFile(`${process.cwd()}/scheduleData.txt`, document.readDocument);

eventEmitter.addListener('connection', (res) => {console.log(res)});