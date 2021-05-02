/** 
 * TODO-----
 * IMPLEMENT MY LOGO
 * MAKE BACKGROUND MAP **NO CORNER MAP**
 * ???MAKE MATCHMAKING SETTINGS???
 * MAKE ROUNDS 
 * ADD GUN IMAGES TO INVENTORY AND PLAYER
 * MODIFY THE DEATH PAGE
 * MODIFY LOCATIONS OF DIFFERENT THINGS
 * MAKE CUSTOMIZE PAGE
 * MAKE MAP BIGGER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */


//variables
{
var Mov = 5;
var loadX = 649;
var bullets =[];
var systems = [];
var Layout = "Soldier";
var keys = [];
   var time = 0;
   var zombs = [];
var zombCount = zombs.length;
var stars = [];
var gameState = "play";
var cam = new Camera();
var x = 200;
var y = 200;
var fade = 255;
var fSpeed = 5;
var PHealth = 100;
var fireTime = 10;
var fireCap = 3;
var Bdamage = 100;
var maxMov = 3000;
var minMov = 0;
var PHDec = 250;
var kills = 0;
var BCKcolor = "lightgreen";
var Btime = 0;
var Ammo=1;
var reloadTime = 0;
var BurstTime = 0;
var PShield = 100;
var PSDec = 250;
var slot = 1;
var loadingTime = 0;
var LT = 50;
var k = [];
var cnv;
var tipX = -20;
var tipY = -4;
var shooting = false;
var roundNum = 1;
}
//map layout
var blockSize = 20;
var portalSize = 40;
var mapLayout = [
    //b: vertical boundaries
    //d: horizontal boundaries
    //p: portal
   //#:block
   //H: bush
   //G:rock
   // < or > or ^ : door
   // 0: window
   
 

"ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddb",    
"b                                                                                                                                                    ",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"b                                                                                                                                                     b",
"                                                                                                                                                       ",
"dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
  
];
var block = function(x, y, w, h) {
    noStroke();
    fill(125, 125, 125);
    rect(x,y,w,h);
    fill(191, 191, 191);
    stroke("black");
};
var drawLevel = function(){
 
    for(var i = 0;i < mapLayout.length; i++) {
     
       for(var j = 0;j < mapLayout[i].length; j++) {
           ellipseMode(CENTER);

           if(mapLayout[i][j] === "#") { 

               block(j*blockSize,i*blockSize,blockSize,blockSize);

           } else if(mapLayout[i][j] === "p"){
       ellipse(j*portalSize,i*portalSize,portalSize,portalSize);
           }
           else if(mapLayout[i][j] ==="b"){
               rect(j*blockSize,i*blockSize,1,40);
           }
           else if(mapLayout[i][j] ==="d"){
            rect(j*blockSize,i*blockSize,20,1);
        }
           
       }
           
       }
};
function circCollide (c1, c2) {
    return dist(c1.x, c1.y, c2.x, c2.y) < c1.r + c2.r;
}
function startUp(){

}
keyPressed = function(){
    k[keyCode]=true;
}
keyReleased = function(){
    k[keyCode]=false;
}
    var drawButton = function(btn){
        fill("aqua");
    rect(btn.x, btn.y, btn.width, btn.height);
    fill(0, 0, 0);
};
var movements = function(){
    if(k[87]){  
        player.y-=Mov;
        y-=6;
    }
    if(k[83]){
        player.y+=Mov;
      y+=6;
    }
    if(k[65]){
        player.x-=Mov;
     x-=6;
    }
    if(k[68]){
        player.x+=Mov;
      x+=6;
    }
};
function CENTEREDtouching(btn){
    return(mouseX < btn.x + btn.width/2 && mouseX > btn.x - btn.width/2 && mouseY < btn.y + btn.height/2 && mouseY > btn.y - btn.height/2)
             

}
function OFFSETtouching(btn) {
    return (mouseX >= btn.x &&
            mouseX <= (btn.x+btn.width) &&
            mouseY >= btn.y && 
            mouseY <= (btn.y+btn.height));
}
function setup(){
    cnv = createCanvas(windowWidth+2,windowHeight+46);
    cnv.position(-390,-150);
  
    player = new Player(200,200);
}
if(Layout==="Soldier"){Ammo=40;}
if(Layout=="Assassin"){Ammo=1;}
if(Layout==="Medic"){Ammo=70;}
drawLevel();
function draw(){ 
    tipX = cos(ang)*LT;
    tipY = sin(ang)*LT;
    cursor("crosshair");
 
 var s = second();
 var m = minute();
 var h = hour();
    
time++;


   
     background(BCKcolor);
    
     if(gameState === "start"){ 
      startPg();
      textSize(20);
       text("Layout: "+Layout,568,100);
     }
    if(gameState==="play"){ 
        var ang = atan2(mouseY - (player.y+cam.y), mouseX - (player.x+cam.x));
        tipX = cos(ang)*LT;
        tipY = sin(ang)*LT;
         
         //bullet actions
        {
        if(Layout=== "Soldier"){
            
            if(slot===1){
                Bdamage=random(13,19);
        if(mouseIsPressed && mouseButton === LEFT){  
            shooting = true;
            if(fireTime < fireCap){fireTime++;}
            else{
                bullets.push(new Bullet(15, ang));
                fireTime = -5;
                Ammo-=1;

            }
        }
    }
    if(slot===2){
        Bdamage = random(7,9);
        if(mouseIsPressed && mouseButton === LEFT){ 
            shooting = true;
            if(fireTime < fireCap){fireTime++;}
            else {  
               
           bullets.push(new Bullet(12, ang));
               fireTime = 0;
          Ammo-=1;
           BurstTime-=1;
 
           }
        }
    }
}
    if(Layout === "Assassin"){

    if(slot===1){
        Bdamage = random(90,110);
       if(mouseIsPressed && mouseButton === LEFT){  
            shooting = true;
            if(fireTime < fireCap){fireTime++;}
            else
            {   
                bullets.push(new Bullet(30, ang));
                fireTime = 0; 
            Ammo-=1;
    }
        }
    }
    }
if(Layout==="Medic"){ 
    Ammo=60;
   if(slot===1){
        if(mouseIsPressed&&mouseButton===LEFT){ 
            shooting = true;
            if(fireTime < fireCap){fireTime++;
            }
             else {
                
            bullets.push(new Bullet(12, ang));
                fireTime = 0;
            Ammo-=1;
            BurstTime-=1;
            
            }
    }
}
}
        }
if(shooting===true){Mov=3;}
if(shooting===false){Mov=5;}
 //ammo booleans
{
     if(BurstTime<=0){
         fireTime=null;
     }
    if(Ammo <=0){
        fireTime = null;
      
    }
    if(Ammo ===0 && Layout === "Soldier"){
        reloadTime++;

        if(reloadTime >= 100){
            Ammo+=40;
            reloadTime=0;
        }  
    }
    if(Ammo===0 && Layout === "Assassin"){
        reloadTime++;
        if(reloadTime >= 200){
            Ammo+=1;
            reloadTime=0;
        }  
    } 
    if(Ammo ===0 && Layout === "Medic"){
        reloadTime++;
        if(reloadTime >= 100){
            Ammo+=40;
            reloadTime=0;
        }  
    }
    if(BurstTime ===0){
        reloadTime++
        if(reloadTime>=30){
            BurstTime=3;
            reloadTime=0;
        }
    } 
}

      text("Kills: "+kills,600,200);
      text("Ammo: "+Ammo,600,250);
        cam.setView(player.x,player.y,1);  

    rounds(); 
        for(var i = 0; i < bullets.length; i++){bullets[i].draw();} 
        //boarders
        {
         line(minMov,minMov,minMov,maxMov);
         line(minMov,minMov,maxMov,minMov);
         line(maxMov,minMov,maxMov,maxMov);
         line(minMov,maxMov,maxMov,maxMov);
        }
 
    //checking to see if dead
if(PHealth <= 0){
    gameState="dead";
    PHDec =0;
}
if(PShield <= 0){
    PSDec =0;
}      

            movements(); 
       
player.draw();

         cam.endView();  
             
         inventory();
 PhealthBar();
console.log(player.y);
console.clear();
 //end of play state
} 
   if(gameState === "loading"){
       textAlign(CENTER)
       rectMode(CENTER);
       noFill();
       fill("green")
       background(158,158,158,fade);
       textSize(50);
text("Loading the game for you!",768,200);
noFill();
loadingTime++;
if(loadingTime >=250){
 fade -= fSpeed;

}

 if(fade <= 0){
     gameState="play";
     fade = 255;
     loadingTime=0;
 }
 noStroke();
 fill(0, 0, 0);
 rect(768,400,240,10);
 fill(158,158,158,fade);
 rect(loadX,400,15,10);
 loadX+=2;
 if(loadX>=899){
     loadX=649;
 }

    }
    if(gameState === "how"){
        var Back = {
            x:50,
            y:50,
            width:50,
            height:25
        }
     drawButton(Back);
    textSize(15);
           text("Back",Back.x+10,Back.y+15);
        textAlign(CENTER);
        textSize(30)
        text("How to play: ",768,100);
        text("WASD to move",768,150);
        text("Left click to shoot",768,200);
        text("Don't get hit by zombies",768,250);
      if(OFFSETtouching(Back)&& mouseIsPressed){
        gameState = "start";
    }
    }
    if(gameState === "dead"){ 
        time=0;
        kills=0;

          background("red");
        var Retry ={
            x:300,
            y:400,
            width:100,
            height:50
        }
        PHealth = 100;
        PHDec = 250;
        PSDec = 250;
        PShield=100;
        for(var i = zombs.length - 1; i >=0; i--){
            zombs.splice(i);
        }
        text("Deceased",350,350);
      //  rectMode(CENTER);
        textAlign(CENTER);
        textSize(30); 
        noFill();     
         rect(Retry.x,Retry.y,Retry.width,Retry.height);
         fill(0);
        text("Retry?",Retry.x,Retry.y+10);
        if(OFFSETtouching(Retry)&&mouseIsPressed){
            gameState = "loading";
        }
    }
    if(gameState === "layout"){
     var Back = {
        x:50,
        y:50,
        width:50,
        height:25
    };
    var Soldier = {
        x:350,
        y:50,
        width:370,
        height:150,
    };
    var Medic = {
        x:350,
        y:250,
        width:370,
        height:150,
    };
    var Assassin = {
        x:350,
        y:450,
        width:370,
        height:150,
    };
     background("white");
        drawButton(Back);
        text("Back",Back.x+10,Back.y+15);
fill("lightgrey");
noStroke();
//soldier
{
   push();
   rotate(-90);
translate(-370,150);
textSize(30);
fill("black");
    text("Soldier",200,200);
 pop();

    
      fill("lightgrey")
      rect(Soldier.x,Soldier.y,Soldier.width,Soldier.height); 
      if(OFFSETtouching(Soldier)&&mouseIsPressed){Layout = "Soldier";Ammo = 50;}
 fill("black");
      text("AK",350,100); 
      noFill();
      stroke("black");
      line(510,200,510,50);
      line(620,200,620,50);
      line(720,130,510,130);
}
noStroke();
//Medic
{
    push();
    rotate(-90);
    translate(-570,150);
    textSize(30);
    fill("black");
    text("Medic",200,200);
    pop();
    fill("lightgrey")
      rect(Medic.x,Medic.y,Medic.width,Medic.height);
      if(OFFSETtouching(Medic)&&mouseIsPressed){Layout = "Medic";}
      fill("black");
      text("Pistol",350,300); 
       noFill();
      stroke("black");
      line(510,400,510,250);
      line(620,400,620,250);
      line(720,330,510,330);
}
noStroke();
//Assassin
{     
    push();
    rotate(-90);
    translate(-780,150);
    textSize(30);
    fill("black");
    text("Assassin",200,200);
    pop();
     fill("lightgrey")
rect(Assassin.x,Assassin.y,Assassin.width,Assassin.height);
 if(OFFSETtouching(Assassin)&&mouseIsPressed){Layout = "Assassin";  Ammo=1;}
fill("black");
text("Sniper",350,500); 
 noFill();
stroke("black");
line(510,600,510,450);
line(620,600,620,450);
line(720,530,510,530);
} 
        if(OFFSETtouching(Back)&&mouseIsPressed){gameState="start";} 
 }
} 
function PhealthBar(){
  //health bar
    {
   
    rectMode(CENTER);
    noStroke();
    fill(55, 184, 63);
    rect(150,740,270,30);
        fill("red");
         rect(150,740,250,20);
    fill("lime");
  if(PHDec <=0){
      fill("red")
  }
 rect(150,740,PHDec,20);  
 textSize(15);
 fill("white");
    text("Health: "+PHealth,30,745);
}
// shield bar
{
    rectMode(CENTER);
    noStroke();
    fill("purple");
    rect(150,700,270,30);
        fill("pink");
         rect(150,700,250,20);
    fill("hotpink");
  if(PSDec <=0){
      PShield = 0;
      fill("pink")
  }
 rect(150,700,PSDec,20);
 textSize(15);
 fill("white");
    text("Shield: "+PShield,30,705);
}
}
function startPg(){  

    background("lightgrey");
    textAlign(CENTER);
    
    textSize(40);
    text("ZombRush",768,100);
   
    var Deploy = {
        x:768,
        y:350,
        width:100,
        height:50
    }
    var How = {
        x:768,
        y:600,
        width:100,
        height:50
    }
    var Customize = {
        x:1000,
        y:475,
        width:100,
        height:50
    }
    var Layout = {
        x:550,
        y:475,
        width:100,
        height:50
    }

    if(CENTEREDtouching(Deploy)){Deploy.width+=5;Deploy.height+=5;}
    if(CENTEREDtouching(Layout)){Layout.width+=5;Layout.height+=5;}
    if(CENTEREDtouching(How)){How.width+=5;How.height+=5;}
    if(CENTEREDtouching(Customize)){Customize.width+=5;Customize.height+=5;}
noStroke();
textAlign(CENTER);
textSize(20);
fill("white");
rectMode(CENTER); 
rect(Deploy.x,Deploy.y,Deploy.width,Deploy.height);
rect(How.x,How.y,How.width,How.height);
rect(Layout.x,Layout.y,Layout.width,Layout.height);
rect(Customize.x,Customize.y,Customize.width,Customize.height);
fill("black");
text("Deploy",Deploy.x,Deploy.y);
text("How",How.x,How.y);
text("Customize",Customize.x,Customize.y);
text("Layout",Layout.x,Layout.y);
if(CENTEREDtouching(Deploy)&& mouseIsPressed){gameState = "loading";}
if(CENTEREDtouching(How)&& mouseIsPressed){gameState = "how";}
if(CENTEREDtouching(Layout)&& mouseIsPressed){gameState = "layout";}
if(CENTEREDtouching(Customize)&& mouseIsPressed){gameState = "customize";}

}
function inventory(){

    rectMode(CENTER);
var slot1 = {
    x:1160,
    y:750,
    width:70,
    height:70
}
var slot2 = {
    x:1233,
    y:750,
    width:70,
    height:70
}
var slot3 = {
    x:1306,
    y:750,
    width:70,
    height:70
}
var slot4 = {
    x:1379,
    y:750,
    width:70,
    height:70
}
var slot5 = {
    x:1452,
    y:750,
    width:70,
    height:70
}
   fill("clear");

{
    if(slot === 1){
      
        slot1.width = 75;
        slot1.height = 75;
    }
    if(slot === 2){
        slot2.width = 75;
        slot2.height = 75;
    }
    if(slot === 3){
        slot3.width = 75;
        slot3.height = 75;
    }
    if(slot === 4){
        slot4.width = 75;
        slot4.height = 75;
    }
    if(slot === 5){
        slot5.width = 75;
        slot5.height = 75;
    }
}
noStroke();
    //first
    rect(slot1.x,slot1.y,slot1.width,slot1.height);
    //second
    rect(slot2.x,slot2.y,slot2.width,slot2.height);
    //third
    rect(slot3.x,slot3.y,slot3.width,slot3.height);
    //fourth
    rect(slot4.x,slot4.y,slot4.width,slot4.height);
//fift4
    rect(slot5.x,slot5.y,slot5.width,slot5.height);
}
function mouseWheel(event){
    if(event.delta === 125){slot+=1;}
    if(event.delta === -125){slot-=1;}
    if(slot === 0){slot = 5;}
    if(slot === 6){slot = 1;}
}
function mouseReleased(){
    shooting = false;
}
function rounds(){
    var ran = random(minMov,maxMov);
    if(roundNum ===1){
        if(time % 100 ===0){
          zombs.push(new BZomb(ran,ran));   
          zombCount+=1;
         }
         //draw the zombs
         for(var i =0; i <zombs.length; i++){
             zombs[i].work();

            } 
            for(var i =0; i <zombs.length; i++){
                zombs[i].collide();
   
               }        

     }
}
