const { Document } = require('./entity/Document');
const { DocumentHelper } = require('./helpers/DocumentHelper');
const fs = require('fs');

const document = new Document(new DocumentHelper(), fs);

document.run();
console.log(document.getResult())