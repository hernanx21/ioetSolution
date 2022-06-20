class DocumentHelper {
    constructor() {
        this.employees = [];
        this.counter = [];
        this.finalMessage = ''
    }

    iterateOverSchedule = (userSchedule, index) => {

        if(!userSchedule[index]) 
            return console.log('Wrong Format, please check your input');
    
        let user = this.getUserSchedule(userSchedule[index]);
    
        for(let i = 0; i < userSchedule.length; i++) {
            if(i != index) {
                let userData = this.getUserSchedule(userSchedule[i]);
                if(this.validateRedundancy(userData, user)) {
                    this.employees.push(user[0] + '-' + userData[0]);
                    this.setCount(user[1], userData[1]);
                }
            }
        }
    
        if (index === 0){
            return this.getResult(this.employees, this.counter);
        }
        
        return this.iterateOverSchedule(userSchedule, index - 1);
    }

    getUserSchedule = (user) => {
        let userData = user.split('=');
        
        return [userData[0], this.getSchedule(userData[1])];
    }

    getSchedule = (schedule) => {
        let scheduleData = schedule.split(',');
        return scheduleData.map((item) => item.replace('\r', ''));
    }

    validateRedundancy = (currentUser, lastUser) => {
        let admit = true;
        if(this.employees.length === 0) 
            return admit
    
        for(let i = 0; i < this.employees.length; i++) {
            let names = this.employees[i].split('-');
            if((names[0] === currentUser[0] || names[0] === lastUser[0]) && (names[1] === currentUser[0] || names[1] === lastUser[0])) {
                admit = false;
            }
        }
            
        return admit;
    }

    setCount = (schedule1, schedule2) => {
        let counter = 0;
        let Days = [];
        let Hours = [];
        
        for(let i = 0; i < schedule1.length; i++) {
            for(let j = 0; j < schedule2.length; j++) {
                Days[0] = schedule1[i].substring(0, 2);
                Days[1] = schedule2[j].substring(0, 2);
    
                if(Days[0] === Days[1]) {
                    Hours[0] = this.splitHours(schedule1[i]);
                    Hours[1] = this.splitHours(schedule2[j]);
                    
                    if((Hours[0][0] <= Hours[1][0]) && (Hours[0][1] >= Hours[1][1]))
                        counter++;
                    
                }
            }
        }
    
        this.counter.push(counter);
    }

    splitHours = (period) => {
        let Hours = [];
        Hours = period.split('-');
        
        Hours[0] = Hours[0].substring(2,4);
        Hours[1] = Hours[1].substring(0,2);
    
        return Hours;
    }

    getResult = (employees, counter) => {
        for(let i = 0; i < counter.length; i++) {
            if(counter[i] > 0)
                this.finalMessage += `${employees[i]}: ${counter[i]}\n`;
        }
    
        return this.finalMessage;
    }
}


module.exports = { DocumentHelper };