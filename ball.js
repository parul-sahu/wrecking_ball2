class Ball{
constructor(x,y){
this.body= Bodies.circle(x,y,  50, {restitution:1, density:1})
this.radius = 30
this.image = loadImage("ball.jpg")
World.add(world, this.body)
}

display() {
ellipseMode(CENTER)
ellipse(this.body.position.x,this.body.position.y,50,50)
//imageMode(CENTER)
    //image(this.image,this.body.position.x,this.body.position.y,100,100 )

}

}