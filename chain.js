class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
       
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
   

    display(){
        
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
                line(pointA.x, pointA.y, pointB.x , pointB.y);
                
    }
    
}