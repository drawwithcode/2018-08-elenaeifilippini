function Vehicle(x,y){
  this.pos = createVector(x,y);
  this.target = createVector(x,y);
  this.vel ;
  this.acc = createVector();
  this.r = 8

}
//funzionava ma era troppo lento da calcolare
// Vehicle.prototype.shaken = function(){
//   push();
//   fill(0,255,0);
//   text(this.vel, 30,30);
//   pop();
//   if(value > 1){
//     this.vel = p5.Vector.random2D()
//   } else {this.vel = createVector()}
//   console.log(this.vel);
//
// }

Vehicle.prototype.update = function(){
  this.pos.add(this.vel);
  //this.vel.add(this.acc);
}

Vehicle.prototype.show = function(){

  stroke(255);
  strokeWeight(7);
  point(this.pos.x, this.pos.y);

}
