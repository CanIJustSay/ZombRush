/**
 * If original bullets hits zombs, and there is another bullet in play, they both get spliced
 * Pretty certain that the zomb splicing is bugged
 */


var SZomb = function(x,y,){
    this.x = x;
    this.y = y;
    this.health = 50;
    this.hitTime = 10;
    this.deathFade = 255;
    this.speed = 5;
    this.r = 21;
};

SZomb.prototype.work = function(){
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
   SZomb.prototype.collide = function(){
              
                for(var i = zombs.length - 1; i >=0; i--){
                    var ang = atan2(player.y - zombs[i].y, player.x - zombs[i].x);
                    
                    if (circCollide(player, zombs[i])) {
                        this.hitTime--;
                        if(this.hitTime<=0){
                            PShield-=2;
                            PSDec-=5;
                            this.hitTime=100;
                if(PShield<=0){
                                PHealth-=5;
                                PHDec-=12.5
                            }

                        }   
        
                        zombs[i].x = player.x - (player.r + zombs[i].r) * cos(ang);
                        zombs[i].y = player.y - (player.r + zombs[i].r) * sin(ang);
                    }
                
                    
                 }
                };