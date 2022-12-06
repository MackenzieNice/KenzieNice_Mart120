//Character
var characterX = 200;
var characterY = 100;
var x = 50;
    var y = 50;
    var diameter = 63;
    var w = 87;
    var s = 83;
    var d = 68;
    var a = 65;
//Enemy
    var shapeX = [];
    var shapeY = [];

    var shapeXSpeed = [];
    var shapeYSpeed = [];
    //enemy2
    var shapeX2 = 30;
    var shapeY2 = 50;
    var shapeX2Speed;
    var shapeY2Speed;

    //Mouse is clicked
    var mouseShapeX;
    var mouseShapeY;

    function setup()
    {
        createCanvas(500,600);
        //loop
        for(var i = 0; i <5; i++)
        {
          shapeXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
          shapeYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
          shapeX[i] = getRandomNumber(450);
          shapeY[i] = getRandomNumber(500);
          diameter[i] = getRandomNumber(25);
        }
    }
    function draw()
   {
//call createBorders Function
createBackground();
createBorders();
createBoundaries();
createCharacter();
characterMovement();
createEscape();
createExit();
enemyMovement();
createEnemy();
{
fill(90,150,200);
circle(mouseShapeX, mouseShapeY, 30); }

function createBackground()
{
  background(280,58,38);
  stroke(0)
  fill(0)
}
function createEnemy()
{
    //enemy1
fill(85,79,500)
for (var i = 0; i < shapeX.length; i++)
{
circle(shapeX[i], shapeY[i], diameter[i]);
shapeXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random()*5)) +1);
shapeYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random()*5)) +1);
}

//move
shapeX[i] += shapeXSpeed[i];
shapeY[i] += shapeYSpeed[i];
}
//enemy2
fill(90,15,160)
circle(shapeX2, shapeY2, 112);

}
function enemyMovement()
{
shapeX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
shapeY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
shapeX2 += shapeX2Speed;
shapeY2 += shapeY2Speed;
}
function createBoundaries()
{
    //boundaries1
    if(shapeX[PI] > width)
    {
      shapeX[i]= 0;
    }
    if(shapeX[PI]< 0)
    {
      shapeX[i] = width;
  
    }
    if(shapeY[PI] > height)
    {
      shapeY[PI] = 0;
  
    }
    if(shapeY[PI] < 0)
    {
      shapeY[i] = height;
    }

  //boundries2
  if(shapeX2 > width)
  {
    shapeX2 = 0;
  }
  if(shapeX2 < 0)
  {
    shapeX2 = width;
  
  }
  if(shapeY2 > height)
  {
    shapeY2 = 0;
  
  }
  if(shapeY2 < 0)
  {
    shapeY2 = height;
  }
}
function createExit()
{
    //exit
    textSize(18);
    text("Escape!", width-75,height-30)
}
//Escaped?
function createEscape()
{
  if(characterX > width && characterY > width-75)
  
    fill(10);
    stroke(5);
    textSize(30);
    text("You Escaped!", width/2-75, height/2-50);

}
  function createCharacter()
  {
    //character
  fill(89,600,90);
  circle(characterX,characterY,25);

  }
  function createBorders()
  { //top
  rect(0,0, width,10);
  rect(0,0,10,height);
  rect(0,height-10, width,10);
  rect(width -10,0,  height-50);
  }
  function characterMovement()
  {
    //controls
  if (keyIsDown(w)) {
    characterY -=10;
  }
  if (keyIsDown(s)) 
  {
    characterY +=10;
    }
  if (keyIsDown(d)) 
  {
    characterX +=15;
  } 
  if (keyIsDown(a)) 
  {
    characterX -=15;
  }
  }


  function mouseClicked()
  {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
  }
  function getRandomNumber(number) {
    return Math.floor(Math.random() * number) +10;}
