const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Cons = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine,world;
var bob,bob1,bob2,bob3,bob4;
var rope,rope1,rope2,rope3,rope4;

function setup() {
	createCanvas(600, 600);

	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
	  mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);

	bob= new Pendulum(100,350);
	bob1= new Pendulum(140,350);
	bob2= new Pendulum(180,350);
	bob3= new Pendulum(220,350);
	bob4= new Pendulum(260,350);

	rope= new Sling(bob.body,{x:100,y:200});
	rope1= new Sling(bob1.body,{x:140,y:200});
	rope2= new Sling(bob2.body,{x:180,y:200});
	rope3= new Sling(bob3.body,{x:220,y:200});
	rope4= new Sling(bob4.body,{x:260,y:200});

}


function draw() {
  
  background(230);

  Engine.update(engine);

  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display(); 
 
}

function mouseDragged(){
        Matter.Body.setPosition(bob.body, {x: mouseX , y: mouseY});
}
