let img;
let millisecond;


function loadout(){

}


function setup() {
  createCanvas(600, 600);
  background(50, 58, 168);
}

function draw() {
  millisecond = millis();
  background(220);
  fill(50, 58, 168);
  square(20, 200,200);
  textSize(30);
  text("Time: " + millisecond, 20, 100);
}
