const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine, world
var ground, b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14, b15, b16, b17,b18,b19,b20
var bg, bg1, s
var gameState = "play"
function preload(){
bg =loadImage("download.jpg")
bg1 =loadImage("final.jpg")
s = loadSound("City Traffic And Construction-SoundBible.com-257865182.mp3")
}
function setup(){
engine = Engine.create()
world = engine.world

createCanvas(1000,500)
ground = new Ground(500,480,1000,20)
b1 = new Box(700,410)
b2 = new Box(700,380)
b3 = new Box(700,350)
b4 = new Box(700,410)
b5 = new Box(700,410)
b6 = new Box(700,410)

b7 = new Box(750,410)
b8 = new Box(750,410)
b9 = new Box(750,410)
b10 = new Box(750,410)
b11= new Box(750,410)
b12= new Box(750,410)

b13 = new Box(800,410)
b14 = new Box(800,380)
b15 = new Box(800,350)
b16 = new Box(800,410)
b17 = new Box(800,410)
b18 = new Box(800,410)

b19 = new Box(850,410)
b20 = new Box(850,410)
b21 = new Box(850,410)
b22 = new Box(850,410)
b23= new Box(850,410)
b24= new Box(850,410)

ball = new Ball(200,200)

rope = new Rope(ball.body,{x:400,y:90})

}
function draw() {
    if(gameState === "play"){
        background(bg)
        Engine.update(engine)
        s.play()
        ground.display()
        b1.display()
        b2.display()
        b3.display()
        b4.display()
        b5.display()
        b6.display()
        b7.display()
        b8.display()
        b9.display()
        b10.display()
        b11.display()
        b12.display()
        b13.display()
        b14.display()
        b15.display()
        b16.display()
        b17.display()
        b18.display()
        b19.display()
        b20.display()
        b21.display()
        b22.display()
        b23.display()
        b24.display()
        
        ball.display()
        
        rope.display()
        if(b1.body.speed> 10 && b2.body.speed> 10 ||   b3.body.speed> 10 ||   b4.body.speed> 10 ||   b5.body.speed> 20 &&  b6.body.speed> 10 &&  b7.body.speed> 10 &&   b8.body.speed> 10 &&  b9.body.speed> 10 &&  b10.body.speed> 10 ||
            b21.body.speed> 10 &&  b22.body.speed> 10 && b23.body.speed> 10 && b24.body.speed> 10 ){
                gameState = "end"
            }
            
    }
        
        if(gameState=== "end"){
            s.stop()
background(bg1)
stroke("black")
textSize(100)
text("task done", 300,350)

        }
    }
    function mouseDragged(){
        Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
        }
