
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground;
var groundImage;
var survivalTime=0;
var invisibleGround;
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(100,350,10,10);

  monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;
  
  ground=createSprite(200,350,800,10);
   ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  obstacleGroup= new Group();
  foodGroup= new Group();
  invisibleGround = createSprite(200,355,800,10);
  invisibleGround.visible = false;
  
}


function draw() {

  background(220);
   if (gameState==PLAY){
  if(ground.x<0){
    ground.x=200
  }
 
  monkey.collide(invisibleGround);
  if(keyDown("space")&& monkey.y>=195){
    monkey.velocityY=-15
    
  }
     ground.velocityX = -(6 + 3*survivalTime/100);
  
  spawnObstacle();
  food();
  monkey.velocityY=monkey.velocityY + 0.7;
   stroke("white");
     textSize(20);
     fill("white");
     text("Score:" + score,500,100);
     stroke("black");
     textSize(20);
     fill("black");
     survivalTime=Math.ceil(frameCount/frameRate())
     text("SurvivalTime" +survivalTime,100,50);
   
   
   }
  if (obstacleGroup.isTouching(monkey)){
      gameState=END;
      

 
    ground.velocityX=0;
    monkey.velocity=0;
    monkey.addAnimation()
    
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    
    obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
    
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    
  }
  drawSprites();
  
}
function spawnObstacle(){
  if (frameCount % 300 ===0){
 var  obstacle=createSprite(400,330,20,20);
    //obstacle.y=Math.round(random(120,200));
    obstacle.velocityX = -5;  
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.lifetime= 200;
    obstacleGroup.add(obstacle);
    
  }
}
function food(){
  if(frameCount % 80===0){
  var banana=createSprite(400,300,20,20);
    banana.y=Math.round(random(130,180));
    banana.addImage(bananaImage)
    banana.scale=0.1;
    banana.velocityX=-4;
 banana.lifetime=200;
    foodGroup.add(banana);
}
}
    
    
    
    
  