

// Declaração de variáveis

var randomLoc = Math.floor(Math.random() * 6);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var chances = 5;
var guesses = 0;
var isSunk = false;
var result = document.getElementById('res');

// Início do jogo

// Loop

while (isSunk == false && chances > 0) {
    guess = prompt("Escolha um número de 1 a 7):");

// Validação do número escolhido

    if (guess < 1 || guess > 7 || guess == false || isNaN(guess)) {
        alert("Escolha um número válido!");
    } 
    
    else {
        chances--;
        guesses++;
    }

// Verificação de acerto

    if (guess == location1 || guess == location2 || guess == location3) {
        alert("Acertou!");
        hits++;

// Alerta ao usuário que ele ganhou o jogo

        if (hits == 3) {
            isSunk = true;
            alert("Você afundou o navio!");
            victory();
        }
    }   

// Alerta ao usuário que ele errou o chute

        else if (guess !== location1 || guess !== location2 || guess !== location3 && guess >= 1 || guess <= 7) { 
            alert("Errou");
        }
 }

// Fim do Loop 

// Funções de vitória ou derrota para o usuário

function victory() {
    var statsV = "Você precisou de " + guesses + " chutes para afundar o navio, " +
    "então sua precisão foi de " + Math.floor((3/guesses) * 100) + "%";
    result.innerHTML = statsV;
}

function loss(){
    var statsL = "Você perdeu. Mas não se preocupe, você tem mais uma chance de jogar!"
    result.innerHTML = statsL;
}

// Verifica se o número de chutes disponíveis se esgotaram, e se sim, finalizar a partida como uma derrota

if (chances == 0 && hits < 3){
    isSunk = true;
    alert("Você perdeu")
    loss();
}
/* 

Problemas encontrados:   

1 - Repetindo apenas uma localização do navio, os acertos do usuário irão aumentar,
pois tecnicamente ele está chutando uma das posições que o navio está.

Solução: Após acertar uma das posições, invalidar o número acertado para que o usuário não consiga repetí-lo.

2 - Não há um número limitado de chutes por jogo, o usuário poderá chutar quantas vezes quiser até ganhar a partida, ou seja,
ele nunca perderá.
(RESOLVIDO)

3 - Letras, símbolos e valor vazio são aceitos como resposta.
(RESOLVIDO)

