class Rubber {
    constructor(x, y, height, angle) {
      var options = {
          'restitution':1.0,
          'friction':5.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var Angle = this.body.angle;
      push ();
      translate (pos.x,pos.y);
      rotate(Angle);
      rectMode(CENTER);
      fill("White");
      rect(0,0, this.width, this.height);
      pop();
    }
  }
  