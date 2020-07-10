var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var Paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	
	
Paper = new paper(56,46,30); 

	ground = new Ground(width/2, 650, width, 10 , Option );
	 World.add(world, ground);
	 
	 log1 = new Log(600,640,200,20);
     

	
  log2 = new Log(500,600,20,100 );
  this.image = loadImage("sprites/dustbingreen.png")
	
	 
	 log3 = new Log(700,600,20,100);
	 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  
  log1.display();
  log2.display();
  log3.display();
  
  Paper.display();

  
  
  
 
}

function keyPressed()
{
  if (keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(Paper.body,Paper.body.position,{x:35,y:-35});
  }
}

