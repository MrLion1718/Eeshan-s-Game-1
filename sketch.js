var mark
var markImg
var mob1, mob2, mob3
var mobImg1, mobImg2, mobImg3
var count=0
// npcs have names, 
var npc1, npc2, npc3, npc4, npc5
var npcImg1, npcImg2, npcImg3, npcImg4, npcImg5
var BackgroundImg
function preload() {
  markImg = loadImage("assets/mark.png")
  bgImg = loadImage("./assets/bg.jpeg")
  npcImg1 = loadImage("assets/npc_1.png")
  npcImg2 = loadImage("assets/npc_2.png")
  npcImg3 = loadImage("assets/npc_3.png")
  npcImg4 = loadImage("assets/npc_4.png")
  npcImg5 = loadImage("assets/npc_5.png")

}

function setup() {


  createCanvas(windowWidth, windowHeight);

  //adding the background image
  bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20)
  bg.addImage(bgImg)
  bg.scale = 1.1


  //creating the player sprite
  player = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
  player.addImage(markImg)
  player.scale = 0.38
  player.debug = true
  player.setCollider("rectangle", 0, 0, 300, 300)


}

function draw() {
  background(0);
  camera.x=player.x
  camera.y=player.y
  createNpc()



  //moving the player up and down and making the game mobile compatible using touches
  if (keyDown("UP_ARROW") || touches.length > 0) {
    player.y = player.y - 10
    player.x = player.x-0
  }
  else if (keyDown("DOWN_ARROW") || touches.length > 0) {
    player.y = player.y + 10
    player.x = player.x-0
  }
  else if (keyDown("LEFT_ARROW")){
    player.x = player.x-10
    player.y = player.y-0
  }
 else if (keyDown("RIGHT_ARROW")){
    player.x = player.x+10
    player.y = player.y-0
  }

  //release bullets and change the image of shooter to shooting position when space is pressed
  /*if(keyWentDown("space")){
   
    
   
  }
  
  //player goes back to original standing image once we stop pressing the space bar
  else if(keyWentUp("space")){
    player.addImage(shooterImg)
  }*/

  drawSprites();

}
function createNpc(){
  if(count==0){
  
  count=count+5 
  var x1=Math.round(random(camera.x-1000,camera.x+1200))
  var y1=Math.round(random(camera.y-1000,camera.y+1200))
  var npc1=createSprite(x1,y1,10,20)
  npc1.addImage("npc1",npcImg1)
  npc1.scale=0.13

  var x2=x1+500
  var y2=y1+600
  var npc2=createSprite(x2,y2,10,20)
  npc2.addImage("npc2",npcImg2)
  npc2.scale=0.13

  var x3=x2+100
  var y3=y2-500
  var npc3=createSprite(x3,y3,10,20)
  npc3.addImage("npc3",npcImg3)
  npc3.scale=0.3

  var x4=x3+700
  var y4=y3+200
  var npc4=createSprite(x4,y4,10,20)
  npc4.addImage("npc4",npcImg4)
  npc4.scale=0.3

  var x5=x4+700
  var y5=y4+300
  var npc5=createSprite(x5,y5,10,20)
  npc5.addImage("npc5",npcImg5)
  npc5.scale=0.15
  if(player.isTouching(npc1)&&keyDown("SPACE")){
    npc1Dialog()
  }



  }

}
function npc1Dialog() {
  swal({
    title: "welcome Mark,",
    text: "welcome to the lost city of _____________ ",
    imageUrl:
      "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
    imageSize: "100x100",
    confirmButtonText: "Ok"
  });
} 
