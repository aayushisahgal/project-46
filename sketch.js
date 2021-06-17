var background, backgroundIm, player1, player1Ani, player1st, player1ju, player2, player2Im, airship, airshipIm,
fire, fireAni, pendullum1, pendullumIm;
var ball1, ball2, ball3, imposter, imposterIm, life1,life2,life3,life4,life5, lifeIm, track, trackIm, ballIm, fireOb;
var bullet1,bullet2,bullet3,bullet4,bullet5,eye;
//var plank1,plank2,plank3;


function preload() {
  player1Ani = loadAnimation( 'images/mrunning1.png', 'images/mrunning2.png', 'images/mrunning3.png');
  player1st = loadAnimation('images/mariostanding.png');
  player1ju = loadAnimation('images/mjumping.png');

  airshipIm = loadImage('images/airship.png');
  fireAni = loadAnimation('images/f1.png','images/f2.png');

  backgroundIm = loadImage('images/bg.jpg');
  trackIm = loadImage('images/t.png');

    pendullumIm=loadAnimation('images/b1.png','images/b2.png','images/b3.png')

  ballIm = loadAnimation('images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png');

  imposterIm = loadAnimation('images/impo1.png','images/impo3.png');

  lifeIm = loadAnimation('images/star1.png','images/star2.gif','images/star3.png','images/star4.png');


}

function setup() {
  createCanvas(windowWidth, windowHeight);




  track = createSprite(displayWidth / 2, displayHeight / 2 - 50);
  track.addImage(trackIm);
  track.scale = 3.8
 
 
  

  player1 = createSprite(170, 300);
  player1.addAnimation('mario standing', player1st);
  player1.addAnimation('mario running', player1Ani);
  player1.addAnimation('mario jumping', player1ju);
  player1.scale = 0.6
  player1.velocityX = 0;

  //bullets=createSprite


/* for (var i = 150; i < 600; i = i + 70) {
    var bullets = createSprite(900, i, 20, 20);
    bullets.shapeColor = rgb(i, i + 50, i + 5);
    bullets.velocityX = -i / 20
    // bullets(rgb(randomNumber(0,255),100,180));
  }*/

  bullet1 = createSprite(1000, 170, 20, 20);
  bullet1.shapeColor=rgb(100, 100 + 50, 20 + 5);
  bullet1.velocityX=-14;
  bullet1.velocityY=-6;

  bullet2 = createSprite(1000, 270, 20, 20);
  bullet2.shapeColor=('pink');
  bullet2.velocityX=-30;
  bullet2.velocityY=0;


  bullet3 = createSprite(1000, 370, 20, 20);
  bullet3.shapeColor=('cyan');
  bullet3.velocityX=-20;
  bullet3.velocityY=1;


  bullet4 = createSprite(1000, 470, 20, 20);
  bullet4.shapeColor=('lime');
  bullet4.velocityX=-25;
  bullet4.velocityY=-3;

  bullet5 = createSprite(1000, 570, 20, 20);
  bullet5.shapeColor=('magenta');
  bullet5.velocityX=-4;
  bullet5.velocityY=-5;

  airship = createSprite(1000, 490);
  airship.addImage(airshipIm);
  airship.scale = 1.8
  airship.velocityY = -7;

  
  fire = createSprite(2700,track.y,10,40);
  fire.addAnimation('fi',fireAni);
  fire.scale=1.56

  life1 =createSprite(1900,track.y);
  life1.addAnimation('life1',lifeIm);
  life1.scale=0.7

  pendullum1 = createSprite(4400,track.y+340,10,40);
  pendullum1.addAnimation('pen',pendullumIm);
  pendullum1.scale=1;
  pendullum1.velocityY=-10

  pendullum2 = createSprite(4600,track.y-340,10,40);
  pendullum2.addAnimation('pen2',pendullumIm);
  pendullum2.scale=1;
  pendullum2.velocityY=10

  ball1=createSprite(6000,track.y,10,40);
  ball1.addAnimation('ball1',ballIm);
  ball1.scale=  2.5
 // ball1.velocityX=2;
  //ball1.velocityX=-2;
 // ball1.velocityY=2;
 // ball1.velocityY=-3;

 
  //var life2 =createSprite(2450,track.y);
 // life2.addImage('life2',lifeIm);

 imposter=createSprite(7700,track.y,10,10);
 imposter.addAnimation('imp',imposterIm);

 eye=circle(7700,track.y,20);

 player1.setCollider("rectangle",0,0,player1.width,player1.height-20);
 player1.debug = true

 

}

function draw() {
  camera.position.x = player1.x
  camera.position.y = windowHeight / 2

 

 // player1.collide(track);

  background(backgroundIm);
  //image(trackIm, 0,100,displayWidth*5, displayHeight-300);

  if (track.x < 0) {
    track.x = displayWidth / 2
  }

  if (airship.y < -450) {
    airship.y = 900
  }

 

   if(bullet2.x < -590 ){
   bullet2.x = 1000
   }

   if(bullet1.x < -590 ){
    bullet1.x = 1000
    } 
    
    if(bullet3.x < -590 ){
      bullet3.x = 1000
      }
      
    if(bullet4.x < -590 ){
        bullet4.x = 1000
        }
        
    if(bullet5.x < -590 ){
       bullet5.x = 1000
      }

    if(bullet1.y < -590 ){
     bullet1.y = 900
        } 
            
    if(bullet3.y < -590 ){
      bullet3.y = 900
    }
              
     if(bullet4.y < -590 ){
     bullet4.y = 900
       }
                
      if(bullet5.y < -590 ){
        bullet5.y = 900
      }

   if (keyDown(UP_ARROW)) {
     player1.y -= 10
      
   }

  if (keyDown(DOWN_ARROW)) {
     player1.y += 10

     }

  if (keyDown(RIGHT_ARROW)) {
  player1.x += 100
  player1.changeAnimation('mario running', player1Ani);
  track.velocityX = -2
  }

  if (keyDown(LEFT_ARROW)) {
    player1.x -= 15
    player1.changeAnimation('mario running', player1Ani);
  }
    
    

     if(keyDown("space")&& player1.y >= 300) {
      player1.velocityY = -12;
      player1.changeAnimation('mario jumping', player1ju);
  }

  if (pendullum1.y< -300) {
    pendullum1.y = track.y+360
  }

  
  if (pendullum2.y > 790) {
    pendullum2.y = track.y-360
  }

 // player1.velocityY = player1.velocityY + 0.8


  drawSprites();
}









    // if(player istouching fire)---> if heartscore > 0 heartscore -1 ----> else player.x = 200