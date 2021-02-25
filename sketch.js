var trex, trex1 , ground, ground1,clouds, CloudsGroup, ObstaclesGroup, Ob1,Ob2,Ob3,Ob4,Ob5,Ob6

function preload(){
  trex1=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground1=loadImage("ground2.png")
  clouds = loadImage("cloud.png")
  Ob1 = loadImage("Obstacle1.png")
    Ob2 = loadImage("Obstacle2.png")
    Ob3 = loadImage("Obstacle3.png")
    Ob4 = loadImage("Obstacle4.png")
    Ob5 = loadImage("Obstacle5.png")
    Ob6 = loadImage("Obstacle6.png")
}

function setup(){
  createCanvas(600,250)
  trex = createSprite (200,200,20,20)
  trex.addAnimation("trexImage",trex1)
  trex.scale=0.7
  ground = createSprite(300,230,600,5)
  ground.addImage("groundImage",ground1)
  CloudsGroup= new Group()
  ObstaclesGroup = new Group()
  
}

function draw(){
  background("white")
  drawSprites()
  if (keyDown("space")&& trex.y>180){ 
    trex.velocityY = -10
  }
  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(ground)
  
  ground.velocityX = -5
    if (ground.x < 0){
    ground.x = ground.width/2;
    
  }
  
  spawnClouds();
  spawnObstacles();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(600,320,40,10);
    cloud.y = random(0,100);
    cloud.addImage("cloud",clouds);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    CloudsGroup.add(cloud);
  }
}
function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -(6);
   
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
  switch(rand){
case 1: obstacle.addImage("Obstacle1",Ob1)
      break
case 1: obstacle.addImage("Obstacle1",Ob1)
      break
case 1: obstacle.addImage("Obstacle1",Ob1)
      break
case 1: obstacle.addImage("Obstacle1",Ob1)
      break
case 1: obstacle.addImage("Obstacle1",Ob1)
      break
case 1: obstacle.addImage("Obstacle1",Ob1)
      break
  }
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}
  