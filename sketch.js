
var tower1 =new Tower;
var tower2 =new Tower;
var tower3 =new Tower;
var tower4 =new Tower;
var tower5 =new Tower;




function setup() {
  createCanvas(800,400);
  tower1=createSprite(100, 400, 50, 300);
  tower1.shapeColor="pink";
  tower2=createSprite(190, 400, 80, 400);
  tower2.shapeColor="pink";
  tower3=createSprite(300, 400, 120, 600);
  tower3.shapeColor="pink";
  tower4=createSprite(410, 400, 80, 400);
  tower4.shapeColor="pink";
  tower5=createSprite(500, 400, 50, 300);
  tower5.shapeColor="pink";
}

function draw() {
  background(255,255,255);  
  drawSprites();
}