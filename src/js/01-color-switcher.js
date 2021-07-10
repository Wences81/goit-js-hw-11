  

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {

    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
};



const timer = {
    intervalId: null,
    isActive: false,

    start() {
        if (this.isActive) {
            return;
        }

        
        const startTime = Date.now();
        this.isActive = true;
        refs.startBtn.disabled = true;


        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            setBodyColor(deltaTime);
        }, 1000);

    },

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        refs.startBtn.disabled = false;
    }
};


refs.startBtn.addEventListener("click", () => {
    timer.start();
});

refs.stopBtn.addEventListener("click", () => {
    timer.stop();
});




const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setBodyColor()  {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
};