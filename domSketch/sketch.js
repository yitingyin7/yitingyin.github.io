let blueBGbool = false;
let redBGbool = false;


function setup() {
  createCanvas(400, 400);
  background(0)
}

function draw() {
  if(blueBGbool == true){
    blueBG();
  }
  
  if(redBGbool == true){
    redBG();
  }
}

function blueBG(){
  background(0, 0, 255);
  ellipse(200, 100, 50, 50);
}

function redBG(){
  background(255, 0, 0);
  rect(300, 250, 30, 30);
  
}

function keyPressed(){
  if(key=='q'){
    blueBGbool = true;
    redBGbool = false;
  }
  
  if(key=='w'){
    blueBGbool = false;
    redBGbool = true;
    
  }
  
}