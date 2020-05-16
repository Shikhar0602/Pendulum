class Bob{
    constructor(x, y, width, height) {
        var options = {
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("bob.png");
        World.add(world, this.body);
      }


      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }

      Rest() {
        
        this.body = isStatic = true;
      
    }

    Start() {
        
      this.body = isStatic = false;
    
  }
}