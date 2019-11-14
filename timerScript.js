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

}

function TimerDone() {
    color.style.backgroundColor = "crimson";
    console.log("TIME IN THE ROUND");
    timerDone = true;
    timeaudio.play();
    timerPrefix = "TIME IN THE ROUND ";
}

function GetDeltaTime() {
    return endTime - new Date().getTime();
}

function Tick() {
    deltaTime = GetDeltaTime();
    let _minLeft = Math.floor(deltaTime / (1000 * 60));
    let _secLeft = Math.floor((deltaTime % (1000 * 60)) / 1000);

    if (_minLeft == 0 && _secLeft == 0 && !timerDone) {
        TimerDone();
    }
    let text = timerDone ? timerPrefix + (_minLeft +1) + ":" + _secLeft : _minLeft + ":" + _secLeft
    visualTime.innerHTML = text;
    console.log(text);
}