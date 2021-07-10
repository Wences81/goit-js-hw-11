import '../css/main.css';


const refs = {
            days: document.querySelector('[data-days]'),
            hours: document.querySelector('[data-hours]'),
            mins: document.querySelector('[data-minutes]'),
            secs: document.querySelector('[data-seconds]'),
            startBtn: document.querySelector('[data-start]'),
            input: document.getElementById('[#date-selector]'),
        };
  
class CountdownTimer {
    constructor({ targetDate }) {
        
        this.targetDate = targetDate;
        this.intervalId = null;
        this.isActive = false;
        this.refs = {
            days: document.querySelector('[data-days]'),
            hours: document.querySelector('[data-hours]'),
            mins: document.querySelector('[data-minutes]'),
            secs: document.querySelector('[data-seconds]'),
            startBtn: document.querySelector('[data-start]'),
            input: document.getElementById('[#date-selector]'),
        };
    }

        // setInterval(() => {
        //     const startDate = Date.now();
        //     const time = this.targetDate - startDate;
        //     if (time > 0) {
        //         const { days, hours, mins, secs } = this.getTimeComponents(time);
        //         this.updateClockface(this.getTimeComponents(time));
        //     } else {
        //         clearInterval();
                
        //     }            
        // }, 1000);
    

    start() {
        if (this.isActive) {
            return;
    };
   
    this.isActive = true;    
        setInterval(() => { 
        const startTime = new Date();
        const countTime = this.targetDate - startTime;
        const timeCount= this.getTimeComponents(countTime);
        this.updateClockface(timeCount);
        }
    , 1000);
    }
    


    getTimeComponents(time) {
    const days =  this.padday(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins =  this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs =  this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
    }

    padday(value) {
        return String(value).padStart(3, '0');
    }

    pad(value) {
    return String(value).padStart(2, '0');
    }

    updateClockface({ days, hours, mins, secs }) {
    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`; 
}
};


 

const timer =  new CountdownTimer({
    
    targetDate: new Date('Jul 27, 2021'),    
});



refs.startBtn.addEventListener('click', () => {
    timer.start();
});

