// <!-- Mapping out run and jump game -->

//  Draw game area (CSS)  e.g. 500 upwards / 1200 wide / border-->

//  Create variables e.g. score / player / obstacles / gamespeed / keys

//  Function to start the game -->

//  Create the player - make move across the screen

//  Make key functions (Spacebar to jump) and character (start with a square)-->

//  Creating obstacles with heights / space between : max / min gap between -->

//  Making obstacles move using speed -->

let mouse;
function setup() {
  createCanvas(600, 450);
  mouse = new mouse();
}

function draw() {
  background(200);
  mouse.show();
}
