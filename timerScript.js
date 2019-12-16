let sec, min;
let startTime, endTime, deltaTime;
let interval;
let timePreviousFrame;
let timerPrefix = "";
let timeaudio = new Audio('audio/TIME IN THE ROUND.m4a');
let testSound = new Audio('audio/test.mp3');
let timerDone = false;

//tests
let color = document.getElementById("jumbotron");


//Eventlistener vars
let startButton = document.getElementById("startButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");
let resumeButton = document.getElementById("resumeButton");
let minValue = document.getElementById("minInput");
let secValue = document.getElementById("secInput");
let visualTime = document.getElementById("time");
let soundTestButton = document.getElementById("soundTest");

//Eventlistener 
startButton.addEventListener("click",StartCountdown);
pauseButton.addEventListener("click",Pause);
resetButton.addEventListener("click",Reset);
resumeButton.addEventListener("click", Resume);
soundTestButton.addEventListener("click", SoundTest);

function getMinAndSec(){
    min = minValue.value;
    sec = secValue.value;
}

function StartCountdown() {
    color.style.backgroundColor = "dodgerblue";
    timerDone = false;
    getMinAndSec();
    startTime = new Date().getTime();
    endTime = GetEndTime();
    clearInterval(interval);
    interval = setInterval(Tick, 990);
}

function GetEndTime() {
    return startTime + (min * 1000 * 60) + (sec * 1000);
}

function SoundTest()
{
    testSound.play();
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
    visualTime.innerHTML = "Magic Timer by SPA ";
    color.style.backgroundColor = "dodgerblue";
}

function TimerDone() {
    color.style.backgroundColor = "crimson";
    console.log("TIME IN THE ROUND");
    timerDone = true;
    timeaudio.play();
    timerPrefix = "TIME IN THE ROUND -";
}

function GetDeltaTime() {
    return endTime - new Date().getTime();
}

function Tick() {
    deltaTime = GetDeltaTime();
    let _minLeft = Math.floor(deltaTime / (1000 * 60));
    let _secLeft = Math.floor((deltaTime % (1000 * 60)) / 1000);

    if (_minLeft <= 0 && _secLeft <= 0 && !timerDone) {
        TimerDone();
    }

    //Because of the way we calculate the remaining time, negative numbers become inconsequential.
    //This handles the formating after the timer reaches zero. (And adds a zero before single digit numbers)
    let _minPrefix = _minLeft < 10 && _minLeft > -10? "0" : "";
    let _secPrefix = _secLeft < 10 && _secLeft > -10? "0" : "";
    let _minLeftText = _secLeft > -1 ? 0 : (_minLeft *-1)-1; //Handles the difference between 00:00 and -XX:XX

    let text = timerDone ? timerPrefix + _minPrefix + _minLeftText + ":" + _secPrefix + _secLeft *-1 : _minPrefix + _minLeft + ":" + _secPrefix + _secLeft;
    visualTime.innerHTML = text;
    console.log(text);
}