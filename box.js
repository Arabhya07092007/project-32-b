class Box {
    constructor(x,y,width,height,b) {
      var options = {
          isStatic: false
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
      var angle = this.body.angle;

      if(this.body.speed < 5){
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.b);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        push();
        this.Visiblity = this.Visiblity -5;
        tint(225,this.Visiblity);
        World.remove(world,this.body);
        pop();

      }
    }

    core(){
      if(this.Visiblity<0 && this.visibility>-105){
       score++;
      }
    }

  };