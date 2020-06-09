const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3, box4, box5;
var ground;
var pig1, pig2;
var log1,log2, log3, log4
var bird1 
var backi
function preload(){
   backi = loadImage("sprites/bg.png")


}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(420,330,60,60);
    box2 = new Box(280,330,60,60);
    pig1 = new Pig(350,330)
    ground = new Ground(600,380,1200,40)
    log1 = new Log(350,270,250, PI/2 )
    
    box4 = new Box(420,230,60,60);
    box3 = new Box(280,230,60,60);
    pig2 = new Pig(350,230)
    log2 = new Log(350,170,250, PI/2 )
    
    box5 = new Box(345,160,60,60);
    log3 = new Log(300,120,120, PI/3.4)
    log4 = new Log(400,120,128, PI/-3.4)

    bird1 = new Bird((200,200))
    
}

function draw(){

    background(backi);
    fill("white");
    text("Xpos: "+mouseX +"yPos: "+ mouseY,900,40);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
    bird1.display();
}