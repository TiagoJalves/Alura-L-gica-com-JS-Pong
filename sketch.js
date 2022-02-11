//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//Variáveis da velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//Variáveis da raquete
let xRaquete = 5 ;
let yRaquete = 150;
let comprimentoRaquete = 8;
let alturaRaquete = 80; 

let colidiu = false;

//Variáveis da raquete oponente

let xRaqueteoponente = 585
let yRaqueteoponente = 150
let velocidadeYoponente; 

//Placar do jogo

let meusPontos = 0;
let pontosOponente = 0;

// Sons do Jogo

//let raquetada;
//let ponto;
//let trilha


function preload(){
 trilha = loadSound("trilha.mp3");
 ponto = loadSound("ponto.mp3");
 raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  velocidadeBolinha();
  verificaColisao();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteoponente, yRaqueteoponente);
  movimentaRaquete();
  //verificaColisaoR();
  verificaColisaoraquete(xRaquete, yRaquete);
  verificaColisaoraquete(xRaqueteoponente, yRaqueteoponente);
  movimentaRaqueteoponente();
  incluiPlacar();
  marcaPonto();
  

}

function mostraBolinha(){
circle(xBolinha, yBolinha, diametro);  
}

function velocidadeBolinha(){
   xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha; 
  
}

function verificaColisao(){
  
  if (xBolinha + raio > width || xBolinha - raio < 0){
   velocidadexBolinha *= -1;
}
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeyBolinha *= -1
    
  }
}

function mostraRaquete(x,y) {
  
  rect(x, y, comprimentoRaquete, alturaRaquete)
}

function movimentaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -=10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
  }
}

function verificaColisaoR(){
  if(xBolinha - raio < xRaquete + comprimentoRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoraquete(x,y){
  colidiu =
collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio)
  if (colidiu){
    velocidadexBolinha *= -1
    raquetada.play();
    
  }
}

function movimentaRaqueteoponente(){
  
  velocidadeYoponente = yBolinha - yRaqueteoponente - comprimentoRaquete / 2 - 30;
  yRaqueteoponente += velocidadeYoponente
}

function incluiPlacar(){
  stroke(255);
  textSize(18);
  textAlign(CENTER);
  fill(color(255,140,0));
  rect(150,10,40,20 );
  fill(255);
  text(meusPontos,170,26);
  fill(color(255,140,0));
  rect(450,10,40,20 );
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1
    ponto.play();
  }
  if(xBolinha < 10){
    pontosOponente += 1
    ponto.play();
  }
}

