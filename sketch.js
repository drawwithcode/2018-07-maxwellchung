var mic;
var capture;

var x_pos;
var y_pos;

var circle = [];
var count = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);

  capture = createCapture(VIDEO);
  capture.size(1920,1080);
  capture.hide();

  mic = new p5.AudioIn();
  mic.start();

  noStroke();
  x_pos = 2;
  y_pos = 5;

}

function draw() {

  clear();
  background(255);

	x_pos += y_pos;

  var vol = mic.getLevel();

  for(i = 0; i <= width; i+=5) {

      noStroke();

      fill(((100*x_pos)*(0.000001/vol)+i)%360, 0, 0);

      a = 140*sin((1*x_pos)+(i/3))*(vol*200);

  	  ellipse(i, 50+(height/4)-50-(a/3), 3, 120+a);

  }

  var myImage = capture.loadPixels();


  push();

  translate(width/2, height/2);
  image(myImage, 140, 140, 140, 140);


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
