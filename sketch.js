var path,boy,cash,diamonds,jewelry,sword;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg;
var treasure = 0;
var cashG,diamondsG,jewelryG,swordGroup;
var lives=5
var level2Img
//Game States
//var PLAY=1;
//var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  level2Img =  loadImage("level2.png")
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();

swordGroup=new Group();

}

function draw() {

  if(gameState===1){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  

  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    
    

    
     if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasure=treasure+20;   
    }

    else if(cashG.isTouching(boy)) {
      treasure=treasure+80;
      cashG.destroyEach();
      
    }
    else{
      if(swordGroup.isTouching(boy)) {
        //gameState=END;
        lives=lives-1
        // boy.addAnimation(endImg);
         ;
        // boy.addAnimation("SahilRunning");
        // boy.addAnimation(SahilRunning,endImg);

        
        if(lives<=0){
          gameState=2;
          boy.addAnimation("SahilRunning",endImg)
          boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        }
        // cashG.destroyEach;
        // diamondsG.destroyEach;
        // jewelryG.destroyEach;
        // swordGroup.destroyEach;

        // cashG.destroy();
        // diamondsG.destroy();
        // jewelryG.destroy();
        // swordGroup.destroy();
        
      

        //if(gameState===3){
        //background()
        //}
         cashG.destroyEach();
         diamondsG.destroyEach();
         
         swordGroup.destroyEach();
        
        // cashGdestroyEach();
        // diamondsGdestroyEach();
        // jewelryGdestroyEach();
        // swordGroupdestroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        
        swordGroup.setVelocityYEach(0);

        
     
    }

  }
  if (treasure>=80){
    gameState=3
    boy.visible=false;
    path.visible= false;
    background(level2Img)
    treasure=0
    cashG.destroyEach()
    diamondsG.destroyEach()
    fill("yellow")
    textSize(30)
    text("Click to unlock more Treasure!",5,470)
   }
  createCash();
    createDiamonds();
    
    createSword();

  
  drawSprites();
  textSize(20);
 
  fill("red")
  text("Lives: "+ lives,320,30)

  fill("yellow")
  textSize(20)
  text("Treasure:"+treasure,10,30)
  }
 
  

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.3;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.3;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}



function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.3;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
