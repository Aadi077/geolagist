class Stone {
    constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction':0.9,
          'density':12.0
      }
      this.body = Bodies.circle(x, y,r, options);
      this.width = r;
      this.height = r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var Angle = this.body.angle;
      push ();
      translate (pos.x,pos.y);
      rotate(Angle);
      ellipseMode(RADIUS);
      fill("green");
      ellipse(0,0, this.width, this.height);
      pop();
    }
  }
  