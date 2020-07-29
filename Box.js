class Box {
    constructor(x, y, width, height) 
    {
      var options = {
          'isStatic':false,
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visiblity = 255;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      if(this.body.speed<3)
      {
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle); 
        fill(66,194,245);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
      }
      else
      {
        World.remove(world,this.body);
        push(); 
        this.visibility = this.visibility-5;
        tint(255,this.visibility);
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle); 
        fill(66,194,245);
        pop(); 
      }
    }
  };
  