class Pendulum{
    constructor(x,y){
        var options={
            restitution: 1,
             friction: 0,
            frictionAir: 0.0,
            slop: 1,
            inertia: Infinity
        }
        this.body=Bodies.circle(x,y,10,options);
        this.x=x;
        this.y=y;

        World.add(world,this.body);
    }

    display(){

        var pos= this.body.position;
        var angle= this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        fill("black");
        ellipseMode(RADIUS);
        ellipse(0,0,20,20);
        pop ();
    }

}