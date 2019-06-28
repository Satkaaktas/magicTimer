
// variabels
//shift + alt + f
let minutes,
    seconds,
    inputTime,
    timeLeft;

inputTime = 50;
endTime = Date.parse(new Date) + (inputTime * 60000);

var minutesLeft = function () {
    currentTime = Date.parse(new Date());
    timeLeft = endTime - currentTime;
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    return minutes;
}

let startButton = document.getElementById("startTimer");
var timeInput = document.getElementById("countdownTime");
startButton.addEventListener("click", startCountdown);

function getCountdownTime(){
    console.log(timeInput.value);
    setInterval(updateClock, 1000);
}

function startCountdown() {
    getCountdownTime();
    endTime = Date.parse(new Date) + (inputTime * 60000);
}

function calculateTimeLeft() {
    currentTime = Date.parse(new Date());
    timeLeft = endTime - currentTime;
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    return {m:minutes, s:seconds};
}

function updateClock() {

    currentTime = Date.parse(new Date());
    timeLeft = endTime - currentTime;
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML = calculateTimeLeft();
}

/*
let currentTime,
    inputTime,
    countdownTimeMilisec,
    currentTimeMilisec,
    endOfCountdownMilisec;


inputTime = 1;
currentTimeMilisec = getCurrentTimeInMilisec();
countdownTimeMilisec = convertMinToMilisec(inputTime)
endOfCountdownMilisec = countdownTimeMilisec + currentTimeMilisec
console.log("countdowntime in milisec = " + countdownTimeMilisec);
console.log("current time = " + currentTimeMilisec);
console.log("Countdown end time = " + (endOfCountdownMilisec));
console.log((5%7));
//startCountdown();

function getCurrentTimeInMilisec(){
    return Date.parse(new Date());
}

function convertMinToMilisec(min){
    // 1 minute = 60000 milliseconds
    return min * 60000;
}

function convertMilisecToMin(milisec){
    // 1 minute = 60000 milliseconds
    return milisec / 60000;
}

function showTimeLeft(){
    console.log(endOfCountdownMilisec - currentTimeMilisec);
}

function startCountdown(){
    setInterval(timeLeft, 1000)
}

function timeLeft(){
    if(endOfCountdownMilisec <= getCurrentTimeInMilisec()){
        console.log("countdown completed")
    }else{
        console.log("min " + convertMilisecToMin)

    }
}

*/

//console.log(s);

/*
let timer = 5;
let counter = 1;
let timePreviousFrame;

function setup() {
    createCanvas(1000  , 500);
    timePreviousFrame = new Date().getTime();
}

function draw() {
    background(220);
    textAlign(CENTER, CENTER);
    textSize(100);
    text(timer, width / 2, height / 2);
    counter -= deltaTime();

    // while (timer > 0) {  // this doesn't work because it's all happening at the same time
    //   timer --;
    // }

    // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
    // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
    // this can be used to determine if the number on the left is divisible by the number on the right

    if (counter <= 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        counter += 1;
        timer--;
    }
    if (timer == 0)
    {
        text("GAME OVER", width / 2, height * 0.7);
    }
}

//returns time since last frame in seconds
function deltaTime() {
    let _time = new Date().getTime();
    let _deltaTime = _time - timePreviousFrame;
    timePreviousFrame = _time;
    return (_deltaTime * 0.001);
}*/