//Character
var characterX = 200;
var characterY = 100;

var x = 50;
    var y = 50;
    var diameter = 25;
    var w = 87;
    var s = 83;
    var d = 68;
    var a = 65;
//Enemy
    var shapeX = 30;
    var shapeY = 50;
    var shapeXSpeed;
    var shapeYSpeed;

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
    }
    function draw()
   {
  background(280,58,38);
  stroke(0)
  fill(0)
  //top
  rect(0,0, width,10);
  rect(0,0,10,height);
  rect(0,height-10, width,10);
  rect(width -10,0,  height-50);

  //exit
  textSize(18);
  text("Escape!", width-75,height-30)

  //character
  fill(89,600,90);
  circle(characterX,characterY,25);

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

  //enemy1
  fill(85,79,500)
  square(shapeX, shapeY, 64);
  //enemy2
  fill(90,15,160)
  circle(shapeX2, shapeY2, 112);


  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapeX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
  shapeY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);

  shapeX += shapeXSpeed;
  shapeY += shapeYSpeed;
  shapeX2 += shapeX2Speed;
  shapeY2 += shapeY2Speed;

  //boundaries1
  if(shapeX > width)
  {
    shapeX = 0;
  }
  if(shapeX < 0)
  {
    shapeX = width;

  }
  if(shapeY > height)
  {
    shapeY = 0;

  }
  if(shapeY < 0)
  {
    shapeY = height;
  }
//boundries2
if(shapeX2 > width)
{
  shapeX2 = 0;
}
if(shapeX < 0)
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
//Escaped?
  if(characterX > width && characterY > width-75)
  {
    fill(0);
    stroke(5);
    textSize(30);
    text("You Escaped!", width/2-75, height/2-50);
  }

}

  function mouseClicked()
  {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
  }
  //MoreMousestuff
{ 
    fill(88,150,282);
circle(mouseShapeX, mouseShapeY, 25);

}
