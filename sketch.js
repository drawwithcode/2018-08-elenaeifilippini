
var ibm;
var vehicles = [];
var value = 0; //per lo shake

function preload(){
  // put preload code here

  ibm = loadFont('IBMPlexSerif-BoldItalic.ttf')
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  //per lo shake
  angleMode(DEGREES);
  setShakeThreshold(7);
  frameRate();

  // textSize(250);
  // textFont(ibm);
  //
  // textStyle(BOLD)
  // textAlign(CENTER);
  //text('shake',width/2 ,height/2);

  var points = ibm.textToPoints('shake',width/2 - 340,height/2, 250);
  console.log(points);


  for (var i=0; i< points.length ; i++){
    var pt = points[i];
    var myVehicle= new Vehicle(pt.x,pt.y);
    vehicles.push(myVehicle);
    // stroke(255);
    // strokeWeight(7);
    // point(pt.x, pt.y);

  }

}
function deviceShaken() {
  value = value + 1;
  //v.vel = p5.Vector.random2D();

}


var v;

function draw() {
  // put drawing code here
  background(0);

  for (var j = 0; j< vehicles.length; j ++){
    v= vehicles[j];
    v.update();
    v.show();
    if (value > 3){
    v.vel = p5.Vector.random2D();
    }

  }


}
