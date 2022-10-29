
 function setup()
{
    createCanvas(500, 600);
}

 function draw()
{
    colorMode(RGB,250);
    background(10,150,150);
    
    //neck
    fill(232,190,172);
    rect(200,350,110,150,20,15,10,5);

    //hair
    strokeWeight(1);
    fill(255,240,50);
    circle(250,240,300);

    //head
    strokeWeight(3);
    fill(232,190,172);
    ellipse(250,275,200,250,450);
    fill(255,204,50);
    
    //eyes
    fill(255,255,255);
    ellipse(190,230,50,30);
    ellipse(295,230,50,30);

    //eyes
    fill(0,255,0);
    circle(190,230,20,10);
    circle(295,230,20,10);

    //pupils]
    strokeWeight(6);
    point(190,230,30,50)
    point(295,230,30,50)
   
    //mouth
    strokeWeight(2);
    fill('#fae');
    ellipse(250,320,100,20);
    
    //nose
    //I dont nose ok, it went wild and left
    strokeWeight(3);
    fill(232,190,172);
    triangle(220,270,250,250,250,295)
//text
fill(0,255,255);
    textSize(40);
    text('Simple Nice',10,32);
    textSize(25);
    text('Mackenzie Nice',10,70);
}
