const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body= Matter.Body;

var ground;
var particle= [];
var plinko= [];
var division= [];
var divisionHeight=300;
function preload(){
  
}
function setup() {
  createCanvas(600,800);
  
  engine = Engine.create();
  world = engine.world;
  for(var k=0;k<=width;k=k+80){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,75));
  }
  for(var j=0;j<particle.length;j++){
    particle[j].display();
   }
   for(var k=0;k<division.length;k++){
   division[k].display();
   }
  //console.log("hi");
  ground= new Ground(300,780,600,20);

}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();

  drawSprites();
}