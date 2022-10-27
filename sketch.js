var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}
 
function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  doorsGroup=new Group ()
  climbersGroup=new Group()
  ghost=createSprite(100,100)
  ghost.addImage(ghostImg)
  ghost.scale=0.5
 // ghost.debug=true
  ghost.setCollider("rectangle",0,25,120,250)
  
}

function draw() {
  background(200);
  drawSprites ()
if(gameState=="play") {
  ghost.velocityX=0
  if(keyDown("left")){
    ghost.velocityX=-3
  }
  if(keyDown("right")){
    ghost.velocityX=3
  }
  if(keyDown("up")){
    ghost.velocityY=-6
  }
  ghost.velocityY+=0.2
  ghost.collide(climbersGroup)
  if(tower.y > 400){
      tower.y = 300
    }
    dw()
    if(ghost.y>height){
      gameState="stop"
    }
  }
  else{
doorsGroup.destroyEach()
climbersGroup.destroyEach()
text("gameOver",300,300)
tower.velocityY=0
  }
 


}
function dw() {
  if(frameCount%100==0){
    r=Math.round(random(120,500))
  c= createSprite(r,-100)
  c.addImage(climberImg)
  d=createSprite(r,-170)
  d.addImage(doorImg)
  c.velocityY=3
  d.velocityY=3
  c.depth=ghost.depth
  d.depth=ghost.depth
  ghost.depth+=1
  doorsGroup.add(d)
  climbersGroup.add(c)
}}
