let playButton;
let plaerName;
let canvas;
let greeting;
let startGame = false;
let endGame = false;
let furby;
let nameText;
let scoreText;

let score = 0;

let furbyX = [];
let furbyY = [];

let userAgent;

function preload(){
  furby = loadImage('images/furby.png');
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index",-1);
  canvas.position(0,0);

  greeting = createP("Please type your name and press enter")
  playerName = createInput("");
  playerName.changed(start);

  imageMode(CENTER);

}

function start(){
  startGame = true;
  playerName.hide();
  greeting.hide();

  nameText=createP("");
  scoreText = createP("");
  playButton = createButton("Mine Furbycoin");

}

function furbyMine(){
  userAgent = navigator.userAgent;
  nameText.html("Hi " + playerName.value());
  scoreText.html("You've generated $" + score*10 + " Furbycoins on" + userAgent);
  playButton.mousePressed(furbyCoords);

  for(let i = 0; i<furbyX.length; i++){
    image(furby, furbyX[i], furbyY[i], 50, 50);
  }

  if(score == 100){
    startGame = false
    endGame = true;
  }

}

function furbyCoords(){
  //score++ is score+1
  score++;
  furbyX.push(random(50, width-50));
  furbyY.push(random(50, height-50));
}

function endScreen(){
  background(random(255),random(255),random(255));
  image(furby, width/2, height/2);
}

function draw(){
  background(150);
  if(startGame == true){
    furbyMine();
  }
  if(endGame == true){
      endScreen();
  }



}
