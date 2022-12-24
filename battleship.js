

// Declaração de variáveis

var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var result = document.getElementById('res');

// Início do jogo

// Loop

while (isSunk == false) {
    guess = prompt("Escolha um número de 0 a 6):");

// Validação do número escolhido

    if (guess < 0 || guess > 6) {
        alert("Escolha um número válido!");
    } 
    
    else {
        guesses = guesses + 1;
    }

// Verificação de acerto

    if (guess == location1 || guess == location2 || guess == location3) {
        alert("Acertou!");
        hits = hits + 1;

// Alerta ao usuário que ele ganhou o jogo

        if (hits == 3) {
            isSunk = true;
            alert("Você afundou o navio!");
        }
    }   

// Alerta ao usuário que ele errou o chute

        else {
            alert("Errou");
        }
 }

// Mostra as estatísticas do usuário após o jogo

var stats = "Você precisou de " + guesses + " chutes para afundar o navio, " +
 "então sua precisão foi de " + ((3/guesses) * 100 + "%");
result.innerHTML = stats;

/* 

Problemas encontrados:   

1 - Repetindo apenas uma localização do navio, os acertos do usuário irão aumentar,
pois tecnicamente ele está chutando uma das posições que o navio está.

Solução: Após acertar uma das posições, invalidar o número acertado para que o usuário não consiga repetí-lo.

2 - Não há um número limitado de chutes por jogo, o usuário poderá chutar quantas vezes quiser até ganhar a partida, ou seja,
ele nunca perderá.

Solução: Setar um número limitado de chutes por jogo ou uma localição armadilha para que o usuário possa perder o jogo.

3 - Letras e símbolos são aceitados como resposta.

Solução: Invalidar letras e símbolos, possibilitar apenas números como resposta.*/
