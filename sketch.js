var backgroundImg,background;

function preload(){

  backgroundImg=loadImage("backgroundImg.png");
}


function setup() {
  createCanvas(800,400);
  background = createSprite(0,0,800,400);
  background.addImage(backgroundImg);
  background.scale=1;
}

function draw() {
   
  background.velocityX=-3

  if(background.x<0){
    background.x=background.width/2;
  }
  drawSprites();
}