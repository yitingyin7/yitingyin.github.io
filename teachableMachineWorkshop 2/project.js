let canvas;
let video;
let classifier;
// let flippedVideo;
let cover;
let startText;
let waterText;
let water;
let happy;
let waterIns;
let owner;
let hand;
let startGame = false;
let waterGame = false;
// let score = 0;
let startButton;
let happyText1 = "Puppy is happy! Press 'Next'";
let happyText2 = "Puppy is happy! Press 'Next'";
let happyText3 = "Puppy is happy! Press 'Next'";
let nextButton1
let nextButton2
let nextButton3
let gobackButton
let ownerButton
let ownerText
let ownerIns
let ownerGame = false;
let ownerBegin = false;
let petBegin = false;
let petButton;
let petText;
let petIns;
let petIns2;
let petGame2 = false;
let endText
let endGame = false;
let endPic

let label;

function preload(){
  //add a link to your own data set here
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qqjjBis7/model.json');
  cover = loadImage('puppy/cover.gif');
  water = loadImage('puppy/water.gif');
  happy = loadImage('puppy/happy.gif');
  owner = loadImage('puppy/owner.gif');
  hand = loadImage('puppy/hand.gif');
  endPic = loadImage('puppy/end.gif');
}

function setup() {
 canvas = createCanvas(windowWidth, windowHeight);
 canvas.style('z-index', '-1');
 startText = createP('Click the button to play with Puppy<3');
 startText.position(550, 200);
 startButton = createButton('Play with Puppy');
 startButton.position(620, 255);
 startButton.mousePressed(waterStart);
 video = createCapture(VIDEO);
 video.size(320, 240);
 video.hide();
 // flippedVideo = ml5.flipImage(video);
 //
 classifyVideo();

}

function waterStart(){
  startGame = true;
  startButton.hide();
  startText.hide();
  waterButton = createButton('Feed water');
  waterButton.position(620, 270);
  waterButton.mousePressed(waterFed);
  waterText = createP('Feed me some water please!');
  waterText.position(580, 200);
  waterIns = createP('Hint: Click the button, and then put your');
  waterIns2 = createP('water bottle right in front of your face');
  waterIns.position(550, 550);
  waterIns2.position(550, 570);
  nextButton1 = createButton('next');
  nextButton1.position(650, 620);
  nextButton1.mousePressed(ownerStart);
  petButton.hide();
  nextButton3.hide();
  petText.hide();
  petIns.hide();
  petIns2.hide();
  petGame2 = false;

}

function waterFed(){
  waterGame = true;
}

function ownerStart(){
  ownerBegin = true;
  waterButton.hide();
  nextButton1.hide();
  waterText.hide();
  waterIns.hide();
  waterIns2.hide();
  ownerButton = createButton('Come play with Puppy');
  ownerButton.position(600, 270);
  ownerButton.mousePressed(ownerCame);
  ownerText = createP('Come play with me please!');
  ownerText.position(580, 200);
  ownerIns = createP('Hint: Click the button, and then show up to the camera');
  ownerIns.position(520,550);
  nextButton2 = createButton('Next');
  nextButton2.position(650, 620);
  nextButton2.mousePressed(petGame);
  waterGame = false;
  petGame2 = false;

}

function ownerCame(){
  ownerGame = true;
}

function petGame(){
  petBegin = true;
  ownerButton.hide();
  nextButton2.hide();
  ownerText.hide();
  ownerIns.hide();
  petButton = createButton('Pet Puppy with a hand');
  petButton.position(600, 270);
  petButton.mousePressed(pet);
  petText = createP('Come pet me please!');
  petText.position(580, 200);
  petIns = createP('Hint: Click the button, and then show');
  petIns2 = createP('your palm in front of the camera');
  petIns.position(550, 550);
  petIns2.position(550, 570);
  nextButton3 = createButton('Next');
  nextButton3.position(650, 620);
  nextButton3.mousePressed(end);
  ownerGame = false;

}

function pet(){
  petGame2 = true;
}

function end(){
  petButton.hide();
  nextButton3.hide();
  petText.hide();
  petIns.hide();
  petIns2.hide();
  endGame = true;
  endText = createP('Puppy is very happy to play with you! Press command+R to restart.')
  endText.position(530, 200);
  petGame2 = false;
}

function classifyVideo(){
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResults);
}

function gotResults(error, results){
  if(error){
    console.log(error);
    return
  }
  label = results[0].label;
  classifyVideo();
  console.log(results);
}

function draw() {
  background(252, 207, 222);
  image(video, 515, 0);
  //
  // textSize(32);
  // textAlign(CENTER, CENTER);
  // fill(255);
  // text(label, width/2, height - 16);
 image(cover, 550, 300, 250, 200);
 if (startGame){
   image(water, 550, 300, 250, 250);
 }
 if(label == 'bottle' && waterGame){
   image(happy, 550, 300, 250, 250);
   textSize(32);
   text(happyText1, 530, 500);
   stroke(random(255), random(255), random(255));
   strokeWeight(5);
 }
 if (ownerBegin){
   image(owner, 550, 300, 250, 250);
 }
 if(label == 'owner' && ownerGame){
   image(happy, 550, 300, 250, 250);
   textSize(32);
   text(happyText2, 530, 500);
   stroke(random(255), random(255), random(255));
   strokeWeight(5);
 }
 if (petBegin){
   image(hand, 550, 300, 250, 250);
 }
 if(label == 'hand' && petGame2){
   image(happy, 550, 300, 250, 250);
   textSize(32);
   text(happyText3, 530, 500);
   stroke(random(255), random(255), random(255));
   strokeWeight(5);
}
 if(endGame){
   image(endPic, 550, 300, 250, 250);
 }
}
