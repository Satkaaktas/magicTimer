
// variabels
let minutes,
    seconds,
    inputTime,
    timeLeft,
    standardTime = 50;
let startButton = document.getElementById("startTimer");
var timeInput = document.getElementById("countdownTime");

//eventlisteners
startButton.addEventListener("click", startCountdown);

//functions
function getCountdownTime(){
    return timeInput.value == "" || timeInput.value <= 0 ? standardTime : inputTime = timeInput.value
}

function updateClock() {
    currentTime = Date.parse(new Date());
    timeLeft = endTime - currentTime;
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    if(currentTime >= endTime){
        document.getElementById("time").innerHTML = "Countdown Ended! overtime "+minutes+":"+(seconds * -1);
    }else{
        document.getElementById("time").innerHTML = minutes+":"+seconds;
    }
}

function startCountdown() {
    inputTime = getCountdownTime();
    endTime = Date.parse(new Date) + (inputTime * 60000);
    setInterval(updateClock, 1000);
}