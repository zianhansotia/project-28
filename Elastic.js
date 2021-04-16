class Elastic{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.0045
        }

        this.elastic = Constraint.create(options);
        World.add(world,this.elastic);

        this.pointB = pointB;
    }

    fly(){
        this.elastic.bodyA = null;
    }

    attach(body){
        this.elastic.bodyA = body;

    }

    display(){
        if(this.elastic.bodyA){
            var pointA = this.elastic.bodyA.position;
            var pointB = this.pointB;

            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}