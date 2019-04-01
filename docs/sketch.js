var canvas;
var mic;

let line = []
let yoff = 0.0; // 2nd dimension of perlin noise

function windowResized() {
  console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  frameRate(30);
  // canvas.style('z-index', '-1');
  // mic = new p5.AudioIn();
  // mic.start();
}
function draw() {
  clear();
  if(mouseX <= windowWidth && mouseY <= windowHeight){
    clear();
    len = line.length
    if(len > 10 || (line[len-1] && line[len-2] && line[len-1][0] == line[len-2][0] && line[len-1][1] == line[len-2][1])){
      line.shift();
    }else{
      line.push([mouseX, mouseY]);
    }
    noFill();
    strokeWeight(3);
    beginShape();
    line.map((pos) => curveVertex(pos[0],pos[1],20));
    endShape();
  }


  

  fill(255);
  // We are going to draw a polygon out of the wave points
  beginShape();

  let xoff = 0; // Option #1: 2D Noise
  // let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    let y = map(noise(xoff, yoff), 0, 1, 100, mouseY * 5);

    // Option #2: 1D Noise
    // let y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  
}