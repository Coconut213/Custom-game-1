var ship1,ship1Img
var ship2,ship2Img



function setup() {
  createCanvas(800,400);
 var ship1 = createSprite(400, 375, 50, 50);

}

function draw() {
  background(0);  
  if(keyIsDown(RIGHT_ARROW)){
    ship1.x = ship1.x + 5
  }
  drawSprites();
}