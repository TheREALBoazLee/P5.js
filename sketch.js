let img;

function loadout(){
  img = loadImage("wargame.png");
}


function setup() {
  createCanvas(600, 600);
  background(50, 58, 168);
}

function draw() {
  background(220);
  img(img,0,0);
}
