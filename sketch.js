const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1,ground;
var ball1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,height,800,20);

    box1 = new Box(600,380,30,30);
    box2 = new Box(600,350,30,30);
    box3 = new Box(600,320,30,30);
    box4 = new Box(600,290,30,30); 
    box5 = new Box(600,260,30,30);
    box6 = new Box(600,230,30,30);
    box7 = new Box(600,200,30,30);
    box8 = new Box(600,170,30,30);
    box9 = new Box(600,140,30,30);
    box10 = new Box(600,110,30,30);
    
    box11 = new Box(550,380,30,30);
    box12 = new Box(550,350,30,30);
    box13 = new Box(550,320,30,30);
    box14 = new Box(550,290,30,30); 
    box15 = new Box(550,260,30,30);
    box16 = new Box(550,230,30,30);
    box17 = new Box(550,200,30,30);
    box18 = new Box(550,170,30,30);
    box19 = new Box(550,140,30,30);
    box20 = new Box(550,110,30,30);

    box21 = new Box(500,380,30,30);
    box22 = new Box(500,350,30,30);
    box23 = new Box(500,320,30,30);
    box24 = new Box(500,290,30,30); 
    box25 = new Box(500,260,30,30);
    box26 = new Box(500,230,30,30);
    box27 = new Box(500,200,30,30);
    box28 = new Box(500,170,30,30);

    ball1 = new Ball(250,260,50,50);
    // ball1 = new Ball(360,360,50,50);
    rope = new Rope(ball1.body,{X:300,y:50});

    
}

function draw(){
    background(185);
    Engine.update(engine);

     ground.display();

    box1.display();
    box2.display();

    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();

    ball1.display();
    rope.display();
    }

function mouseDragged(){
    //if (gameState!=="launched"){
         Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
   // }
}
function mouseReleased(){
    
    rope.fly();
    Matter.body.setStatic(ball1,false)
    Matter.Body.applyForce(ball1.body,ball1.body.position ,{x:50,y:0})

}