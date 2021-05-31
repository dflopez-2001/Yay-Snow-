var bg, bgspr
var snow, snowFl, snowFl2
function preload(){
 bg = loadImage("snow2.jpg");
 snowFl1 = loadImage("snow4.webp");
 snowFl2 = loadImage("snow5.webp");
}
function setup() {
  createCanvas(800,400);
bgspr = createSprite(400, 200, 50, 50);
bgspr.addImage(bg);

}

function draw() {
  background(255,255,255);  

  snow = createSprite(random(0,800),0,5,5);
  snow.addImage(snowFl2);
  snow.scale = random(0.01,0.1)
  snow.velocityY = (0.1,2)
  snow.lifetime = 350
  snow = createSprite(random(0,800),0,5,5);
  snow.addImage(snowFl1);
  snow.scale = random(0.01,0.1)
  snow.velocityY = (0.1,2)
  snow.lifetime = 350

  drawSprites();
  
}