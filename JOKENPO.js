console.clear();
const prompt = require('prompt-sync')();
let repeat = "Sim"
while (repeat.toLocaleLowerCase() == 'sim' ) {

let jogo = ['pedra', 'papel', 'tesoura'];
let player = '';
let computador = '';
let escolha = false;
let rodadas = +prompt('Digite a quantidade de rodadas: ');
let contV = 0;
let contE = 0;
let contD = 0;

console.log('JOKENPO');
console.log();
for (i = 0; i < rodadas; i++) {
    while (escolha == false){
        player = prompt('Escolha "Pedra", "Papel" ou "Tesoura"]": ').toLowerCase();
        if(player == 'pedra' || player == 'papel' || player == 'tesoura'){
            escolha = true;
        }
    console.log();
    }
    computador = jogo[Math.floor(Math.random() * jogo.length)];
    console.log(computador);
    console.log();
    if((player == 'pedra' && computador == 'tesoura') || (player == 'papel' && computador == 'pedra') || (player == 'tesoura' && computador == 'papel')) {
        contV++;
    } else if (player == computador) {
        contE++;
    } else {
        contD++;
    } 
    escolha = false
    
}
console.log();
if(contV > contD) {
    console.log(`V = ${contV} E = ${contE} D = ${contD} | Você venceu!`);
} else if (contV == contD) {
    console.log(`V = ${contV} E = ${contE} D = ${contD} | Você empatou!`);
} else {
    console.log(`V = ${contV} | E = ${contE} | D = ${contD} | Você perdeu!`);
}
console.log();
repeat = prompt('Deseja continuar? ');
}
