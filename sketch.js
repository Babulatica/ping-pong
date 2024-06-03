// variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

// velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let colidiu = false;

// variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente = 6; // Defina uma velocidade inicial

//variáveis do placar
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(x, y) {
  let distanciaX = abs(xBolinha - (x + raqueteComprimento / 2));
  let distanciaY = abs(yBolinha - (y + raqueteAltura / 2));

  if (distanciaX < raio + raqueteComprimento / 2 && distanciaY < raio + raqueteAltura / 2) {
    velocidadeXBolinha *= -1;
  }
}

 function movimentaRaqueteOponente() {
// O movimento do oponente deve ser baseado na posição da bola
  if (yRaqueteOponente + raqueteAltura / 2 < yBolinha - raio) {
    yRaqueteOponente += velocidadeYOponente;
  } else if (yRaqueteOponente + raqueteAltura / 2 > yBolinha + raio) {
    yRaqueteOponente -= velocidadeYOponente;
  }
 }

function incluiPlacar() {
   fill(255);
   text(meusPontos, 278, 26);
   text(pontosDoOponente, 321, 26);
}

function marcaPonto(){
  if (xBolinha > 590 ) {
   meusPOntos += 1 ;
  }
  if ( xBolinha < 10 ) {
    pontosDoOponente += 1;
  }
} 
