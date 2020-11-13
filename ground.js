class Ground {
    constructor(x,y,width,height,b) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.b = b;
      this.Visiblity = 225;
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;

      rectMode(CENTER);
      fill(this.b);
      rect(pos.x, pos.y, this.width, this.height);

    }
  };