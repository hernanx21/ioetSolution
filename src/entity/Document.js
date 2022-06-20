class Document {
    constructor(DocumentHelper, fs) {
        this.result = '';
        this.err = false;
        this.data = '';
        this.documentHelper = DocumentHelper;
        this.fs = fs;
    }

    run = () => {
        this.readDocument(this.err, this.fs.readFileSync(`${process.cwd()}/scheduleData.txt`, 'utf8'))
    }

    readDocument = (err, data) => {
        if (err) throw 'something went wrong';
        const scheduleData = data.toString();
    
        let userSchedule = scheduleData.split('\n');
        this.setResult(this.documentHelper.iterateOverSchedule(userSchedule, userSchedule.length - 1));
    }

    setResult = (result) => {
        this.result = result;
    }

    getResult = () => {
        return this.result;
    }
}


module.exports = {Document};