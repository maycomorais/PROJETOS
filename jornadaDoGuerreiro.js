const prompt = require('prompt-sync')();
console.log(
    'Goku precisa derrotar Majin Boo, mas para isso precisa reunir energia de todo o planeta para destruir o poderoso vilão. S/N',
);
console.clear();
console.log();

let r1 = '';
let r2 = '';
let r3 = '';
let r4 = '';
let r5 = '';

while (r1 != 'N' && r1 != 'S') {
    r1 = prompt('Goku conhece a técnica da Genki Dama? S/N ');
    if (r1 != 'N' && r1 != 'S') {
        console.log('RESPONDA S OU N APENAS');
    }
}
while (r2 != 'N' && r2 != 'S') {
    r2 = prompt('As pessoas da Terra estão cientes que precisam doar energia? S/N ' );
    if (r2 != 'N' && r2 != 'S') {
        console.log('RESPONDA S OU N APENAS');
    }
}
while (r3 != 'N' && r3 != 'S') {
    r3 = prompt('Mr. Satan o ajudou com a questão anterior? S/N ');
    if (r3 != 'N' && r3 != 'S') {
        console.log('RESPONDA S OU N APENAS');
    }
}
while (r4 != 'N' && r4 != 'S') {
    r4 = prompt('Majin Boo está imóvel, pronto para receber o ataque? S/N ');
    if (r4 != 'N' && r4 != 'S') {
        console.log('RESPONDA S OU N APENAS');
    }
}
while (r5 != 'N' && r5 != 'S') {
    r5 = prompt('Ele foi realmente destruído? S/N ');
    if (r5 != 'N' && r5 != 'S') {
        console.log('RESPONDA S OU N APENAS');
    }
}

let ponto = 0;

if (r1 === 'S') {
    ponto++;
}

if (r2 === 'S') {
    ponto++;
}

if (r3 === 'S') {
    ponto++;
}

if (r4 === 'S') {
    ponto++;
}

if (r5 === 'S') {
    ponto++;
}
console.log();
if (ponto === 0) {
    console.log('Majin Boo venceu');
} else if (ponto === 1 || ponto === 2) {
    console.log('Majin Boo ainda não foi derrotado');
} else if (ponto === 3) {
    console.log(
        'Foi por pouco, apesar de gravemente ferido, Majin Boo sobreviveu.',
    );
} else if (ponto === 4) {
    console.log(
        'Você conseguiu derrotar Majin Boo, mas ele ainda poderá reencarnar.',
    );
} else {
    console.log(
        'Você o derrotou completamente, Goku! Majin Boo jamais poderá reviver',
    );
}
