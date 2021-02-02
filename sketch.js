const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,obj1;
var obj2
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world=engine.world;
  

  box1 = new box(200,300,50,50);
  box2= new box(200,100,60,100);
 ground1=new ground(0,390,2000,10)
}

function draw() {
  background("cyan");
  Engine.update(engine);
  
  box1.display();
  box2.display();
  ground1.display();
}