class Thread{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            
        }            

        this.thread = Constraint.create(options);
        World.add(world, this.thread);
    }

    display(){        
        
            var pointA = this.thread.bodyA.position;
            var pointB = this.thread.bodyB.position;
            strokeWeight(4);
            stroke(255,240,150);
            line(pointA.x, pointA.y - 30, pointB.x, pointB.y);
            
        
    }
    
}