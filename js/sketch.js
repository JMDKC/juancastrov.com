var img;

function setup() {
  var canvas = createCanvas(350, 350);
  canvas.parent('sketch-holder');
  img = loadImage("img/gradient.png");
  background(255);
}

function draw() {
  var opp = mouseY - 175;
  var adj = mouseX - 175;
  
  var angle = atan(opp / (adj === 0 ? 1 : adj));
  
  translate(width/2, height/2);
  rotate( adj >= 0 ? angle : PI + angle);

  image(img, -175, -175);
}