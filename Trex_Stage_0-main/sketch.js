
var trex ,trex_running,edges,ground,groundimg;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundimg=loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,170,50,50);
  trex.addAnimation("run",trex_running);
  trex.scale=0.5
  edges=createEdgeSprites()
  ground=createSprite(300,180,600,20)
  ground.addImage(groundimg);
  ground.velocityX=-5
}

function draw(){
  background("black")
  console.log(ground.x)
  if(ground.x<0){
    ground.x=ground.width/2
  }
  text(mouseX+ "," + mouseY,mouseX,mouseY)
  
  if(keyDown("space")){
    trex.velocityY=-5   
  }

  trex.velocityY+=0.5
  trex.collide(ground)
  drawSprites();

}
