var bola
var bomba
var img_bola
var img_bomba
var img_explosao
var goleiro
var img_fundo
var gameState = 0
var pontuacao = 0
var golTomado = 0
var golInvisivel

function preload(){
  img_fundo = loadImage('imagens/imagemcampo.jpg')
  img_bola = loadImage('imagens/IMGbola.png')
  img_bomba = loadImage('imagens/IMGbomba.png')
  img_explosao = loadImage('imagens/IMGexplosao.png')
  bolaGrupo = new Group();
  bombaGrupo = new Group();
}

function setup(){
  createCanvas(1050,550)
  goleiro = createSprite(850,275,20,75)
  goleiro.shapeColor = 'red'
  golInvisivel = createSprite(1070,275,50,450)
  golInvisivel.shapeColor = 'blue'
  golInvisivel.visible = false;
}

function draw(){
  background(img_fundo)

  if(keyDown(UP_ARROW)){
    goleiro.position.y -=7
  }
  if(keyDown(DOWN_ARROW)){
    goleiro.position.y += 7
  }

  
  if(gameState===0 && frameCount % 30 ===0){
    bola = createSprite(0,random(60,490),40,40);
    bola.scale = 0.08
    bola.addImage('bola',img_bola)
    bola.velocityX = 6;
    bolaGrupo.add(bola);
  } 
  if(gameState===0 && frameCount % 135 ===0){
    bomba = createSprite(0,random(60,490),40,40);
    bomba.scale = 0.1
    bomba.addImage('bomba',img_bomba)
    bomba.velocityX = 6;
    bombaGrupo.add(bomba);
  } 
  
  if(bolaGrupo.isTouching(goleiro)){
    for(var i=0;i<bolaGrupo.length;i++){     
      if(bolaGrupo[i].isTouching(goleiro)){
       bolaGrupo[i].destroy()
       pontuacao += 1;  
      } 
      
    }
    
  }
 
  if(bombaGrupo.isTouching(goleiro)){
    gameState += 1 
    fill("blue")
    textSize(50) 
    text('Fim de jogo', 430,200)
    bolaGrupo.destroy();
    bombaGrupo.destroy();
  }

  if(pontuacao===20){
    textSize(50)
    fill("blue")
    text("Parabéns, você ganhou!", 330,200)
    gameState += 1
    bolaGrupo.destroy();
    bombaGrupo.destroy();
  }
    
  if(bolaGrupo.isTouching(golInvisivel)){
    for(var i=0;i<bolaGrupo.length;i++){     
      if(bolaGrupo[i].isTouching(golInvisivel)){
       bolaGrupo[i].destroy()
       golTomado += 1;  
      } 
      
    }
    
  }

  if(golTomado===5){
    fill("blue")
    textSize(50) 
    text('Fim de jogo', 430,200)
    gameState += 1
    bolaGrupo.destroy();
    bombaGrupo.destroy();
  }

  textSize(30)
  fill("black")
  text("Gols Tomados: "+golTomado, 800,30)
  
  textSize(30)
  fill("black")
  text('Pontuação: '+pontuacao,50,30)

  

  drawSprites();
}


