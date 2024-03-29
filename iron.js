class Iron {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':3.0,
        'density':30.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var Angle = this.body.angle;
    push ();
    translate (pos.x,pos.y);
    rotate(Angle);
    rectMode(CENTER);
    fill("#AF601A");
    rect(0,0, this.width, this.height);
    pop();
  }
}
