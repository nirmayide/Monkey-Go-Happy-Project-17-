var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, ObstacleGroup, ground
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,200)

  
  monkey = createSprite(50,150,10,30);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.08; 
  
  ground = createSprite(300,190,600,10);
  ground.velocityX = 5;
  //ground.velocityX = width/2;
  
  FoodGroup = new Group();
  ObstaclesGroup = new Group();
  
  score = 0;
  
}


function draw() {
  background("lightblue");
  
  if(ground.x > 200){
     ground.x = width/2
     }  
  
  if (keyDown("space")){
    monkey.velocityY = -10;      
      }
  monkey.velocityY = monkey.velocityY +0.5;
  monkey.collide(ground);
  
  
  food();
  Obstacle();
  
  
  
  drawSprites();
  
    if(ObstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        ObstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        ObstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    
    }
  
  stroke("white");
  textSize(12);
  fill("white");
  text("Points: "+ score, 500,50); 
  
  
  stroke("black");
  textSize(12);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 300,70);
  
}

function food(){
  if (frameCount % 60 ===0) {
  banana = createSprite(590,(random(20,120)),10,10);
  banana.addAnimation("banana",bananaImage);
  banana.scale = 0.08;
  banana.velocityX = random(-3,-5);
  banana.lifetime = 150;
  FoodGroup.add(banana);
  }
  
}


function Obstacle(){
  if (frameCount % 60 === 0 ){
  obstacle = createSprite(600,random(150,190),10,10);
  obstacle.addImage("obstacle", obstacleImage);
  obstacle.scale =0.08;
  obstacle.velocityX = -4;
  obstacle.lifetime = 150;
  ObstaclesGroup.add(obstacle);
  }
}





