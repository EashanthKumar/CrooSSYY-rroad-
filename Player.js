class Player {
   
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.spt = createSprite(this.x, this.y, 80,80);
        this.spt.shapeColour = "red";
    }
    
     move(xdir,ydir)
     {
         this.spt.x += xdir * grid;
         this.spt.y += ydir * grid;

     }

     
}