class Log {
    constructor(x,y,width,height) {
    
      
      var options = {
          isStatic: true
      }
      this.image = loadImage("sprites/dustbingreen.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      push()
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      image(this.image, 500, 600);
     // rect(pos.x, pos.y, this.width, this.height);
      pop()
    }
}