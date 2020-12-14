let aluno;
let animais;
let animal = [];
var q = 1;
var acerto = 0;
var vida = 3;
var soma = acerto;
let actualAnimal = Math.floor(Math.random() * 17) + 1;
function preload() {
  animais = loadImage("images/animais4.jpg");
  aluno = loadImage("images/gabriel.jpg");
  animal[0] = loadImage("images/mamiferos/baleia.jpg");
  animal[1] = loadImage("images/mamiferos/cachorro.jpg");
  animal[2] = loadImage("images/mamiferos/elefante.jpg");
  animal[3] = loadImage("images/mamiferos/girafa.jpg");
  animal[4] = loadImage("images/mamiferos/urso.jpg");
  animal[5] = loadImage("images/anfibios/cobracega.png");
  animal[6] = loadImage("images/anfibios/sapo.jpg");
  animal[7] = loadImage("images/anfibios/salamandra.png");
  animal[8] = loadImage("images/aves/avestruz.jpg");
  animal[9] = loadImage("images/aves/tucano.jpg");
  animal[10] = loadImage("images/aves/pavao.jpg");
  animal[11] = loadImage("images/aves/pinguim.jpg");
  animal[12] = loadImage("images/aves/aguia.jpg");
  animal[13] = loadImage("images/repteis/naja.jpg");
  animal[14] = loadImage("images/repteis/camaleao.jpg");
  animal[15] = loadImage("images/repteis/crocodilo.jpg");
  animal[16] = loadImage("images/repteis/komodo.jpg");
  animal[17] = loadImage("images/repteis/jabuti.jpg");
}
var op;
var numanimal = 1;
var tela = 1;
var largura = 240;
var altura = 70;
var xMenu = 80;
var yMenu = 50;
var yMenu1 = 150;
var yMenu2 = 250;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  textStyle(NORMAL);
  if (tela == 1) {
    background(animais);
    textAlign(CENTER);
    textFont("Georgia");
    textSize(40);
    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yMenu &&
      mouseY < yMenu + altura
    ) {
      stroke(220);
      fill(100);
      rect(xMenu, yMenu, largura, altura);
      if (mouseIsPressed) {
        tela = 2;
      }
    }

    fill(20);
    stroke(200, 200, 0);
    text("Iniciar", 200, 100);
    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yMenu1 &&
      mouseY < yMenu1 + altura
    ) {
      stroke(220);
      fill(100);
      rect(xMenu, yMenu1, largura, altura);
      if (mouseIsPressed) {
        tela = 3;
      }
    }
    fill(20);
    stroke(200, 200, 0);
    text("Informações", 200, 200);
    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > yMenu2 &&
      mouseY < yMenu2 + altura
    ) {
      stroke(200);
      fill(100);
      rect(xMenu, yMenu2, largura, altura);
      if (mouseIsPressed) {
        tela = 4;
      }
    }

    stroke(200, 200, 0);
    fill(20);
    text("creditos", 200, 300);
  } else if (tela == 2) {
    background(animais);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    fill(100, 30, 0);
    stroke(10, 100, 210);
    text("Escolha a opção correta para cada animal", 200, 50);
    image(animal[0],150,150,100,100)
       text("Mamifero",60, 340)
     if(mouseX>40 && mouseX<40+70 && mouseY>320 && mouseY<320+30){
       rect(10,315,100,30)
     if(mouseIsPressed){
       tela=5
       acerto=1
     }}
  text("Anfibio",170, 340)
           if(mouseX>140 && mouseX<140+70 && mouseY>320 && mouseY<320+30){
       rect(120,315,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Reptil",260, 340)
       if(mouseX>220 && mouseX<220+70 && mouseY>320 &&mouseY<320+30){
       rect(220,315,80,30)
       if(mouseIsPressed){
         tela=20;}
       }
    text("Ave",350, 340)
       if(mouseX>300 && mouseX<300+70 && mouseY>320 &&mouseY<320+30){
       rect(320,315,60,30)
       if(mouseIsPressed){
         tela=20;}
       }

    text("acertos " + acerto, 200, 100);
    fill(10);
   

  } 
  else if(tela==5){
    
background(animais);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    fill(100, 30, 0);
    stroke(10, 100, 210);
    text("Escolha a opção correta para cada animal", 200, 50);
    image(animal[6],150,150,100,100)
       text("Mamifero",60, 300)
     if(mouseX>40 && mouseX<40+70 && mouseY>280 &&     mouseY<280+30){
       rect(10,280,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Anfibio",170, 300)
           if(mouseX>140 && mouseX<140+70 && mouseY>280 &&     mouseY<280+30){
       rect(120,280,100,30)
     if(mouseIsPressed){
       tela=6
       acerto=2
     }}
  text("Reptil",260, 300)
       if(mouseX>220 && mouseX<220+70 && mouseY>280 &&     mouseY<280+30){
       rect(220,280,80,30)
       if(mouseIsPressed){
         tela=20;}
       }
    text("Ave",350, 300)
       if(mouseX>300 && mouseX<300+70 && mouseY>280 &&     mouseY<280+30){
       rect(320,280,60,30)
       if(mouseIsPressed){
         tela=20;}
       }

    text("acertos " + acerto, 200, 100);
    fill(10);
   

  } 
 else if(tela==6){
   background(animais);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    fill(100, 30, 0);
    stroke(10, 100, 210);
    text("Escolha a opção correta para cada animal", 200, 50);
    image(animal[15],150,150,100,100)
       text("Mamifero",60, 340)
     if(mouseX>40 && mouseX<40+70 && mouseY>320 && mouseY<320+30){
       rect(10,315,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Anfibio",170, 340)
           if(mouseX>140 && mouseX<140+70 && mouseY>320 && mouseY<320+30){
       rect(120,315,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Reptil",260, 340)
       if(mouseX>220 && mouseX<220+70 && mouseY>320 &&mouseY<320+30){
       rect(220,315,80,30)
       if(mouseIsPressed){
         tela=7;
         acerto=3
       }
       }
    text("Ave",350, 340)
       if(mouseX>300 && mouseX<300+70 && mouseY>320 &&mouseY<320+30){
       rect(320,315,60,30)
       if(mouseIsPressed){
         tela=20;}
       }

    text("acertos " + acerto, 200, 100);
    fill(10);
   

 } 
  else if(tela==7){
    background(animais);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    fill(100, 30, 0);
    stroke(10, 100, 210);
    text("Escolha a opção correta para cada animal", 200, 50);
    image(animal[11],150,150,100,100)
       text("Mamifero",60, 300)
     if(mouseX>40 && mouseX<40+70 && mouseY>280 &&     mouseY<280+30){
       rect(10,280,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Anfibio",170, 300)
           if(mouseX>140 && mouseX<140+70 && mouseY>280 &&     mouseY<280+30){
       rect(120,280,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Reptil",260, 300)
       if(mouseX>220 && mouseX<220+70 && mouseY>280 &&     mouseY<280+30){
       rect(220,280,80,30)
       if(mouseIsPressed){
         tela=20;}
       }
    text("Ave",350, 300)
       if(mouseX>300 && mouseX<300+70 && mouseY>280 &&     mouseY<280+30){
       rect(320,280,60,30)
       if(mouseIsPressed){
         tela=8;
       acerto=4
       }
       }

    text("acertos " + acerto, 200, 100);
    fill(10);
   
  }
  else if(tela==8){
       background(animais);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    fill(100, 30, 0);
    stroke(10, 100, 210);
    text("Escolha a opção correta para cada animal", 200, 50);
    image(animal[2],150,150,100,100)
       text("Mamifero",60, 340)
     if(mouseX>40 && mouseX<40+70 && mouseY>320 && mouseY<320+30){
       rect(10,315,100,30)
     if(mouseIsPressed){
       tela=9
       acerto=5
     }}
  text("Anfibio",170, 340)
           if(mouseX>140 && mouseX<140+70 && mouseY>320 && mouseY<320+30){
       rect(120,315,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Reptil",260, 340)
       if(mouseX>220 && mouseX<220+70 && mouseY>320 &&mouseY<320+30){
       rect(220,315,80,30)
       if(mouseIsPressed){
         tela=20;}
       }
    text("Ave",350, 340)
       if(mouseX>300 && mouseX<300+70 && mouseY>320 &&mouseY<320+30){
       rect(320,315,60,30)
       if(mouseIsPressed){
         tela=20;}
       }

    text("acertos " + acerto, 200, 100);
    fill(10);
   
  }
   else if(tela==9){
         background(animais);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    fill(100, 30, 0);
    stroke(10, 100, 210);
    text("Escolha a opção correta para cada animal", 200, 50);
    image(animal[7],150,150,100,100)
       text("Mamifero",60, 300)
     if(mouseX>40 && mouseX<40+70 && mouseY>280 &&     mouseY<280+30){
       rect(10,280,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Anfibio",170, 300)
           if(mouseX>140 && mouseX<140+70 && mouseY>280 &&     mouseY<280+30){
       rect(120,280,100,30)
     if(mouseIsPressed){
       tela=10
       acerto=6
     }}
  text("Reptil",260, 300)
       if(mouseX>220 && mouseX<220+70 && mouseY>280 &&     mouseY<280+30){
       rect(220,280,80,30)
       if(mouseIsPressed){
         tela=20;}
       }
    text("Ave",350, 300)
       if(mouseX>300 && mouseX<300+70 && mouseY>280 &&     mouseY<280+30){
       rect(320,280,60,30)
       if(mouseIsPressed){
         tela=20;}
       }

    text("acertos " + acerto, 200, 100);
    fill(10);
   
   } 
  else if(tela==10){
           background(animais);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    fill(100, 30, 0);
    stroke(10, 100, 210);
    text("Escolha a opção correta para cada animal", 200, 50);
    image(animal[12],150,150,100,100)
       text("Mamifero",60, 340)
     if(mouseX>40 && mouseX<40+70 && mouseY>320 && mouseY<320+30){
       rect(10,315,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Anfibio",170, 340)
           if(mouseX>140 && mouseX<140+70 && mouseY>320 && mouseY<320+30){
       rect(120,315,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Reptil",260, 340)
       if(mouseX>220 && mouseX<220+70 && mouseY>320 &&mouseY<320+30){
       rect(220,315,80,30)
       if(mouseIsPressed){
         tela=20;}
       }
    text("Ave",350, 340)
       if(mouseX>300 && mouseX<300+70 && mouseY>320 &&mouseY<320+30){
       rect(320,315,60,30)
       if(mouseIsPressed){
         tela=11;
       acerto=7
       }
       }

    text("acertos " + acerto, 200, 100);
    fill(10);
   
  }
  else if(tela==11){
             background(animais);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    fill(100, 30, 0);
    stroke(10, 100, 210);
    text("Escolha a opção correta para cada animal", 200, 50);
    image(animal[17],150,150,100,100)
       text("Mamifero",60, 300)
     if(mouseX>40 && mouseX<40+70 && mouseY>280 &&     mouseY<280+30){
       rect(10,280,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Anfibio",170, 300)
           if(mouseX>140 && mouseX<140+70 && mouseY>280 &&     mouseY<280+30){
       rect(120,280,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Reptil",260, 300)
       if(mouseX>220 && mouseX<220+70 && mouseY>280 &&     mouseY<280+30){
       rect(220,280,80,30)
       if(mouseIsPressed){
         tela=12;
       acerto=8
       }
       }
    text("Ave",350, 300)
       if(mouseX>300 && mouseX<300+70 && mouseY>280 &&     mouseY<280+30){
       rect(320,280,60,30)
       if(mouseIsPressed){
         tela=20;}
       }

    text("acertos " + acerto, 200, 100);
    fill(10);
   
  }
  else if(tela==12){
               background(animais);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    fill(100, 30, 0);
    stroke(10, 100, 210);
    text("Escolha a opção correta para cada animal", 200, 50);
    image(animal[1],150,150,100,100)
       text("Mamifero",60, 340)
     if(mouseX>40 && mouseX<40+70 && mouseY>320 && mouseY<320+30){
       rect(10,315,100,30)
     if(mouseIsPressed){
       tela=13
       acerto=9
     }}
  text("Anfibio",170, 340)
           if(mouseX>140 && mouseX<140+70 && mouseY>320 && mouseY<320+30){
       rect(120,315,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Reptil",260, 340)
       if(mouseX>220 && mouseX<220+70 && mouseY>320 &&mouseY<320+30){
       rect(220,315,80,30)
       if(mouseIsPressed){
         tela=20;}
       }
    text("Ave",350, 340)
       if(mouseX>300 && mouseX<300+70 && mouseY>320 &&mouseY<320+30){
       rect(320,315,60,30)
       if(mouseIsPressed){
         tela=20;}
       }

    text("acertos " + acerto, 200, 100);
    fill(10);
   
  }
  else if(tela==13){
                 background(animais);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    fill(100, 30, 0);
    stroke(10, 100, 210);
    text("Escolha a opção correta para cada animal", 200, 50);
    image(animal[9],150,150,100,100)
       text("Mamifero",60, 300)
     if(mouseX>40 && mouseX<40+70 && mouseY>280 &&     mouseY<280+30){
       rect(10,280,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Anfibio",170, 300)
           if(mouseX>140 && mouseX<140+70 && mouseY>280 &&     mouseY<280+30){
       rect(120,280,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Reptil",260, 300)
       if(mouseX>220 && mouseX<220+70 && mouseY>280 &&     mouseY<280+30){
       rect(220,280,80,30)
       if(mouseIsPressed){
         tela=20;}
       }
    text("Ave",350, 300)
       if(mouseX>300 && mouseX<300+70 && mouseY>280 &&     mouseY<280+30){
       rect(320,280,60,30)
       if(mouseIsPressed){
         tela=14;
       acerto=10
       }
       }

    text("acertos " + acerto, 200, 100);
    fill(10);
   
  }
  else if(tela==14){
                   background(animais);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    fill(100, 30, 0);
    stroke(10, 100, 210);
    text("Escolha a opção correta para cada animal", 200, 50);
    image(animal[10],150,150,100,100)
       text("Mamifero",60, 340)
     if(mouseX>40 && mouseX<40+70 && mouseY>320 && mouseY<320+30){
       rect(10,315,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Anfibio",170, 340)
           if(mouseX>140 && mouseX<140+70 && mouseY>320 && mouseY<320+30){
       rect(120,315,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Reptil",260, 340)
       if(mouseX>220 && mouseX<220+70 && mouseY>320 &&mouseY<320+30){
       rect(220,315,80,30)
       if(mouseIsPressed){
         tela=20;}
       }
    text("Ave",350, 340)
       if(mouseX>300 && mouseX<300+70 && mouseY>320 &&mouseY<320+30){
       rect(320,315,60,30)
       if(mouseIsPressed){
         tela=15;
       acerto=11
       }
       }

    text("acertos " + acerto, 200, 100);
    fill(10);
   
  }
  else if(tela==15){
                     background(animais);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    fill(100, 30, 0);
    stroke(10, 100, 210);
    text("Escolha a opção correta para cada animal", 200, 50);
    image(animal[14],150,150,100,100)
       text("Mamifero",60, 300)
     if(mouseX>40 && mouseX<40+70 && mouseY>280 &&     mouseY<280+30){
       rect(10,280,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Anfibio",170, 300)
           if(mouseX>140 && mouseX<140+70 && mouseY>280 &&     mouseY<280+30){
       rect(120,280,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Reptil",260, 300)
       if(mouseX>220 && mouseX<220+70 && mouseY>280 &&     mouseY<280+30){
       rect(220,280,80,30)
       if(mouseIsPressed){
         tela=16;
       acerto=12
       }
       }
    text("Ave",350, 300)
       if(mouseX>300 && mouseX<300+70 && mouseY>280 &&     mouseY<280+30){
       rect(320,280,60,30)
       if(mouseIsPressed){
         tela=20;}
       }

    text("acertos " + acerto, 200, 100);
    fill(10);
   
  }
  else if(tela==16){
                       background(animais);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    fill(100, 30, 0);
    stroke(10, 100, 210);
    text("Escolha a opção correta para cada animal", 200, 50);
    image(animal[3],150,150,100,100)
       text("Mamifero",60, 340)
     if(mouseX>40 && mouseX<40+70 && mouseY>320 && mouseY<320+30){
       rect(10,315,100,30)
     if(mouseIsPressed){
       tela=17
       acerto=13
     }}
  text("Anfibio",170, 340)
           if(mouseX>140 && mouseX<140+70 && mouseY>320 && mouseY<320+30){
       rect(120,315,100,30)
     if(mouseIsPressed){
       tela=20
     }}
  text("Reptil",260, 340)
       if(mouseX>220 && mouseX<220+70 && mouseY>320 &&mouseY<320+30){
       rect(220,315,80,30)
       if(mouseIsPressed){
         tela=20;}
       }
    text("Ave",350, 340)
       if(mouseX>300 && mouseX<300+70 && mouseY>320 &&mouseY<320+30){
       rect(320,315,60,30)
       if(mouseIsPressed){
         tela=20;}
       }

    text("acertos " + acerto, 200, 100);
    
  }
  else if(tela==17){
    acerto=0
    background(animais);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    fill(100, 30, 0);
    stroke(10, 100, 210);
    text("Você Venceu!!!", 200, 150);
    text("Voltar", 320, 380);
            if(mouseX>280 && mouseX<280+100 && mouseY>360 && mouseY< 360+30)   {
        rect(280,360,100,30)
            if(mouseIsPressed){
              tela=1;
            }}
  }
  else if(tela==20){
    acerto=0
        background(animais);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    fill(300, 30, 0);
    stroke(10, 100, 210);
    text("Você Perdeu... Tente novamente!", 200, 150);
    text("Voltar", 320, 380);
            if(mouseX>280 && mouseX<280+100 && mouseY>360 && mouseY< 360+30)   {
        rect(280,360,100,30)
            if(mouseIsPressed){
              tela=1;

            }}
  }
  
  
  else if (tela == 3) {
    background(200, 100, 300);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    text("Ano: 3° ano ensino fundamental", 200, 100);
    text("Materia:Ciências", 200, 150);
    textSize(12);
    text(
      "O jogo Qual é o tipo de animal? consiste em mostrar imagens de\n animais e opções para escolher \n suas respectivas \nClasses Mamíferos, Aves, Peixes,Répteis,etc..\n com o objetivo de fazer o aluno memorizar melhor \n a quais classes pertencem tais animais.\n  (EF03CI06) Comparar alguns animais e organizar\n grupos com base em características externas comuns\n (presença de penas, pelos, escamas, \nbico, garras, antenas, patas etc.)  ",
      200,
      180
    );
    textSize(20);
    text("Voltar", 300, 350);
    if (
      mouseX > 250 &&
      mouseX < 250 + 100 &&
      mouseY > 330 &&
      mouseY < 330 + 30
    ) {
      rect(250, 330, 100, 30);
      if (mouseIsPressed) {
        tela = 1;
      }
    }
  } else if (tela == 4) {
    background(200, 100, 300);
    textAlign(CENTER);
    textSize(20);
    textFont("Georgia");
    text(
      "Programação: Gabriel Parizio\n Orientador:Ainda a ser escolhido\n",
      200,
      200
    );
    image(aluno, 150, 60, 100, 100);
    text("Voltar", 300, 350);
    if (
      mouseX > 250 &&
      mouseX < 250 + 100 &&
      mouseY > 330 &&
      mouseY < 330 + 30
    ) {
      rect(250, 330, 100, 30);
      if (mouseIsPressed) {
        tela = 1;
      }
    }
  }
}
