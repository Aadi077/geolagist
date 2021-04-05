const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    iron = new Iron(920,520,70,70); 
    stone = new Stone(700,520,40);
    hammer = new Hammer(810,550);
    rubber = new Rubber(810,460, 50, PI/2);

    ground=new Ground(600,590,1200,20);



}

function draw(){
    background(0);
    Engine.update(engine);
    rubber.display();
    hammer.display();
    iron.display();
    stone.display();
    
   ground.display();
}