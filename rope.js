class Rope{
constructor(bA, bB){
var opt = {
bodyA : bA,
pointB : bB,
stiffness: 0.16,
length: 350
}
this.pointB = bB
this.chain = Constraint.create(opt)

World.add(world, this.chain)

}
display(){
    push()
    stroke("brown")
    strokeWeight(7)
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x, this.pointB.y)

pop()
}
}