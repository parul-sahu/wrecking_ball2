class Box{
    constructor(x,y) {
    this.body = Bodies.rectangle(x,y,50,30,{restitution: 1, friction: 1.5})
    this.width = 50
    this.height = 30
    this.image = loadImage("brick1.png")
    this.image1 = loadImage("brickpieces.png")
    this.image2 = loadImage("pieces.jpg")
    this.visibility = 255
    World.add(world, this.body)
    }
    display() {
        push()
    if(this.body.speed<2){

       
    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle)
    //rectMode(CENTER)
    //rect(0,0, this.width,this.height)
    imageMode(CENTER)
    image(this.image, 0,0,60,35)


    }
    else{
        World.remove(world,this.body)
        this.visibility= this.visibility-10
        tint(255, this.visibility)
        image(this.image1,this.body.position.x,this.body.position.y,60,35)
        
        image(this.image2,400,950,100,105)
        
        
        
    }
    pop()
   console.log(this.body.speed)
    
    }
    
    }