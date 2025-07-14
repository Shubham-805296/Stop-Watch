let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelectorAll(".digit");
let int = null;

const startBtn = document.querySelector(".btn1:nth-child(1)");
const stopBtn = document.querySelector(".btn1:nth-child(2)");
const resetBtn = document.querySelector(".btn1:nth-child(3)");

startBtn.addEventListener("click", () => {
    if (int !== null) clearInterval(int);
    int = setInterval(displayTimer, 10);
});

stopBtn.addEventListener("click", () => clearInterval(int));

resetBtn.addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    updateDisplay();
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

function updateDisplay() {
    timerRef[0].innerText = pad(hours);
    timerRef[1].innerText = pad(minutes);
    timerRef[2].innerText = pad(seconds);
    timerRef[3].innerText = pad(Math.floor(milliseconds / 10));
}

function pad(value) {
    return value.toString().padStart(2, "0");
}