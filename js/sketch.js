
var defaultColor = 30;
var a = 0;

var minDistance;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  // var density = displayDensity();
  // pixelDensity(density);
  canvas.parent('intro');
  noStroke();
  fill(53, 52, 52, 200);
  minDistance = random(200, 400);
  frameRate(15); 
}

function draw() {
  background(245, 245, 240, 200);

  for(var x = 0; x < width; x+= 30) {
    for(var y = 0; y < height; y+= 30) {
      var size = 2;
      var distance = dist(mouseX, mouseY, x, y);
      
      if(distance < minDistance) {
        size = map(distance, minDistance, 0, 2, 12);
        fill(245, 86, 103,
          map(distance, minDistance, 10, defaultColor, 80));
      } else {
        fill(0, 0, 0, defaultColor);
      }
      rect(x, y, size, size);
    }
  }

  a++;
  minDistance = 500 + (sin(a/4) * 250);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}