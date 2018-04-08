function setup() {
  createCanvas(1000,700);
  background(58,155,250);
  fill(255);
  rect(0,600,2000,300);
  
}

function draw() {
  background(58,155,250);
  fill(255);
  rect(0,600,2000,300);
  fill(250,58,71);
  ellipse(20,20,200,200);
  
  
  rectMode(CENTER);
  
  translate (mouseX,mouseY);
  
  //rect body
  fill(0);
  rect(0,0,130,300);
  //Lbody
  fill(0);
  arc(-65,0,100,300,radians(90),radians(270));
  //R
  fill(0);
  arc(65,0,100,300,radians(270),radians(450));
  
  //head
  fill(0);
  ellipse(0,-200,140,140);
  //Leye
  fill(255);
  ellipse(-25,-200,30,30);
  fill(random(255),random(255),random(255),random(100,255));
  ellipse(-24,-198,20,20);
  fill(0);
  ellipse(-22,-195,15,15);
  
  //Reye
  fill(255);
  ellipse(25,-200,30,30);
  fill(random(255),random(255),random(255),random(100,255));
  ellipse(24,-198,20,20);
  fill(0);
  ellipse(22,-195,15,15);
  
  //nose
  fill(219,58,0);
  ellipse(0,-165,70,30);
  
  //Lleg
  fill(237,169,0);
  noStroke();
  rect(-30,175,20,50);
  //Rleg
  fill(237,169,0);
  noStroke();
  rect(30,175,20,50);
  
  //Lfeet
  arc(-40,200,70,30,radians(180),radians(360));
  //Rfeet
  arc(40,200,70,30,radians(180),radians(360));
  
  //tommy
  fill(255);
  arc(0,150,130,450,radians(180),radians(360));
}