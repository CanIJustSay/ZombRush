var Bullet = function(speed, initialAngle){
this.ang = atan2(mouseY-(player.y+cam.y),mouseX - (player.x+cam.x))
    this.x = player.x;
    this.y =player.y;
    this.speed = speed;
    this.Blife  =0;
    // Sets directional movement at first frame
    this.xvel = cos(initialAngle)*this.speed;
    this.yvel = sin(initialAngle)*this.speed;
    this.x+=this.xvel*LT/this.speed;
    this.y+=this.yvel*LT/this.speed;
};
var bullets = [];
Bullet.prototype.draw = function() {
    push();
    translate(this.x,this.y);
rotate(this.ang+90);
fill(209, 209, 209);
ellipse(0.5,-11,5,13);
rectMode(CENTER);
fill(227, 209, 150);
rect(0,-5,6,10,9);

    pop();
    this.work();
};
Bullet.prototype.work = function() {
    // Movement
    //this controls movement, make is so this could be a super power, like you make the bullets stand still, then when you want, they fly out in the direction they were orginally created in
    this.x+=this.xvel;
    this.y+=this.yvel; 
    
    for(var i = 0; i < zombs.length; i++){
        if(dist(this.x,this.y,zombs[i].x,zombs[i].y) < 22 && Layout === "Assassin"){
            zombs.splice(i,1);
            zombCount -=1;
            kills+=1;
        }
    }
    if(this.x < 0 || this.x > 3000 || this.y > 3000 || this.y < 0){
        bullets.splice(bullets.indexOf(this), 1);
     }
     if(this.x > player.x || this.x < player.x || this.y > player.y || this.y < player.y){
    Btime++;
}
for(var i = 0; i<bullets.length;i++){

    if(bullets.length > 0&&Layout!=="Assassin"){
        this.Blife++;
        if(this.Blife >=700){
          bullets.splice(bullets.indexOf(this), 1);
          this.Blife=0;
        }
    }
}
};