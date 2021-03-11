var angle=10

function setup(){
  createCanvas(600,600);
}
function draw(){
  background("blue")
  angle=angle+10;
  push ()
  translate(200,200)
  rotate(angle)
  rect(100,100,50,50);

  pop()
}