class Ground{
  constructor(x, y, width, height){ 
    var ground_options ={
      isStatic: true 
    }
     this.body = Bodies.rectangle(x,y,width,height,ground_options);
     this.width = width
     this.height= height 

     World.add(world, this.body)
     this.image = loadImage("sprites/ground.png")
      
  }
  display(){
    var pos = this.body.position
    push();
    imageMode(CENTER)
    image(this.image, pos.x, pos.y, this.width, this.height)
    pop();
  }


}