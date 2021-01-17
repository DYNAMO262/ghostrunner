var tower,towerImage;
var door,doorImage,doorGroup;
var climber,climberImage,climberGroup;
var ghost,ghostImage;

function preload(){
  
  towerImage=loadImage('tower.png');
  doorImage=loadImage("door.png");
  climberImage=loadImage('climber.png');
  ghostImage=loadImage('ghost-standing.png');
  
  
}

function setup(){
  createCanvas(600,600);

tower=createSprite(300,300);
  tower.addImage('tower',towerImage);
  tower.velocityY=1;
  
  doorGroup=new Group();
  climberGroup=new Group();
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage('ghost',ghostImage);
  ghost.scale=0.4;
}

function draw(){
  background("black");
  
  if(tower.y>400){
     tower.y=300;
     
     }
  
  if(keyDown("left_arrow")){
     ghost.x=ghost.x-3; 
     }
  
  
  if(keyDown("right_arrow")){
     ghost.x=ghost.x+3; 
     }
  
  
  if(keyDown("space")){
     ghost.veloctiyY=-3; 
     }
  
  ghost.velocityY=ghost.velocityY+0.3;
  
  spawnDoors();
  drawSprites();
  
}

function spawnDoors(){
  
  if(frameCount%240===0){
     var door=createSprite(200,-50);
  door.addImage(doorImage);
     door.x=Math.round(random(120,400));
    door.velocityY=1;
    door.lifetime=600;
    doorGroup.add(door);
    
     var climber=createSprite(200,10);
 climber .addImage(climberImage);
     climber.x=door.x
    climber.velocityY=1;
    climber.lifetime=600;
    climberGroup.add(climber);
    
    
     }
  
}


