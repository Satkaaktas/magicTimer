let sek = 90, min = 0;
let startTime, endTime, deltaTime;
let interval;
let timePreviousFrame;


function StartCountdown() {
    startTime = new Date().getTime();
    endTime = GetEndTime();
    interval = setInterval(Tick, 900);
}

function GetEndTime() {
    return startTime + (min * 1000 * 60) + (sek * 1000);
}

function Pause() {
    clearInterval(interval);
    deltaTime = GetDeltaTime();
}

function Resume() {
    startTime = new Date().getTime();
    endTime = deltaTime + startTime;
    interval = setInterval(Tick, 900);
}

function Reset() {
    clearInterval(interval);
}

function TimerDone() {
    console.log("TIME IN THE ROUND");
}

function GetDeltaTime() {
    return endTime - new Date().getTime();
}

function Tick() {
    deltaTime = GetDeltaTime();
    let _minLeft = Math.floor(deltaTime / (1000 * 60));
    let _secLeft = Math.floor((deltaTime % (1000 * 60)) / 1000);

    if (_minLeft == 0 && _secLeft == 0) {
        TimerDone();
    }

    console.log("Min:" + _minLeft + " Sec:" + _secLeft);
}
