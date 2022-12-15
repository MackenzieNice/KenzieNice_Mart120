//Final Game

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
    var shapeY = 90;
    var shapeXSpeed;
    var shapeYSpeed;

    var shapeX2 = 150;
    var shapeY2 = 600;
    var shapeX2Speed;
    var shapeY2Speed;

    var shapeX3 = 300;
    var shapeY3 = 70;
    var shapeX3Speed;
    var shapeY3Speed;

    //Mouse is clicked
    var mouseShapeX;
    var mouseShapeY;

    function setup()
    {
        createCanvas(900,1000);
    }
    function draw()
   {
  background(0,0,200);
  stroke(0)
  fill(0)
  //top
  rect(0,0, width,10);
  rect(0,0,10,height);
  rect(0,height-10, width,10);
  rect(width -10,0,  height-50);

  //plot
  textSize(27);
  text("Controls:W,S,A,D", width-850, height-857)
  //plot
  textSize(26); 
  textSize(26);
  text("Locate the exit as soon as possible and avoid the other shapes", width-850, height-827)

  //exit
  textSize(18);
  text("Escape!", width-75,height-30)

  //character
  fill(20,600,190);
  circle(characterX,characterY,35);

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

    //enemy3
    fill(250,15,160)
    circle(shapeX3, shapeY3, 80);


  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  shapeX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
  shapeY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);

  shapeX3Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 2);
  shapeY3Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 15)) + 2);

  shapeX += shapeXSpeed;
  shapeY += shapeYSpeed;

  shapeX2 += shapeX2Speed;
  shapeY2 += shapeY2Speed;

  shapeX3 += shapeX3Speed;
  shapeY3 += shapeY3Speed;

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

  //boundaries3
if(shapeX3 > width)
  {
    shapeX3 = 0;
  }
if(shapeX3 < 0)
  {
    shapeX3 = width;

  }
if(shapeY3 > height)
  {
    shapeY3 = 0;

  }
if(shapeY3 < 0)
  {
    shapeY3 = height;
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