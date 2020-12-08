
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roofObject;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new roof(400,100,700,100);

	bobObject1 = new bob(200,300,25);
	bobObject2 = new bob(300,300,25);
	bobObject3 = new bob(400,300,25);
	bobObject4 = new bob(500,300,25);
	bobObject5 = new bob(600,300,25);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
	roofObject.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

  drawSprites();
 
}



