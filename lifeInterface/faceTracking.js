// https://kylemcdonald.github.io/cv-examples/
// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2

var capture;
var tracker;
let canvas;
let classifier;
let y = 300;
let sky;
let bgm;
let click;
let startButton;
let startGame = false;
let verifyButton;
let verifyText;
let nameText;
let playerName;
let verifyText2;
let policyImg;
let videoHide = true;
let parchment;
var tracker;
let verified = false;
let humanLabel;
let label;
let otherLabel;
let shortLabel;
let longLabel;
let sadLabel;
let happyLabel;
let adultLabel;
let x = 440;
let arrowBul = false;
let m = 650;
let n = 270;
let otherBul = false;
let endGameBul = false;
let priceN = 0;

var w = 640,
    h = 480;

function preload(){
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/B3uNWMfo/model.json');
  sky = loadImage("image/sky.gif");
  bgm = loadSound("music/bgm.mp3");
  click = loadSound("music/click.wav");
  mouse = loadImage("image/mouse.png");
  humanLabel = loadImage("image/humanLabel.png");
  otherLabel = loadImage("image/otherLabel.png");
  sadLabel = loadImage("image/sadLabel.png");
  happyLabel = loadImage("image/happyLabel.png");
  adultLabel = loadImage("image/adultLabel.png");
  shortLabel = loadImage("image/shortLabel.png");
  longLabel = loadImage("image/longLabel.png");
  appleImg = loadImage("image/apple.png");
  }

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1')
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    capture.size(w, h);
    capture.hide();
    colorMode(HSB);

    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);
    startButton = createButton("Start");
     startButton.position(windowWidth/2, 400);
     startButton.mousePressed(verification);
     imageL = createImg("image/L.png");
     imageI = createImg("image/I.png");
     imageF = createImg("image/F.png");
     imageE = createImg("image/E.png");
     imageI2 = createImg("image/I.png");
     imageN = createImg("image/N.png");
     imageT = createImg("image/T.png");
     imageE2 = createImg("image/E.png");
     imageR = createImg("image/R.png");
     imageF2 = createImg("image/F.png");
     imageA = createImg("image/A.png");
     imageC = createImg("image/C.png");
     imageE3 = createImg("image/E.png");
     arrow = createImg("image/arrow.png");
     // arrow.hide();

    classifyVideo();

}

function classifyVideo(){
  flippedVideo = ml5.flipImage(capture);
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

function verification(){
    startGame = true;
    videoHide = false;
    verifyButton = createButton("Verify");
    verifyButton.position(windowWidth/2-20, 600);
    verifyButton.mousePressed(registration);
    verifyImg = createImg("image/verify.png");
    verifyImg.position(300, 430);
    verifyText = createP("By verifying your facial identity you are indicating that you have read and agree to these");
    verifyText.style("color", "#FFFFFF");
    verifyText.position(300, 470);
    verifyText2 = createP("terms and our private policy")
    verifyText2.style("color", "#4DAEFF")
    verifyText2.position(872, 470);
    verifyText2.mousePressed(policy);
}

function policy(){
  policyImg = createImg("image/policy.png");
  policyImg.position(400, 270);
  policyImg.mousePressed(hidePolicy);
}

function hidePolicy(){
  policyImg.hide();
}

function registration(){
  verified = true;
    humanText = createP("Congratulations! You passed the verification. We hereby register you as a member of the human race.");
    humanText.position(400, 420);
    humanText.style("color", "#FFFFFF");
    nameText = createP("Please type your name and press enter");
    nameText.style("color", "#FFFFFF");
    nameText.position(580, 450);
    playerName = createInput("");
    playerName.position(600, 500);
    playerName.changed(mapDisplay);
  verifyButton.hide();
  verifyImg.hide();
  verifyText.hide();
  verifyText2.hide();
}

function mapDisplay(){
  playerName.hide();
  nameText.hide();
  videoHide = true;
  parchment = createImg("image/parchment.png");
  parchment.position(300, 100);
  humanText.hide();
  treeImg = createImg("image/tree.png");
  treeImg.position(400, 200);
  marketImg = createImg("image/market.png");
  marketImg.position(680, 180);
  marketImg.size(330, 280);
  mapWord = createImg("image/map.png");
  mapWord.position(350, 150);
  mapWord.size(120, 60);
  marketTitle = createImg("image/marketTitle.png");
  marketTitle.position(770, 500);
  marketTitle.size(150, 40);
  treeTitle = createImg("image/treeTitle.png");
  treeTitle.position(380, 500);
  treeTitle.size(220, 40);
  treeTitle.mousePressed(secretTree);
  treeImg.mousePressed(secretTree);
  marketImg.mousePressed(marketPage);
  marketTitle.mousePressed(marketPage);
}

function secretTree(){
  parchment.hide();
  mapWord.hide();
  treeTitle.hide();
  treeImg.hide();
  marketImg.hide();
  marketTitle.hide();
  bigTree = createImg("image/bigTree.png");
  bigTree.position(400, 50);
  hole = createImg("image/hole.png");
  hole.position(625, 440);
  hole.size(170, 170);
  hole.mousePressed(message);
  arrowBul = true;
  mapIcon = createImg("image/parchment.png");
  mapIcon.position(1100, 590);
  mapIcon.size(100, 70);
  mapIcon.mousePressed(atlasDisplayT);
  mapIconWord = createImg("image/map.png");
  mapIconWord.position(1110, 610);
  mapIconWord.size(85, 30);
  mapIconWord.mousePressed(atlasDisplayT);
}

function message(){
  arrow.hide();
  safe = createImg("image/safe.png");
  safe.position(540, 300);
  secretText = createInput("");
  secretText.position(650, 380);
  secretText.changed(apple);
}

function apple(){
  priceN++;
  safe.hide();
  secretText.hide();
  m = random(450, 850);
  n = random(70, 440);
  appleImg = createImg("image/apple.png");
  appleImg.position(m, n);
  appleImg.size(100, 100);
  appleImg.mousePressed(guaranty);
}

function guaranty(){
  guarantyWindow = createImg("image/locked.png");
  guarantyWindow.position(540, 300);
  guarantyWindow.mousePressed(guarantyClosed);
}

function guarantyClosed(){
  guarantyWindow.hide();
}

function atlasDisplayT(){
  parchment = createImg("image/parchment.png");
  parchment.position(300, 100);
  treeImg = createImg("image/tree.png");
  treeImg.position(400, 200);
  marketImg = createImg("image/market.png");
  marketImg.position(680, 180);
  marketImg.size(330, 280);
  mapWord = createImg("image/map.png");
  mapWord.position(350, 150);
  mapWord.size(120, 60);
  marketTitle = createImg("image/marketTitle.png");
  marketTitle.position(770, 500);
  marketTitle.size(150, 40);
  treeTitle = createImg("image/treeTitle.png");
  treeTitle.position(380, 500);
  treeTitle.size(220, 40);
  treeTitle.mousePressed(secretTree);
  treeImg.mousePressed(secretTree);
  marketImg.mousePressed(marketPage);
  marketTitle.mousePressed(marketPage);

  appleImg.hide();
  bigTree.hide();
  hole.hide();
  guarantyWindow.hide();
  mapIcon.hide();
  mapIconWord.hide();
}

function marketPage(){
  parchment.hide();
  mapWord.hide();
  treeTitle.hide();
  treeImg.hide();
  marketImg.hide();
  marketTitle.hide();
  mapIcon2 = createImg("image/parchment.png");
  mapIcon2.position(1100, 590);
  mapIcon2.size(100, 70);
  mapIcon2.mousePressed(atlasDisplayM);
  mapIconWord2 = createImg("image/map.png");
  mapIconWord2.position(1110, 610);
  mapIconWord2.size(85, 30);
  mapIconWord2.mousePressed(atlasDisplayM);
  marketplace = createImg("image/marketplace.png");
  marketplace.position(350, 0);
  marketplace.size(800, 700);
  fish = createImg("image/fish.png");
  fish.position(460, 400);
  fish.size(100, 100);
  fish.mousePressed(com1);
  fish2 = createImg("image/fish2.png");
  fish2.position(550, 400);
  fish2.size(100, 100);
  fish2.mousePressed(com2);
  fish3 = createImg("image/fish3.png");
  fish3.position(655, 400);
  fish3.size(100, 100);
  fish3.mousePressed(com3);
  fish4 = createImg("image/fish4.gif");
  fish4.position(760, 400);
  fish4.size(100, 100);
  fish4.mousePressed(com4);
  banner = createImg("image/banner.png");
  banner.position(460, 200);
  banner.size(400, 60);
}

function com1(){
  alice = createImg("image/alice.jpg");
  alice.position(350, 50);
  alice.size(700, 600);
  close = createImg("image/close.png");
  close.position(1000, 70);
  close.size(30, 30);
  coButton = createButton("Check Out");
  coButton.position(820, 570);
  close.mousePressed(closeCom1);
  coButton.mousePressed(coCom1);
}

function closeCom1(){
  alice.hide();
  close.hide();
  coButton.hide();
}

function coCom1(){
  alice.hide();
  close.hide();
  coButton.hide();
  success = createImg("image/success.png");
  success.position(540, 300);
  success.mousePressed(s1);
}

function s1(){
  success.hide();
}


function com2(){
  carol = createImg("image/carol.jpg");
  carol.position(350, 50);
  carol.size(700, 600);
  close2 = createImg("image/close.png");
  close2.position(1000, 70);
  close2.size(30, 30);
  coButton2 = createButton("Check Out");
  coButton2.position(820, 570);
  close2.mousePressed(closeCom2);
  coButton2.mousePressed(coCom2);
}


function closeCom2(){
  carol.hide();
  close2.hide();
  coButton2.hide();
}

function coCom2(){
  carol.hide();
  close2.hide();
  coButton2.hide();
  success2 = createImg("image/success.png");
  success2.position(540, 300);
  success2.mousePressed(s2);
}

function s2(){
  success2.hide();
}

function com3(){
  mike = createImg("image/mike.jpg");
  mike.position(350, 50);
  mike.size(700, 600);
  close3 = createImg("image/close.png");
  close3.position(1000, 70);
  close3.size(30, 30);
  coButton3 = createButton("Check Out");
  coButton3.position(820, 570);
  close3.mousePressed(closeCom3);
  coButton3.mousePressed(coCom3);
}


function closeCom3(){
  mike.hide();
  close3.hide();
  coButton3.hide();
}

function coCom3(){
  mike.hide();
  close3.hide();
  coButton3.hide();
  success3 = createImg("image/success.png");
  success3.position(540, 300);
  success3.mousePressed(s3);
}

function s3(){
  success3.hide();
}

function com4(){
  you = createImg("image/you.jpg");
  you.position(350, 50);
  you.size(700, 600);
  close4 = createImg("image/close.png");
  close4.position(1000, 70);
  close4.size(30, 30);
  coButton4 = createButton("Check Out");
  coButton4.position(820, 570);
  comName = createP("");
  comName.html(playerName.value());
  comName.position(570, 415);
  comName.style("color", "#000000");
  trendingS = createP("");
  trendingS.html(secretText.value());
  trendingS.position(800, 315);
  trendingS.style("color", "#000000");
  coButton4.mousePressed(endGame);
  price = createP("");
  price.html("$" + priceN*10);
  price.style("color", "000000");
  price.position(520, 440);
}

function endGame(){
  endGameBul = true
}

function endScreen(){
  background(random(255),random(255),random(255));
  gameover = createImg("image/gameover.gif");
  gameover.position(450, 200);
  truth = createImg("image/truth.gif");
  truth.position(450, 200);
}

function atlasDisplayM(){
  parchment = createImg("image/parchment.png");
  parchment.position(300, 100);
  treeImg = createImg("image/tree.png");
  treeImg.position(400, 200);
  marketImg = createImg("image/market.png");
  marketImg.position(680, 180);
  marketImg.size(330, 280);
  mapWord = createImg("image/map.png");
  mapWord.position(350, 150);
  mapWord.size(120, 60);
  marketTitle = createImg("image/marketTitle.png");
  marketTitle.position(770, 500);
  marketTitle.size(150, 40);
  treeTitle = createImg("image/treeTitle.png");
  treeTitle.position(380, 500);
  treeTitle.size(220, 40);
  treeTitle.mousePressed(secretTree);
  treeImg.mousePressed(secretTree);
  marketImg.mousePressed(marketPage);
  marketTitle.mousePressed(marketPage);

  fish.hide();
  fish2.hide();
  fish3.hide();
  fish4.hide();
  banner.hide();
  marketplace.hide();
  mapIcon2.hide();
  mapIconWord2.hide();

  alice.hide();
  close.hide();
  coButton.hide();
  success.hide();

  carol.hide();
  close2.hide();
  coButton2.hide();
  success2.hide();

  mike.hide();
  close3.hide();
  coButton3.hide();
  success3.hide();
}

function draw() {
  background(255, 255, 255);
  image(sky, 0, 0, 700, 350);
  image(sky, 700, 0, 700, 350);
  image(sky, 1400, 0, 700, 350);
  image(sky, 0, 350, 700, 350);
  image(sky, 700, 350, 700, 350);
  image(sky, 1400, 350, 700, 350);
  image(sky, 0, 700, 700, 350);
  image(sky, 700, 700, 700, 350);
  image(sky, 1400, 700, 700, 350);
  y = random(298, 302);
imageL.position(350, y);
imageL.size(50, 50);
  y = random(298, 302);
imageI.position(400, y);
imageI.size(50, 50);
  y = random(298, 302);
imageF.position(450, y);
imageF.size(50, 50);
  y = random(298, 302);
imageE.position(500, y);
imageE.size(50, 50);
  y = random(298, 302);
imageI2.position(600, y);
imageI2.size(50, 50);
  y = random(298, 302);
imageN.position(650, y);
imageN.size(50, 50);
  y = random(298, 302);
imageT.position(700, y);
imageT.size(50, 50);
  y = random(298, 302);
imageE2.position(750, y);
imageE2.size(50, 50);
  y = random(298, 302);
imageR.position(800, y);
imageR.size(50, 50);
  y = random(298, 302);
imageF2.position(850, y);
imageF2.size(50, 50);
  y = random(298, 302);
imageA.position(900, y);
imageA.size(50, 50);
  y = random(298, 302);
imageC.position(950, y);
imageC.size(50, 50);
  y = random(298, 302);
imageE3.position(1000, y);
imageE3.size(50, 50);
  image(mouse, mouseX-12, mouseY-12, 50, 50);

    if(startGame && videoHide == false){
      imageL.hide();
      imageI.hide();
      imageF.hide();
      imageE.hide();
      imageI2.hide();
      imageN.hide();
      imageT.hide();
      imageE2.hide();
      imageR.hide();
      imageF2.hide();
      imageA.hide();
      imageC.hide();
      imageE3.hide();
      startButton.hide();
      imageMode(CORNERS);
      image(capture, 0, 0, w, h);
      var positions = tracker.getCurrentPosition();
      imageMode(CENTER);
      noFill();
      stroke(255);
      beginShape();
      // for (var i = 0; i < positions.length; i++) {
      //     vertex(positions[i][0], positions[i][1]);
      // }
      endShape();

      noStroke();
      for (var i = 0; i < positions.length; i++) {
          // fill(map(i, 0, positions.length, 0, 360), 50, 100);
          // ellipse(positions[i][0], positions[i][1], 4, 4);
          // text(i, positions[i][0], positions[i][1]);
          if(label == "SHA" && verified){
            image(shortLabel, positions[19][0], positions[22][1], 100, 30);
            image(happyLabel, positions[15][0], positions[14][1], 100, 30);
            image(adultLabel, positions[62][0], positions[40][1], 100, 30);
            image(humanLabel, positions[60][0], positions[50][1], 100, 30);
          }
          if(label == "LHA" && verified){
            image(longLabel, positions[19][0], positions[22][1], 100, 30);
            image(happyLabel, positions[15][0], positions[14][1], 100, 30);
            image(adultLabel, positions[62][0], positions[40][1], 100, 30);
            image(humanLabel, positions[60][0], positions[50][1], 100, 30);
          }
          if(label == "SSA" && verified){
            image(shortLabel, positions[19][0], positions[22][1], 100, 30);
            image(sadLabel, positions[15][0], positions[14][1], 100, 30);
            image(adultLabel, positions[62][0], positions[40][1], 100, 30);
            image(humanLabel, positions[60][0], positions[50][1], 100, 30);
          }
          if(label == "LSA" && verified){
            image(longLabel, positions[19][0], positions[22][1], 100, 30);
            image(sadLabel, positions[15][0], positions[14][1], 100, 30);
            image(adultLabel, positions[62][0], positions[40][1], 100, 30);
            image(humanLabel, positions[60][0], positions[50][1], 100, 30);
          }
          if(label == "other" && verified){
            image(otherLabel, positions[41][0], positions[33][1], 300, 100);
          }
      }
    }
    if(startGame && videoHide){
      capture.hide();
    }
    if(arrowBul){
      arrow.position(x, 480);
      arrow.style('z-index', '2')
      x = random(430, 450);
      arrow.size(200, 70);
    }
    if(endGameBul == true){
    endScreen();
}
}
