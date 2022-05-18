var mar,marimg;
var navio,navioimg;

function preload(){
    marimg=loadImage("sea.png")
    navioimg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
 

}

function setup(){
  createCanvas(400,400);
  mar=createSprite(200,200)
  mar.addImage(marimg)
  mar.scale=0.3
 
  navio=createSprite(100,200)
  navio.addAnimation("navio navegando",navioimg)
  navio.scale=0.3

}

function draw() {
  background("blue");
  
  mar.velocityX=-3

  if(mar.x<0){
    mar.x=200
    
  }
    drawSprites();

 
}
