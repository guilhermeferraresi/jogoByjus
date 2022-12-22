var bola
var bomba
var img_bola
var img_bomba
var goleiro
var img_fundo
var gameState = 0

function preload(){
  img_fundo = loadImage('imagens/imagemcampo.jpg')
  img_bola = loadImage('imagens/IMGbola.png')
  img_bomba = loadImage('imagens/IMGbomba.png')
}

function setup(){
  createCanvas(1050,550)
  goleiro = createSprite(850,275,20,75)
  goleiro.shapeColor = 'red'
}

function draw(){
  background(img_fundo)

  if(keyDown(UP_ARROW)){
    goleiro.position.y -=5
  }
  if(keyDown(DOWN_ARROW)){
    goleiro.position.y += 5
  }

  
  if(gameState===0 && frameCount % 30 ===0){
    bola = createSprite(0,random(60,490),40,40);
    bola.scale = 0.08
    bola.addImage('bola',img_bola)
    bola.velocityX = 6;
  } 
  if(gameState===0 && frameCount % 135 ===0){
    bomba = createSprite(0,random(60,490),40,40);
    bomba.scale = 0.08
    bomba.addImage('bomba',img_bomba)
    bomba.velocityX = 6;
  } 
  
  if(bomba.isTouching(goleiro)){
    gameState += 1
    text('Fim de jogo', 490,200)
    bomba.destroy()
  }


  drawSprites();
}


