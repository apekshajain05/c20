var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red";
  movingRect=createSprite(200,50,40,35);
  movingRect.shapeColor="red";
}

function draw() {
  background("black"); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }

  drawSprites();
}