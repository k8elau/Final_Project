//galaxy builder: http://29a.ch/sandbox/2011/neonflames/# for inspo
//the person also put up a github of his code for that ^ look at it for help
// give person the option of adding little stars too:http://billsnyderastrophotography.com/wp-content/uploads/2012/10/M31-Andromeda-Galaxy_color-from-Martin-Resize.jpg 

//luminescent stars and stuff
//when they press down the mouse different bits of music play (but only when they press)  
//work on drawing when the person clicks 
//let them draw their own constellations? :http://p5js.org/examples/demos/Hello_P5_Drawing.php 
//http://zenbullets.com/book.php 

// 4 7 8 breathing

//GOAL: GET BRUSHSTROKES TO COME OUT WHEN MOUSE PRESSED 

//part space maker part relaxation space 
//Relaxation Space Maker ?

//http://p5play.molleindustria.org/examples/index.html?fileName=collisions4.js 
//a sound section: every time a thing bounces it makes a sound? 

//https://processing.org/examples/tree.html <- use for earth?


var red; //global variable for maximum scope 
var orange;
var yellow;
var green;
var blue;
var violet;
var white;
var black;
var whichColor; 

var balloon; // all the buttons
var flower;
var bubbles;
var flames; 
var button;

var ballLocX;
var ballLocY;
var bubbLocX = windowWidth/2;
var bubbLocY = windowHeight/2; 
var bubbLocationsX = [];
var bubbLocationsY = [];

var theSec;
var fourSecond;
var sevenSecond;
var eightSecond;
var milliseconds; 

//have array of triangle coordinates 
var translateY = 10;

var run = 1;
//var second = second(); //not working yet 

var balloonPressed = false;
var flowerPressed = false;
var bubblesPressed = false;
var flamesPressed = false;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255);
    
    //the colors that you can choose from
    red = color(255, 144, 134);
    orange = color(235, 173, 86);
    yellow = color(252, 220, 0);
    green = color(118, 225, 115);
    blue = color(93, 198, 225);
    violet = color(134, 67, 252);
    white = color(255, 255, 255);
    black = color(0, 0, 0);
    
    ballLocX = windowWidth/2;
    ballLocY = windowHeight/2;
    bubbLocX = windowWidth/2;
    bubbLocY = windowHeight/2;
    
    balloon = createButton('balloon');
    balloon.position(windowWidth/5, 0);
    balloon.mousePressed(baPressed);
    flower = createButton('flower');
    flower.position(windowWidth/4, 0);
    flower.mousePressed(floPressed);
    bubbles = createButton('bubbles');
    bubbles.position(windowWidth/3, 0);
    bubbles.mousePressed(buPressed);
    flames = createButton('flames');
    flames.position(windowWidth/2, 0);
    flames.mousePressed(fPressed);
}

function draw(){
    var currentTime = millis();
    
    if(balloonPressed){ 
        airBreath(); 
    }
    if(flowerPressed){
        earthBreath();
    }
    if(flamesPressed){
        fireBreath();
    }
    if(bubblesPressed){
        waterBreath();
    }
    displaySeconds(); 
}

/*
the purpose of the next four functions is to prevent multiple breathing exercises running at once. 
it also restarts all the values
*/
function baPressed(){
    translateY = 10;
    run = 1;
    balloonPressed = true;
    bubblesPressed = false;
    flamesPressed = false;
    flowerPressed = false;
}

function buPressed(){
    run = 1;
    bubbLocX = windowWidth/2;
    bubbLocY = windowHeight/2;
    bubblesPressed = true;
    balloonPressed = false;
    flamesPressed = false;
    flowerPressed = false;
}

function fPressed(){
    run = 1;
    flamesPressed = true;
    balloonPressed = false;
    flowerPressed = false;
    bubblesPressed = false;
}

function floPressed(){
    run = 1;
    flowerPressed = true;
    flamesPressed = false;
    balloonPressed = false;
    bubblesPressed = false;
}


function chooseColor(){
    
}

function airBreath(){
    if(run == 1){
    milliseconds = millis();  
    fourSecond = milliseconds + 4000;
    sevenSecond = fourSecond + 7000;
    eightSecond = sevenSecond + 8000;
    run = 2;
    }
    background(158, 212, 255);
    stroke(0);
    strokeWeight(1);
    fill(red);
    push();
    if(millis()< fourSecond){
        translateY = translateY - .5;
    }
    else if(millis() < sevenSecond){
        translateY = 0;
    }
   else if(millis() < eightSecond){
        translateY = translateY + .5;
       //find way to make it loop
    }
    
    translate(0, translateY);
    noFill();
    bezier(622, 379, 577, 384, 662, 464, 588,454);
    fill(red);
    noStroke();
    triangle(windowWidth/2, windowHeight/2+10, (windowWidth/2) - 10, (windowHeight/2) + 40, (windowWidth/2) + 10, (windowHeight/2) + 40);
    ellipse(ballLocX, ballLocY, 60, 65);
    pop();
}


function earthBreath(){ //http://p5js.org/examples/demos/Hello_P5_Simple_Shapes.php
    if(run == 1){
            background(green); 

    milliseconds = millis();  
    fourSecond = milliseconds + 4000;
    sevenSecond = fourSecond + 7000;
    eightSecond = sevenSecond + 8000;
    run = 2;
    }
    
    push();
    fill(red, 150);
    noStroke();
    //adjust rotations 
    translate(windowWidth/2, windowHeight/2)
      if(millis()<fourSecond){
        rotate(PI/3);
        ellipse(0, 30, 20, 80);
        rotate(PI/3);
        ellipse(0, 30, 20, 80);
    }
    else if(millis() < sevenSecond){
        rotate(PI);
        ellipse(0, 30, 20, 80);
        rotate(4*PI/3);
        ellipse(0, 30, 20, 80);
    }
   else if(millis() < eightSecond){
       rotate(5*PI/3);
        ellipse(0, 30, 20, 80);
       rotate(2*PI);
       ellipse(0, 30, 20,80);
    
    }
    
    /*
  for (var i = 0; i < 10; i++) {
    ellipse(0, 30, 20, 80);
      //insert something about time here so each petal shows after a second? 
    rotate(PI/4);
      //as each second passes, another petal is added?
      //have petals of 7? or just keep petal of 4 for four seconds
      //remove petals from a flower of 8?
  }
  */
    pop();
    fill(yellow);
    noStroke();
    ellipse(windowWidth/2, windowHeight/2, 20, 20);
}
    
function fireBreath(){
    push();
    background(255);
    translate(windowWidth/2, windowHeight/2);
    fill(orange);
    for(var i = 0; i <10; i++){
    ellipse(windowWidth/2, 30, 20, 20); //make ring of circles 
    rotate(PI/8); //how to make radius of rotation smaller? 
    }
    pop();

}

function waterBreath(){ //add bubble details later 
    background(black);
    fill(blue);
    noStroke();
    if(run == 1){
    milliseconds = millis();  
    fourSecond = milliseconds + 4000;
    sevenSecond = fourSecond + 7000;
    eightSecond = sevenSecond + 8000;
    run = 2;
    }
   
    
    /*
        fill(blue);
        noStroke();
        bubbLocX = random(0, windowWidth);
        bubbLocY = random(0, windowHeight);
        bubbLocationsX[i] = bubbLocX;
        bubbLocationsY[i] = bubbLocY;
        ellipse(bubbLocX, bubbLocY, 50, 50);
        pop();
        bubbLocationX[i]++;
        bubbLocationsY[i]++;
        */
    
     
    if(millis()<fourSecond){
        bubbLocY = bubbLocY + .5;
    }
    else if(millis() < sevenSecond){
        bubbLocY = bubbLocY;
    }
   else if(millis() < eightSecond){
        bubbLocY = bubbLocY - .5;
       //find way to make it loop
    }
    
    fill(blue);
    noStroke();
    ellipse(bubbLocX, bubbLocY, 50, 50);
    var offset = random(-1, 1);
    //bubbLocY++;
    bubbLocX = offset + bubbLocX;
}

function displaySeconds(){
    push();
    fill(255);
    rect(0, 0, 40, 40);
    fill(0);
    textSize(30);
    text(second(), 5, 35);
    pop();
}
