let timer = 5;
let counter = 1;
let timePreviousFrame;

function setup() {
    createCanvas(400, 400);
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

function deltaTime() {
    let _time = new Date().getTime();
    let _deltaTime = _time - timePreviousFrame;
    timePreviousFrame = _time;
    return (_deltaTime * 0.001);
}