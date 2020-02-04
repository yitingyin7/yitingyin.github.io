let mainpage;
let instruction;
let canvas;
let startButton;
let startGame = false;
let score = 0;
let badgeboard;
let scoreText;
let searchFoodButton;
let burger;
let badgeText;
let badgeNumber = 0;
let searchFoodText;
let cueText;
let cueNumber = 0;
let check;
let searchIcon;
let signUpButton;
let sponsoredButton;
let rateButton;
let commentButton;
let interestButton;
let reviewerButton;
let badgeButton;
let messageButton;
let signUp;
let rate;
let comment;
let interest;
let reviewer;
let badge;
let message;
let endGame = false;
let end
let bgm
let positive
let hintButton
let hintPopUp

let showCheck1 = false;
let showCheck2 = false;
let showCheck3 = false;
let showCheck4 = false;
let showCheck5 = false;
let showCheck6 = false;
let showCheck7 = false;
let showCheck8 = false;
let showCheck9 = false;
let showCheck10 = false;

let showBurger = false;
let showSearchIcon = false;
let showSignUp = false;
let showSponsored = false;
let showRate = false;
let showComment = false;
let showInterest = false;
let showReviewer = false;
let showMessage = false;
let showBadge = false;
let showHint = false;

function preload() {
  mainpage = loadImage('image/mainpage.jpg');
  burger = loadImage('image/burger.png');
  check = loadImage('image/check.png');
  searchIcon = loadImage('image/searchIcon.png');
  signUp = loadImage('image/signUp.png');
  sponsored = loadImage('image/sponsored.png');
  rate = loadImage('image/rate.png');
  comment = loadImage('image/comment.png');
  interest = loadImage('image/interest.png');
  reviewer = loadImage('image/reviewer.png');
  badge = loadImage('image/badge.png');
  message = loadImage('image/message.png');
  end = loadImage('image/end.png');
  bgm = loadSound('sound/bgm.mp3');
  positive = loadSound('sound/positive.wav');
  negative = loadSound('sound/negative.wav');
  hintPopUp = loadImage('image/hint.jpg');

}

function setup() {
  canvas = createCanvas(windowWidth, 1300);
  canvas.style('z-index', '-1');
  canvas.position(0, 0);
  instruction = createP('Yep is a restaurant direcotry service and crowd-sourced review forum. You are a Yep user and you are taking MAAD 23640 1 Embodied Data and Gamified Interfaces. You know the interface is designed this way to nudge you to behave in certain ways. Please identify and click on these design elements to collect badges and gain scores. Your scores and badges will be displayed on the left. The design clues will be displayed on the right. You will win the game once you collect all clues.');
  startButton = createButton('Start!!!');
  startButton.position(650, 60);
  startButton.style('background','white')
  startButton.mousePressed(start);
  // fifty = createP('50');
  // fifty.position(20, 50);
  // onehundred = createP('100');
  // onehundred.position(20, 100);
  // twohundred = createP('200');
  // twohundred.position(20, 200);
  // threehundred = createP('300');
  // threehundred.position(20, 300);
  // fourhundred = createP('400');
  // fourhundred.position(20, 400);
  // fivehundred = createP('500');
  // fivehundred.position(20, 500);
  // sixhundred = createP('600');
  // sixhundred.position(20, 600);
  // sevenhundred = createP('700');
  // sevenhundred.position(20, 700);

}

function draw() {
  background(220);
  image(mainpage, 300, 100, 800, 600);
  if (showBurger) {
    image(burger, 10, 200, 50, 50);
  }
  if (showCheck1) {
    image(check, 445, 120, 50, 50);
  }
  if (showSearchIcon) {
    image(searchIcon, 70, 200, 50, 50);
  }
  if (showCheck2) {
    image(check, 598, 120, 50, 50);
  }
  if (showCheck3) {
    image(check, 990, 120, 50, 50);
  }
  if (showSignUp) {
    image(signUp, 130, 200, 50, 50);
  }
  if (showCheck4) {
    image(check, 335, 230, 50, 50);
  }
  if (showSponsored) {
    image(sponsored, 200, 200, 50, 50);
  }
  if (showCheck5) {
    image(check, 435, 260, 50, 50);
  }
  if (showRate) {
    image(rate, 0, 260, 80, 70);
  }
  if (showCheck6) {
    image(check, 433, 438, 50, 50);
  }
  if (showComment) {
    image(comment, 75, 270, 70, 70);
  }
  if (showCheck7) {
    image(check, 860, 350, 50, 50);
  }
  if (showInterest) {
    image(interest, 130, 280, 60, 60);
  }
  if (showCheck8) {
    image(check, 860, 430, 50, 50);
  }
  if (showReviewer) {
    image(reviewer, 190, 280, 60, 60);
  }
  if (showCheck9) {
    image(check, 860, 530, 50, 50);
  }
  if (showMessage) {
    image(message, 60, 340, 80, 70);
  }
  if (showCheck10) {
    image(check, 860, 580, 50, 50);
  }
  if (showBadge) {
    image(badge, 10, 340, 60, 60);
  }
  if (endGame) {
    image(end, 480, 300, 500, 300);
  }
  if (showHint) {
    image(hintPopUp, 340, 100, 700, 500);
  }
}

function start(){
  startGame = true;
  startButton.hide();
  bgm.play();
  hintButton = createButton('Hint');
  hintButton.position(650, 60);
  hintButton.style('background','white')
  hintButton.mousePressed(hint);
  searchFoodButton = createButton('Search Food');
  searchFoodButton.style('width','153px');
  searchFoodButton.style('height','45px');
  searchFoodButton.style('color','transparent');
  searchFoodButton.position(445, 120);
  searchFoodButton.mousePressed(searchFoodGetScore);
  locationButton = createButton('');
  locationButton.style('width','153px');
  locationButton.style('height','45px');
  locationButton.position(598, 120);
  locationButton.mousePressed(locationGetScore);
  signUpButton = createButton('');
  signUpButton.style('width', '80px');
  signUpButton.style('height', '45px');
  signUpButton.position(990,120);
  signUpButton.mousePressed(signUpGetScore);
  sponsoredButton = createButton('');
  sponsoredButton.style('width', '90px');
  sponsoredButton.style('height', '25px');
  sponsoredButton.position(335, 230);
  sponsoredButton.mousePressed(sponsoredGetScore);
  rateButton = createButton('');
  rateButton.style('width', '70px');
  rateButton.style('height', '8px');
  rateButton.position(435, 300);
  rateButton.mousePressed(rateGetScore);
  commentButton = createButton('');
  commentButton.style('width', '260px');
  commentButton.style('height', '15px');
  commentButton.position(433, 438);
  commentButton.mousePressed(commentGetScore);
  interestButton = createButton('');
  interestButton.style('width', '300px');
  interestButton.style('height', '80px');
  interestButton.position(760, 330);
  interestButton.mousePressed(interestGetScore);
  reviewerButton = createButton('');
  reviewerButton.style('width', '300px');
  reviewerButton.style('height', '50px');
  reviewerButton.position(760, 430);
  reviewerButton.mousePressed(reviewerGetScore);
  badgeButton = createButton('');
  badgeButton.style('width', '300px');
  badgeButton.style('height', '80px');
  badgeButton.position(760, 495);
  badgeButton.mousePressed(badgeGetScore);
  messageButton = createButton('');
  messageButton.style('width', '300px');
  messageButton.style('height', '30px');
  messageButton.position(760, 580);
  messageButton.mousePressed(messageGetScore);
  scoreText = createP('');
  scoreText.html('Your score: ' + score*10);
  scoreText.position(10, 130);
  badgeboard = createP('');
  badgeboard.html('You collected 0/10 badge(s)');
  badgeboard.position(10, 150);
  cueText = createP('You have revealed 0/10 cue(s)');
  cueText.position(1120, 150);
}

function searchFoodGetScore(){
  positive.play();
  score++;
  scoreText.html('Your score: ' + score*10);
  badgeNumber++;
  badgeboard.html('You collected '+ badgeNumber + '/10 badge(s)')
  cueNumber++;
  cueText.html('You have revealed ' + cueNumber + '/10 cue(s)')
  searchFoodButton.hide();
  showBurger = true;
  showCheck1 = true;
  searchFoodText = createP('Yep gives a set of suggestsions based on the key word. This leads you to choose among choices pre-determined by the algorithm, while preserving an illusion of choice');
  searchFoodText.position(1120, 200);
  if (score == 10){
    startGame = false;
    endGame = true;
  }

}

function locationGetScore(){
  positive.play();
  score++;
  scoreText.html('Your score: ' + score*10);
  badgeNumber++;
  badgeboard.html('You collected '+ badgeNumber + '/10 badge(s)')
  cueNumber++;
  cueText.html('You have revealed ' + cueNumber + '/10 cue(s)')
  locationButton.hide();
  showSearchIcon = true;
  showCheck2 = true;
  locationText = createP('Yep collects your location information and gives recommendations based on it. You have agreed to grant access to Yep to your location. Maybe Yep uses it for something else, and bets you did not read the terms and conditions.');
  locationText.position(1120, 300);
  if (score == 10){
    startGame = false;
    endGame = true;
  }
}

function signUpGetScore(){
  positive.play();
  score++;
  scoreText.html('Your score: ' + score*10);
  badgeNumber++;
  badgeboard.html('You collected '+ badgeNumber + '/10 badge(s)')
  cueNumber++;
  cueText.html('You have revealed ' + cueNumber + '/10 cue(s)')
  signUpButton.hide();
  showSignUp = true;
  showCheck3 = true;
  locationText = createP('Yep uses an conspicuous color to guide your attention to the Sign Up button');
  locationText.position(1120, 420);
  if (score == 10){
    startGame = false;
    endGame = true;
  }
}

function sponsoredGetScore(){
  positive.play();
  score++;
  scoreText.html('Your score: ' + score*10);
  badgeNumber++;
  badgeboard.html('You collected '+ badgeNumber + '/10 badge(s)')
  cueNumber++;
  cueText.html('You have revealed ' + cueNumber + '/10 cue(s)')
  sponsoredButton.hide();
  showSponsored = true;
  showCheck4 = true;
  locationText = createP('Yep places the ads at where people expect their research results would be to increase clicks.');
  locationText.position(1120, 570);
  if (score == 10){
    startGame = false;
    endGame = true;
  }
}

function rateGetScore(){
  positive.play();
  score++;
  scoreText.html('Your score: ' + score*10);
  badgeNumber++;
  badgeboard.html('You collected '+ badgeNumber + '/10 badge(s)')
  cueNumber++;
  cueText.html('You have revealed ' + cueNumber + '/10 cue(s)')
  rateButton.hide();
  showRate = true;
  showCheck5 = true;
  rateText = createP('The number of rating suggests how many people have visited the restaurant. It uses the bandwagon effect to persuade you to visit too.');
  rateText.position(1120, 475);
  if (score == 10){
    startGame = false;
    endGame = true;
  }
}

function commentGetScore(){
  positive.play();
  score++;
  scoreText.html('Your score: ' + score*10);
  badgeNumber++;
  badgeboard.html('You collected '+ badgeNumber + '/10 badge(s)')
  cueNumber++;
  cueText.html('You have revealed ' + cueNumber + '/10 cue(s)')
  commentButton.hide();
  showComment = true;
  showCheck6 = true;
  commentText = createP("A brief showcase of other visitors' reviews: I'm sure you'll click in and read more." );
  commentText.position(1120, 670);
  if (score == 10){
    startGame = false;
    endGame = true;
  }
}

function interestGetScore(){
  positive.play();
  score++;
  scoreText.html('Your score: ' + score*10);
  badgeNumber++;
  badgeboard.html('You collected '+ badgeNumber + '/10 badge(s)')
  cueNumber++;
  cueText.html('You have revealed ' + cueNumber + '/10 cue(s)')
  interestButton.hide();
  showInterest = true;
  showCheck7 = true;
  interestText = createP('By tagging yourself, Yep knows better about you and what makes you pay.');
  interestText.position(1120, 750);
  if (score == 10){
    startGame = false;
    endGame = true;
  }
}

function reviewerGetScore(){
  positive.play();
  score++;
  scoreText.html('Your score: ' + score*10);
  badgeNumber++;
  badgeboard.html('You collected '+ badgeNumber + '/10 badge(s)')
  cueNumber++;
  cueText.html('You have revealed ' + cueNumber + '/10 cue(s)')
  reviewerButton.hide();
  showReviewer = true;
  showCheck8 = true;
  reviewerText = createP('People love winning--and Yep knows it. A simple trick to promote more user-generated content at no cost.');
  reviewerText.position(1120, 800);
  if (score == 10){
    startGame = false;
    endGame = true;
  }
}

function badgeGetScore(){
  positive.play();
  score++;
  scoreText.html('Your score: ' + score*10);
  badgeNumber++;
  badgeboard.html('You collected '+ badgeNumber + '/10 badge(s)')
  cueNumber++;
  cueText.html('You have revealed ' + cueNumber + '/10 cue(s)')
  badgeButton.hide();
  showBadge = true;
  showCheck9 = true;
  badgeText = createP('To cyber hoarders of our age: we know these badges mean nothing in real life, but how magical that people get nudged to change their behavior to collect them!');
  badgeText.position(1120, 870);
  if (score == 10){
    startGame = false;
    endGame = true;
  }
}

function messageGetScore(){
  positive.play();
  score++;
  scoreText.html('Your score: ' + score*10);
  badgeNumber++;
  badgeboard.html('You collected '+ badgeNumber + '/10 badge(s)')
  cueNumber++;
  cueText.html('You have revealed ' + cueNumber + '/10 cue(s)')
  messageButton.hide();
  showMessage = true;
  showCheck10 = true;
  messageText = createP('Just to make sure you never miss you likes and messages, we got a red bubble with number to drive you crazy.');
  messageText.position(1120, 970);
  if (score == 10){
    startGame = false;
    endGame = true;
  }
}

function hint(){
  showHint = true;
  closeButton = createButton('Close');
  closeButton.position(650, 500);
  closeButton.style('background','white');
  closeButton.mousePressed(close);
}

function close(){
  closeButton.hide();
  showHint = false;
}
