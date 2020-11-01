class Box
{
    constructor(x,y,w,h){
        var option={
            isStatic:false
        }
     this.body = Bodies.rectangle(x,y,w,h,option) 
     this.width = w
     this.height = h
     this.image = loadImage("chocochip.png")
     World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        fill("pink")
        image(this.image,0,0,this.width,this.height)
        pop(); 
    }
    

}