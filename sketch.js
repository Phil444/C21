var fixedRect, movingRect;
var rect1, rect2
var go1, go2, go3, go4

function setup() {
  createCanvas(windowWidth,windowHeight);
  fixedRect = createSprite(600, 400, 50, 50);
  movingRect = createSprite(100,100, 50, 80);
  fixedRect.shapeColor = "red"
  movingRect.shapeColor = "red"

  rect2 = createSprite(400, 200, 50, 50)
  rect1 = createSprite(400, 800, 80, 30)
  rect1.shapeColor = "green";
  rect2.shapeColor = "cyan";
  rect1.velocityY = -5;
  rect2.velocityY = 5;

  go1 = createSprite(100, 100, 50, 50);
  go2 = createSprite(200, 100, 50, 50);
  go3 = createSprite(300, 100, 50, 50);
  go4 = createSprite(400, 100, 50, 50);
  
  go1.shapeColor = "red"
  go2.shapeColor = "red"
  go3.shapeColor = "red"
  go4.shapeColor = "red"
}

function draw() {
  background(0);




  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //25+25=50 RHS
  // variable - 400 LHS

if (isTouching(movingRect, go4)){
  go4.shapeColor = "blue"
  movingRect.shapeColor = "blue"
}else{
  go4.shapeColor = "red"
  movingRect.shapeColor = "red"
}
  bounceOff()
  console.log(movingRect.x - fixedRect.x)

  drawSprites();
}


