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
var bubbLocX;
var bubbLocY; 
var bubbLocationsX = [];
var bubbLocationsY = [];

var theSec;
var fourSecond;
var sevenSecond;
var eightSecond;

var x; //which function to carry out
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
    angleMode(DEGREES);
    
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
    /*
    theSec = second();
    console.log("beginning" + theSec); 
    if(run == 1){
        fourSecond = theSec + 4;
        run = 2;
        background(0);
    }
    if(theSec == fourSecond && run == 2){
        sevenSecond = theSec + 7;
        //while(theSec
        background(255);
    }
    console.log("four" + fourSecond);
   // background(255);
   */

    displaySeconds(); 
    
    /*
    if(run == 1){
        fourSecond = millis() + 4000;
        while(millis() < fourSec){
            fourSec(x);
        }
        run = 2;
    }
    else if(run == 2){
        sevenSecond = millis() + 7000;
        while(millis() < sevenSec){
            sevenSec(x);
        }
        run = 3;
    }
    else if(run == 3){
        eightSecond = millis() + 8000;
        while(millis() < eightSec){
            eightSec(x);
        }
        */
}

/*
the purpose of the next four functions is to prevent multiple breathing exercises running at once. 
*/
function baPressed(){
    balloonPressed = true;
    bubblesPressed = false;
    flamesPressed = false;
    flowerPressed = false;
}

function buPressed(){
    bubblesPressed = true;
    balloonPressed = false;
    flamesPressed = false;
    flowerPressed = false;
}

function fPressed(){
    flamesPressed = true;
    balloonPressed = false;
    flowerPressed = false;
    bubblesPressed = false;
}

function floPressed(){
    flowerPressed = true;
    flamesPressed = false;
    balloonPressed = false;
    bubblesPressed = false;
}

function palette(){ 
    for(var i = 0; i < 8; i ++){
     ellipse(25, 25, 10, 10);  //use this to draw the palette colors?  
        
    }
}


function chooseColor(){
    
}

function airBreath(){
    
   // noFill();
    background(158, 212, 255);
    stroke(255, 102, 0);
    stroke(0, 0, 0);
    strokeWeight(1);
    push();
    noFill();
    translate(572, 374);
    bezier(50, 15, 5, 10, 90, 90, 15, 80);
    //bezier(622, 389, 577, 384, 662, 662, 588,454);
    pop();
    line(windowWidth/2, windowHeight/2+10, windowWidth/2, windowHeight/2 + 20);
    fill(red);
    push();
    translate(0, translateY);
    noStroke();
    triangle(windowWidth/2, windowHeight/2+10, (windowWidth/2) - 10, (windowHeight/2) + 40, (windowWidth/2) + 10, (windowHeight/2) + 40);
    ellipse(ballLocX, ballLocY, 60, 65);
    translateY--;
    pop();
   
}

function earthBreath(){
    push();
    background(black);
    fill(yellow);
    ellipse(windowWidth/2, windowHeight/2, 60, 60); 
    pop();
    if(second() > 0 && second() < 15){ //refine these a little bit using modulo
        ellipse(windowWidth/2 + 10, windowHeight/2, 60, 60);
    }
    if(second() >= 15 && second() < 30){
        
        ellipse(windowWidth/2 - 10, windowHeight/2, 60, 60);
    }
    if(second() >= 30 && second() < 45){
        ellipse(windowWidth, windowHeight/2 - 10, 60, 60);
    }
    if(second() >=45 && second() < 60){
        
        ellipse(windowWidth, windowHeight/2 + 10, 60, 60);
        
    }
    /*
    push();
    noStroke();
    fill(green);
    pop();
    rect(windowWidth - 100, 0, 100, windowHeight);
    */
}

function fireBreath(){
    push();
    rotate(30);
    ellipse(windowWidth/2, 30, 20, 20); //make ring of circles 
    pop();

}

function waterBreath(){ //add bubble details later 
    background(black);
    /*
    for(var i = 0; i < 6; i++){
        push();
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
    }
    */
    fill(blue);
    noStroke();
    ellipse(bubbLocX, bubbLocY, 50, 50);
    var offset = random(-1, 1);
    bubbLocY++;
    bubbLocX = offset + bubbLocX;
    
}

function timePass(){
    //used to count seconds 
    
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

function fourSec(){
    
    
}

function sevenSec(){
    
    
}

function eightSec(){
    
    
}