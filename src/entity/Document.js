class Document {
    constructor(documentRepository, emitter) {
        this.result = 'algo';
        this.err = '';
        this.data = '';
        this.emitter = emitter;
        this.documentRepository = documentRepository;
    }

    readDocument = (err, data) => {
        if (err) throw err;
        const scheduleData = data.toString();
    
        let userSchedule = scheduleData.split('\n');
        this.setResult(this.documentRepository.iterateOverSchedule(userSchedule, userSchedule.length - 1));
        this.emitter.emit('connection', this.result);
    }

    setResult = (result) => {
        this.result = result;
    }
}


module.exports = {Document};