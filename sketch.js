

var img;  // Declare variable 'img'.
let t = 0; // time variable

function setup() {
  img = loadImage("https://i.imgur.com/UhepcZa.gif"); 
  createCanvas(1366,768);
  noStroke();
  fill('blue');
  
}

function draw() {
  background(255,10)
 

  

  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 40) {
    for (let y = 0; y <= height; y = y + 40) {
      // starting point of each circle depends on mouse position
      let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      let angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      let myX = x + 30 * cos(2 * PI * t + angle);
      let myY = y + 30 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
      // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  image(img, 0, height/1, img.width/1, img.height/1);
  }

  t = t + 0.01; // update time
} 
 

