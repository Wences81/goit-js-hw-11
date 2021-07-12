import '../css/main.css';
import Swal from 'sweetalert2'

const refs = {
startBtn: document.querySelector('[data-start]'),
inputDate: document.querySelector('#date-selector'),
days: document.querySelector('[data-days]'),
hours: document.querySelector('[data-hours]'),
minutes: document.querySelector('[data-minutes]'),
hours: document.querySelector('[data-seconds]'),
};



class CountdownTimer {
    constructor() {
        this.intervalId = null;
        this.isActive = false;
        this.refs = {
            startBtn: document.querySelector('[data-start]'),
            inputDate: document.querySelector('#date-selector'),
            days: document.querySelector('[data-days]'),
            hours: document.querySelector('[data-hours]'),
            minutes: document.querySelector('[data-minutes]'),
            seconds: document.querySelector('[data-seconds]'),
            };
    }



inputChoose () {
        const input = refs.inputDate.value; 
        const inputDate = new Date(input);
        const currentDate = Date.now()
        const countTime = inputDate - currentDate;
        
        if (countTime < 0) {
            refs.startBtn.disabled = true;
            Swal.fire ({
                icon: 'error',
                title: 'Oops...',
                text: 'Please choose a date in the future',       
            })
            return;
        }
        if (countTime > 0){
          refs.startBtn.disabled = false;  
        }
}


start(){
        if (this.isActive) {   
            return;
        }
   
    this.isActive = true;    
       this.intervalId = setInterval(() => { 
        
        const input = refs.inputDate.value; 
        const inputDate = new Date(input);
        const currentDate = Date.now()
       
        const countTime = inputDate - currentDate;
        const timeCount= this.convertMs(countTime);
        this.updateClockface(timeCount);
        if (countTime < 1000) {
            clearInterval(this.intervalId);
        }
        }
    , 1000);
    }

convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
       
        const days = this.padday(Math.floor(ms / day));
        const hours = this.pad(Math.floor((ms % day) / hour));
        const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
        const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));
      
        return { days, hours, minutes, seconds };
      }
      
padday(value) {
        return String(value).padStart(3,'0')};
    
pad(value) {
            return String(value).padStart(2,'0')};
            
updateClockface ({ days, hours, minutes, seconds }) {
        this.refs.days.textContent = `${days}`;
        this.refs.hours.textContent = `${hours}`;
        this.refs.minutes.textContent = `${minutes}`;
        this.refs.seconds.textContent = `${seconds}`;
            }     
}


const timer = new CountdownTimer({});

refs.startBtn.addEventListener('click', () => {
    timer.start();
});

refs.inputDate.addEventListener('change', () => {
    timer.inputChoose();});
