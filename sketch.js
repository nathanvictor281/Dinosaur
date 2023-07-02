
var trex ,trex_running;
var edges;

var groundImg
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
groundImg = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,50);
 trex.addAnimation("runing",trex_running);                    
 trex.scale = 0.5 
 
 edges = createEdgeSprites()
 ground = createSprite(200,180,400,20)
 ground.addImage("groundImage",groundImg)
 ground.x = ground.width/2
}

function draw(){
   
  background("yellow")
  console.log(trex.y)
  if(keyDown("space")){
    trex.velocityY = -10
   
  }
  //gravity
  trex.velocityY= trex.velocityY + 0.5
  trex.collide(ground)


if(ground.x<0){
  ground.x = ground.width/2
}


  ground.velocityX = -3
  drawSprites();
  
}
