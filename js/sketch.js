
var defaultColor = 50;
var a = 0;

var xPos, yPos, minDistance;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  var density = displayDensity();
  pixelDensity(density);
  canvas.parent('intro');
  noStroke();
  fill(53, 52, 52, 200);
  
  xPos = random(0, width);
  yPos = random(0, height);

  minDistance = random(200, 400);
}

function draw() {
  background(245, 245, 240, 200);



  for(var x = 0; x < width; x+= 30) {
    for(var y = 0; y < height; y+= 30) {
      var size = 2;
      var distance = dist(mouseX, mouseY, x, y);
      
      fill(0, 0, 0, defaultColor);
      
      if(distance < minDistance) {
        size = map(distance, minDistance, 0, 2, 8);
        fill(245, 86, 103,
          map(distance, minDistance, 10, defaultColor, 100) + random(-5, 5));
      } 
      rect(x, y, size, size);
    }
  }

  xPos += random(-50, 50);
  yPos += random(-50, 50);

a++;
  minDistance = 500 + (sin(a/8) * 400);
}