
  const Engine=Matter.Engine;
  const World=Matter.World;
  const Bodies=Matter.Bodies;
  const Constraint = Matter.Constraint;

  var body ;
  var rope ;
  var ground;
  var score ;

  var gameState  = "onSling";
  var a,b;
  var c,d;
  var e ; 
  function preload(){
    polyImg  = loadImage("hexa gon.png");
  }


  function setup() {

    createCanvas(1500,600);
    engine=Engine.create();
    world=engine.world;

    a = 190;
    b = 390;
    e = "skyblue";

    var options ={
      friction:10,
      density:0.8
    }

    score = 0;
    polygon  = Bodies.circle(200,500,25,options);
    World.add(world,polygon);
        
    ground1 = new Ground(1200,480,290,12,"red");
    ground2 = new Ground(700,300,290,12,"blue");
    ground3 = new Ground(750,595,1500,10,"green");

    // bottom layer 
    box1 = new Box(602,265,45,55,"orange");
    box2 = new Box(600+box1.width+4,265,45,55,"orange");
    box3 = new Box(box2.body.position.x+box2.width+2.5,265,45,55,"orange");
    box4 = new Box(box3.body.position.x+box3.width+2.5,265,45,55,"orange");
    box5 = new Box(box4.body.position.x+box3.width+2,265,45,55,"orange");

    // middle layer
    box6 = new Box(box2.body.position.x,208,45,55,"purple");
    box7 = new Box(box6.body.position.x+box6.width+3,208,45,55,"purple");
    box8 = new Box(box7.body.position.x+box7.width+3,208,45,55,"purple");

    // upper layer
    box9 = new Box(box3.body.position.x+1,206-box5.height,45,55,"violet");

    // bottom layer 
    box10 = new Box(1102,445,45,55,"indigo");
    box11 = new Box(1102+box10.width+2,445,45,55,"indigo");
    box12 = new Box(box11.body.position.x+box10.width+2.5,445,45,55,"indigo");
    box13 = new Box(box12.body.position.x+box10.width+2.2,445,45,55,"indigo");
    box14 = new Box(box13.body.position.x+box10.width+2,445,45,55,"indigo");

    // middle layer
    box15 = new Box(box11.body.position.x,388,45,55,"pink");
    box16 = new Box(box12.body.position.x,388,45,55,"pink");
    box17 = new Box(box13.body.position.x,388,45,55,"pink");

    //uppermost layer  
    box18 = new Box(box12.body.position.x,388-box15.height,45,55,"lightgreen");

    var options ={
        isStatic:false
    }

    var  a ={
      bodyA:polygon,
      pointB:{x:190,y:390},
      stiffness:0.08,
      length:5
    }
    rope = Constraint.create(a);
    World.add(world,rope);



  }

  function draw(){
    background(e);  
    Engine.update(engine);

    rectMode(CENTER);
    
    ground1.display();
    ground2.display();
    ground3.display();

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

    box1.core();
    box2.core();
    box3.core();
    box4.core();
    box5.core();
    box6.core();
    box7.core();
    box8.core();
    box9.core();

    box10.core();
    box11.core();
    box12.core();
    box13.core();
    box14.core();

    box15.core();
    box16.core();
    box17.core();


    box18.core();

    imageMode(CENTER);
    image(polyImg,polygon.position.x,polygon.position.y,40,40);

    c = polygon.position;

    
     
    if(a){
    line(a,b,polygon.position.x,polygon.position.y);
    }

    textSize(25);
    fill("indigo");
    text("Score :"+score,1200,100);


  }

  function mouseDragged(){
    if(gameState=="onSling"){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
    }
  }

  function mouseReleased(){

    a = null;
    b = null;
    rope.bodyA = null;
    gameState = "launched";

  }

  async function  getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await responce.JSON();
      
    var datetime = responseJSON.datetime;
    var hour  = datetime.slice(14,16);

    if(hour>=06&&hour<=19){

      e = "skyblue"

    }
    else{
      e  = "blue";
    }
  }
