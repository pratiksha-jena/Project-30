const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2;


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

     stand1 = new Stand(800,350,100,10);
     stand2 = new Stand(300,220,100,10);
}

function draw(){

    Engine.update(engine);
    
    stand1.display();
    stand2.display();
}