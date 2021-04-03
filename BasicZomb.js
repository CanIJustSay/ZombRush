/**
 * Pretty certain that the zomb splicing is bugged
 */


var BZomb = function(x,y){
    this.x = x;
    this.y = y;
    this.health = 100;
    this.hitTime = 50;
    this.deathFade = 255;
    this.speed = 3;
    this.r = 21;
};

BZomb.prototype.work = function(){
     var ang1 = atan2(player.y-this.y, player.x-this.x);

 //  }
 //  else{
       
//   }
    //make if that makes the wander aimlessly
    //println(zombs.length);
for(var i=0;i<bullets.length;i++){
    if(dist(this.x,this.y,bullets[i].x,bullets[i].y)<22&&Layout!=="Assassin"){
    this.health-=Bdamage; 
    bullets.splice(i,1);
    }


}  
  for(var i = 0; i < bullets.length; i++){
        if(dist(this.x,this.y,bullets[i].x,bullets[i].y)<22 && Layout === "Assassin"){
this.health-=200;
        }
    }
    for(var i = 0; i < zombs.length; i++){
    if(this.health<=0){
        this.deathFade-=50;
        noStroke();
        if(this.deathFade<=0){

kills+=1;
zombs.splice(zombs.indexOf(this),1);
zombCount-=1; 
this.deathFade=0; 
        }

    }
}
console.log(this.health); 
//zombie drawings
fill(112, 0, 0,this.deathFade);
    ellipse(this.x+cos(ang1-50)*20, this.y+sin(ang1-50)*20, 22, 22);
    ellipse(this.x+cos(ang1+50)*20, this.y+sin(ang1+50)*20, 22, 22);
    fill(0, 110, 26,this.deathFade);
    ellipse(this.x, this.y, 42, 42);
    //add if statement to where they only to this until the are like with 300 pixels???
  // if(dist(this.x,this.y,player.x,player.y)< 200){
      //making zombie move
    this.x +=cos(ang1) * this.speed;
    this.y += sin(ang1) * this.speed;
    stroke(0,0,0); 
     this.x = constrain(this.x,minMov,maxMov);
        this.y = constrain(this.y,minMov,maxMov);

            for(var i = zombs.length - 1; i >=0; i--){
                var ang = atan2(this.y-zombs[i].y,this.x-zombs[i].x);
                if(zombs[i] === zombs[zombs.indexOf(this)]){
                      return;
                  }
                 if(circCollide(this,zombs[i])){
                     var ang = atan2(this.y-zombs[i].y,this.x-zombs[i].x);
                     zombs[i].x = this.x - (this.r+zombs[i].r)*cos(ang);
                     zombs[i].y = this.y - (this.r+zombs[i].r)*sin(ang);
                 }
                }
  

   }; 
   BZomb.prototype.collide = function(){
              
                for(var i = zombs.length - 1; i >=0; i--){
                    var ang = atan2(player.y - this.y, player.x - this.x);
                    
                    if (circCollide(player,this)) {
                        this.hitTime--;
                        if(this.hitTime<=0){
                            PShield-=10;
                            PSDec-=25;
                            this.hitTime=100;
                if(PShield<=0){
                                PHealth-=10;
                                PHDec-=25
                            }

                        }   
        
                        this.x = player.x - (player.r + this.r) * cos(ang);
                        this.y = player.y - (player.r + this.r) * sin(ang);
                    }
                
                    
                 }
                 

                };