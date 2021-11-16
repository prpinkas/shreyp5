let y = 100;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("#82BCFC");
  //sun 
  fill("#FAFA42");
  ellipse(90,100,150,150);
  //rectangle
  fill("#1843CB");
  noStroke();
  rect(mouseX-15,mouseY-15,20,20);
  //text  
 
  fill("#1836BD")
  textFont("Times New Roman");
  textSize(30);
  textStyle(ITALIC);
  text("Good morning", 200,y);
 y = y - 1;
  if (y < 0) {
    y = height;
  }
}
