var Player = function(x,y){

    this.x =x;
    this.y =y;
 this.r=21;
    
    }
    
Player.prototype.draw = function(){
     //   var ang = atan2(mouseY-player.y, mouseX-player.x); 
      var ang = atan2(mouseY - (player.y+cam.y), mouseX - (player.x+cam.x));
    //gun
var fist1 = {
    x: player.x+cos(ang-50)*20,
    y:player.y+sin(ang-50)*20,
    width:22,
    height:22
}
var fist2 = {
    x: player.x+cos(ang+50)*20,
    y:player.y+sin(ang+50)*20,
    width:22,
    height:22
}
    fill("brown");
    if(slot===0){
        ellipse(fist1.x,fist1.y,fist1.width,fist1.height);
        ellipse(fist2.x,fist2.y,fist2.width,fist2.height);
    }
    fill("beige");    
   
    if(slot===1&&Layout==="Soldier"){
        //the AK-47 or something, idrk
        {
        push();
  translate(player.x+cos(ang-50)*20, player.y+sin(ang-50)*20);
 rotate(ang-90);

 fill(133, 75, 75);
    arc(-21,13,24,-37,-307,-68);
    fill(230, 193, 46);
 ellipse(-5,6,22,22); 
 ellipse(-21,27,22,22); 
  fill(0, 0, 0);
 rectMode(CENTER);
 //muzzle?
 ellipse(-15,45,10,20);
 rect(-15,19,10,LT);
 stroke(18, 184, 90);
 strokeWeight(2);
 line(-11,50,-19,50);
     line(-11,21,-19,50);
         line(-11,50,-19,21);
 noStroke();
 fill("darkorange")
 //barrel
 rect(-15,9,15,20);
 stroke(255, 0, 0);
 strokeWeight(10);   
 //fist thingys
        

 pop();
        }
    }
    if(slot===2&&Layout==="Soldier"){
        
    }
    fill(230, 193, 46);
     ellipse(player.x, player.y, 42, 42);
this.x = constrain(this.x,minMov,maxMov);
this.y = constrain(this.y,minMov,maxMov);

}

    