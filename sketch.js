const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var STATE = 0;


function preload() {
    bgImg = loadImage("bg.jpg");
}

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    bob = new Bob(300,300,86,78.6);
    support = new Support(300,0,300,25);
    thread = new Thread(bob.body, support.body);

    
    
    
}

function draw(){
    background(bgImg);
    Engine.update(engine);
    bob.display();
    support.display();
    thread.display();
        
}

function mouseDragged(){
    Matter.Body.setPosition(bob.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Matter.Body.setPosition(bob.body, {x: bob.body.position.x, y: bob.body.position.y})
}

/*if(keyDown("S") && STATE % 2 === 0){

    bob.Rest();
    STATE = STATE + 1;
}

if(keyDown("S") && STATE % 2 === 1){

    bob.Start();
    STATE = STATE + 1;
}

if (keyDown("P")){
    Matter.Body.setPosition(bob.body, {x: 500, y: 300})
} */