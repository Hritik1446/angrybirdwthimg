class Base {
    constructor(x,y,width,height,angle){
        var options = {
            restitution:0.3,
            friction: 1.8,
            density: 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options) 
        this.width = width;
        this.height = height;
        World.add(world,this.body)
        this.img=loadImage("sprites/base.png")
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.img,0,0,this.width,this.height) 
        pop()
        
    }
}