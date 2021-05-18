var ground_i, stickmanA, cage_i, friendA, brother_i, boss_i, boss2_i, firecharge_i
var bullet_i, darkbg_i
var ground, stickman, invisibleground, cage, friend, brother, friendgun, stickmangun
var boss, boss2, firecharge, bullet, darkbg
var scoreS = 5
var scoreB = 5
var destroy=1;

function preload() {
  ground_i = loadImage("images/ground2.png")
  stickmanA = loadAnimation("images/Stickman1.png", "images/Stickman2.png", "images/Stickman3.png", "images/Stickman4.png", "images/Stickman5.png", "images/Stickman6.png", "images/Stickman7.png" )
  cage_i = loadImage("images/cage.png")
  friendA = loadAnimation("images/friend1.png", "images/friend2.png", "images/friend3.png", "images/friend4.png", "images/friend5.png", "images/friend6.png", "images/friend7.png")
  brother_i = loadImage("images/brother.png")
  //NStickman1 = loadAnimation("images/Stickman1.png")
  //NFriend = loadImage("images/friend1.png")
  friendgun = loadImage("images/friendgun.png")
  stickmangun = loadImage("images/Stickmangun.png")
  boss_i = loadImage("images/boss.png")
  boss2_i = loadImage("images/boss2.png")
  firecharge_i = loadImage("images/firecharge.png")
  bullet_i = loadImage("images/bullet.png")
  //darkbg_i = loadImage("images/darkbackground.png")
}


function setup() {
  createCanvas(1520, 500)
 

  bullet = createSprite(500, 300, 10, 10)
  bullet.scale = 0.2
  bullet.addImage(bullet_i)
  bullet.visible=false
  

  ground = createSprite(710, 450)
  ground.addImage("ground", ground_i)
  ground.scale = 1.5
  ground.velocityX = -5

  stickman = createSprite(400, 370)
  stickman.scale = 0.9
  stickman.addAnimation("Standing", stickmangun)
  stickman.addAnimation("running", stickmanA)

  brother = createSprite(1320, 370)
  brother.scale = 0.8
  brother.addImage(brother_i)
  brother.visible = false

  invisibleground = createSprite(1015, 550, 2030, 10)
  invisibleground.visible = false

  cage = createSprite(1400, 340)
  cage.addImage("cage", cage_i)
  cage.scale = 0.5
  cage.visible = false

  friend = createSprite(300, 370)
  friend.scale = 0.9
  friend.addAnimation("running", friendA)
  friend.addAnimation("Standing", friendgun)

  boss = createSprite(1100, 250)
  boss.addImage("Standing", boss_i)
  boss.visible = false

  firecharge = createSprite(1050, 300)
  firecharge.scale = 0.4
  firecharge.addImage(firecharge_i)
  firecharge.visible = false

  




  

}

function draw() {
  background("white")

  //firecharge.debug = true
  //bullet.debug = true

  if(ground.x < 100) {
    ground.x = ground.width/2
  }

  if(frameCount > 100) {
    cage.visible = true
    brother.visible = true
    ground.velocityX = 0
    stickman.changeAnimation("Standing", stickmangun)
    friend.changeAnimation("Standing", friendgun)
    boss.visible = true
    bullet.lifetime=5;
    if(keyDown("space")){
     if(destroy===0 || bullet.lifetime===0)
     {
      bullet = createSprite(500, 300, 10, 10)
      bullet.scale = 0.2
      bullet.addImage(bullet_i)
      //bullet.visible=false
     }
      bullet.velocityX = 4
      bullet.visible = true
      bullet.setCollider("circle", 10, 0, 100)
    }

    if(frameCount%100 === 0){
      firecharge.velocityX = -4
      firecharge.visible = true
    }
    if(bullet.isTouching(boss))
    {
      
    }
    if(firecharge.isTouching(bullet)){
      bullet.destroy();
      destroy=0;
      firecharge.destroy()
    }

  }
  else{
    stickman.changeAnimation("running", stickmanA)
    friend.changeAnimation("running", stickmanA)
  }

  fill("black")
  textSize(30)
  text("Stickman Life: " + scoreS, 100, 100)

  fill(0)
  textSize(30)
  text("Demon Life:" + scoreB, 1300, 100)

  

  drawSprites()
  //console.log(frameCount)

}