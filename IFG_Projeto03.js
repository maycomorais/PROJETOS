    // Quem é o personagem? Cavaleiros de Bronze
    // Quais os seus desafios? Subir as 12 Casas
    // Que opções de escolha ele pode ter a cada período? Ataque, Defesa, Buffer Ataque Cosmos, Velocidade Ataque,
    // Como essas escolhas vão impactar na história e nas possibilidades de escolha futuras? Definir Vitória em até 5 Turnos ou derrota se vida chegar a 0
    // Como você irá controlar o passar do tempo? Cada casa avança 1h
    const prompt = require('prompt-sync')();
    //Instalar galeria de Colors >> npm i colors
    const colors = require('colors');
    console.clear();

    let start = false;
    let player = '';
    let char = '';
    let hora = 12
    	aries = false;
    //Abaixo é uma função para avançar o tempo.
    function avancahora(horaatual, tempopassado) {
    	console.log(`Se passaram ${tempopassado} hora(s).`);
    	horaatual = (horaatual) - (tempopassado);
    	return horaatual;
    }

    // Players Bronze Boys
    let Seiya = {
    	ataque: 80,
    	defesa: 70,
    	resistencia: 3,
    	cosmos: 3,
    	setimosent: 1.5,
    	vida: 1000,
    	upSkillAtaque: function (upAtaque) {
    		this.ataque = this.ataque + upAtaque;
    		return this.ataque
    	},
    	upSkillDef: function (upDefesa) {
    		this.defesa = this.defesa + upDefesa;
    		return this.defesa;
    	},
    	upSkillRes: function (upResistencia) {
    		this.resistencia = this.resistencia + upResistencia;
    		return this.defesa
    	},
    	upSkillCos: function (upCosmos) {
    		this.cosmos = this.cosmos + upCosmos;
    		return this.cosmos
    	},
    	upSkillSet: function (upSetimo) {
    		this.setimosent = this.setimosent + upSetimo;
    		return this.setimosent
    	},
    	upSkillVida: function (upVida) {
    		this.vida = this.vida + upVida;
    		return this.vida
    	},
    	diminuiVida: function (dano) {
    		this.vida = this.vida - dano;
    		return this.vida
    	}
    };
    let Shiryu = {
    	ataque: 85,
    	defesa: 95,
    	resistencia: 2,
    	cosmos: 3,
    	setimosent: 1.5,
    	vida: 1000,
    	upSkillAtaque: function (upAtaque) {
    		this.ataque = this.ataque + upAtaque;
    		return this.ataque
    	},
    	upSkillDef: function (upDefesa) {
    		this.defesa = this.defesa + upDefesa;
    		return this.defesa;
    	},
    	upSkillRes: function (upResistencia) {
    		this.resistencia = this.resistencia + upResistencia;
    		return this.defesa
    	},
    	upSkillCos: function (upCosmos) {
    		this.cosmos = this.cosmos + upCosmos;
    		return this.cosmos
    	},
    	upSkillSet: function (upSetimo) {
    		this.setimosent = this.setimosent + upSetimo;
    		return this.setimosent
    	},
    	upSkillVida: function (upVida) {
    		this.vida = this.vida + upVida;
    		return this.vida
    	},
    	diminuiVida: function (dano) {
    		this.vida = this.vida - dano;
    		return this.vida
    	}
    };
    let Hyoga = {
    	ataque: 85,
    	defesa: 80,
    	resistencia: 2,
    	cosmos: 3,
    	setimosent: 1.5,
    	vida: 1000,
    	upSkillAtaque: function (upAtaque) {
    		this.ataque = this.ataque + upAtaque;
    		return this.ataque
    	},
    	upSkillDef: function (upDefesa) {
    		this.defesa = this.defesa + upDefesa;
    		return this.defesa;
    	},
    	upSkillRes: function (upResistencia) {
    		this.resistencia = this.resistencia + upResistencia;
    		return this.defesa
    	},
    	upSkillCos: function (upCosmos) {
    		this.cosmos = this.cosmos + upCosmos;
    		return this.cosmos
    	},
    	upSkillSet: function (upSetimo) {
    		this.setimosent = this.setimosent + upSetimo;
    		return this.setimosent
    	},
    	upSkillVida: function (upVida) {
    		this.vida = this.vida + upVida;
    		return this.vida
    	},
    	diminuiVida: function (dano) {
    		this.vida = this.vida - dano;
    		return this.vida
    	}
    };
    let Shun = {
    	ataque: 75,
    	defesa: 90,
    	resistencia: 2,
    	cosmos: 4,
    	setimosent: 2.5,
    	vida: 1000,
    	upSkillAtaque: function (upAtaque) {
    		this.ataque = this.ataque + upAtaque;
    		return this.ataque
    	},
    	upSkillDef: function (upDefesa) {
    		this.defesa = this.defesa + upDefesa;
    		return this.defesa;
    	},
    	upSkillRes: function (upResistencia) {
    		this.resistencia = this.resistencia + upResistencia;
    		return this.defesa
    	},
    	upSkillCos: function (upCosmos) {
    		this.cosmos = this.cosmos + upCosmos;
    		return this.cosmos
    	},
    	upSkillSet: function (upSetimo) {
    		this.setimosent = this.setimosent + upSetimo;
    		return this.setimosent
    	},
    	upSkillVida: function (upVida) {
    		this.vida = this.vida + upVida;
    		return this.vida
    	},
    	diminuiVida: function (dano) {
    		this.vida = this.vida - dano;
    		return this.vida
    	}
    };
    let Ikki = {
    	ataque: 90,
    	defesa: 75,
    	resistencia: 3,
    	cosmos: 3.5,
    	setimosent: 1.5,
    	vida: 1000,
    	upSkillAtaque: function (upAtaque) {
    		this.ataque = this.ataque + upAtaque;
    		return this.ataque
    	},
    	upSkillDef: function (upDefesa) {
    		this.defesa = this.defesa + upDefesa;
    		return this.defesa;
    	},
    	upSkillRes: function (upResistencia) {
    		this.resistencia = this.resistencia + upResistencia;
    		return this.defesa
    	},
    	upSkillCos: function (upCosmos) {
    		this.cosmos = this.cosmos + upCosmos;
    		return this.cosmos
    	},
    	upSkillSet: function (upSetimo) {
    		this.setimosent = this.setimosent + upSetimo;
    		return this.setimosent
    	},
    	upSkillVida: function (upVida) {
    		this.vida = this.vida + upVida;
    		return this.vida
    	},
    	diminuiVida: function (dano) {
    		this.vida = this.vida - dano;
    		return this.vida
    	}
    };
    // NPC's Golden Boys

    // let muAries = {
    //     ataque: 110,
    //     defesa: 200,
    //     resistencia: 5,
    //     cosmos: 4,
    //     setimosent: 3,
    //     vida: 1000,
    //     diminuiVida: function(dano){
    //         this.vida = this.vida - dano;
    //         return this.vida
    //     }
    // };
    let aldebaramTouro = {
    	ataque: 150,
    	defesa: 170,
    	resistencia: 3,
    	cosmos: 4,
    	setimosent: 3,
    	vida: 1500,
    	diminuiVida: function (dano) {
    		this.vida = this.vida - dano;
    		return this.vida
    	}
    };
    let sagaGemeos = {
    	ataque: 190,
    	defesa: 110,
    	resistencia: 3,
    	cosmos: 3,
    	setimosent: 5,
    	vida: 1500,
    	diminuiVida: function (dano) {
    		this.vida = this.vida - dano;
    		return this.vida
    	}
    };
    let mDmCancer = {
    	ataque: 120,
    	defesa: 100,
    	resistencia: 2,
    	cosmos: 3,
    	setimosent: 2,
    	vida: 1000,
    	diminuiVida: function (dano) {
    		this.vida = this.vida - dano;
    		return this.vida
    	}
    };
    let aioliaLeao = {
    	ataque: 130,
    	defesa: 110,
    	resistencia: 2,
    	cosmos: 3,
    	setimosent: 3,
    	vida: 1500,
    	diminuiVida: function (dano) {
    		this.vida = this.vida - dano;
    		return this.vida
    	}
    };
    /*
    let shakaVirgem = {
    ataque: 185,
    defesa: 180,
    resistencia: 4,
    cosmos: 5,
    setimosent: 5,
    vida: 2000,
    diminuiVida: function(dano){
    this.vida = this.vida - dano;
    return this.vida
    }
    };
    let dokhoLibra = {
    ataque: 200,
    defesa: 180,
    resistencia: 3,
    cosmos: 5,
    setimosent: 5,
    vida: 1500,
    diminuiVida: function(dano){
    this.vida = this.vida - dano;
    return this.vida
    },
    };
    let miloEscorpiao = {
    ataque: 185,
    defesa: 140,
    resistencia: 3,
    cosmos: 3,
    setimosent: 3,
    vida: 2000,
    diminuiVida: function(dano){
    this.vida = this.vida - dano;
    return this.vida
    }
    };
    let aiolosSagitario = {
    ataque: 185,
    defesa: 120,
    resistencia: 2,
    cosmos: 3,
    setimosent: 5,
    vida: 2000,
    diminuiVida: function(dano){
    this.vida = this.vida - dano;
    return this.vida
    }
    };
    let shuraCapricornio = {
    ataque: 170,
    defesa: 140,
    resistencia: 2,
    cosmos: 3,
    setimosent: 3,
    vida: 2000,
    diminuiVida: function(dano){
    this.vida = this.vida - dano;
    return this.vida
    }
    };
    let camusAquario = {
    ataque: 170,
    defesa: 135,
    resistencia: 2,
    cosmos: 3,
    setimosent: 3,
    vida: 2000,
    diminuiVida: function(dano){
    this.vida = this.vida - dano;
    return this.vida
    }
    };
    let afroditePeixes = {
    ataque: 160,
    defesa: 160,
    resistencia: 2,
    cosmos: 2,
    setimosent: 3,
    vida: 2000,
    diminuiVida: function(dano){
    this.vida = this.vida - dano;
    return this.vida
    }
    };
    let grandeMestre = {
    ataque: 200,
    defesa: 180,
    resistencia: 4,
    cosmos: 4,
    setimosent: 5,
    vida: 2000,
    diminuiVida: function(dano){
    this.vida = this.vida - dano;
    return this.vida
    }
    };
     */
    // Fim de NPC's

	let win = 0;

    console.log(`Athena, prevendo um grande mal se apossando do mundo, reúne os Cavaleiros de Bronze e parte para a Grécia, onde deparam-se com o Cavaleiro de Prata "Ptolemy de Flecha".

    -------------------------------------------

    Ptolemy apresenta-se como guia do Santuário, porém, ao ganhar a confiança de todos, inicia seu ataque "Flechas Fantasmas". Seya, Hyoga, Shiryu e Shun conseguem desviar dos golpes, mas uma das flechas atinge o coração da Senhorita Saori Kido. 

                    ⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
                    ⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
                    ⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
                    ⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
                    ⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
                    ⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
                    ⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
                    ⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
                    ⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
                    ⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
                    ⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
                    ⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
                    ⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
                    ⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣


    Rapidamente Seiya contra-ataca o Cavaleiro de Flecha com seu "Meteoro de Pegasus", derrubando o algoz.

    Antes de ser derrotado Ptolemy ri e dispara: "Pobres Cavaleiros de Bronze, sua batalha não termina aqui, muito pelo contrário, vocês ainda terão que enfrentar oponentes muito mais poderosos e terríveis do que eu antes de chegarem ao Grande Mestre, único capaz de retirar esta flecha do coração da Senhorita Saori Kido."

    ---------
    COF COF
    ---------

    "12 Cavaleiros de Ouro guardam o caminho até o Salão do Grande Mestre, cada qual mais terrível com o outro. Seus golpes são capazes de extermnar estrelas e rasgar a terra. Não há chances de vocês ganharem."`.blue.bold);
    console.log();
    prompt(`Pressione ENTER para continuar.`.yellow.bold);
    console.log();
    console.clear();
    while (start == false) {
    	player = prompt(`Digite o seu personagem: 'Seiya', 'Shiryu', 'Hyoga', 'Shun', 'Ikki': `.magenta.bold).toLowerCase();
    	if (player == 'seiya') {
    		char = Seiya;
    		start = true
    	} else if (player == 'shiryu') {
    		char = Shiryu;
    		start = true;
    	} else if (player == 'hyoga') {
    		char = Hyoga;
    		start = true;
    	} else if (player == 'shun') {
    		char = Shun;
    		start = true;
    	} else if (player == 'ikki') {
    		char = Ikki
    			start = true;
    	} else {
    		console.log();
    		console.log('<<<DIGITE O NOME CORRETAMENTE>>>'.red.bold)
    		console.log();
    		start = false;
    	}
    };
    for (i = 0; i < 2; i++) { // LAÇO DE REPETIÇÃO CÍCLICO PARA O CASO DE DERROTA
		gameOver: while(true){ //INÍCIO DA label BRECAR JOGO
		hora = 12
    	char.vida = 1000;
    	console.clear();
    	console.log([player.toUpperCase()] + `, eleve seu Cosmos, vamos começar a subir as 12 casas do Zodíaco!!!`.yellow.bold);
    	console.log();
    	prompt('Pressione "ENTER" para continuar.'.yellow.bold);
    	console.clear();
    	console.log();
    	console.log();
    	console.log(`Neste momento, após uma breve discussão, fica decidido quem subirá as 12 casas. Com lágrimas nos olhos, mas uma infinita determinação em seu coração, ${player} declara:`.blue.bold);
    	console.log();
    	if (player == 'seiya') {
    		console.log('"Shiryu, Hyoga, Shun, Ikki, eu subirei as 12 Casas do Zodíaco e trarei o Grande Mestre até aqui para salvar Athena. Até lá, peço que protejam a Saori com suas vidas. Pressinto um grande perigo a frente."'.magenta.bold)
    	} else if (player == 'shiryu') {
    		console.log('"Seiya, Hyoga, Shun, Ikki, eu subirei as 12 Casas do Zodíaco e trarei o Grande Mestre até aqui para salvar Athena. Até lá, peço que protejam a Saori com suas vidas. Pressinto um grande perigo a frente."'.magenta.bold)
    	} else if (player == 'hyoga') {
    		console.log('"Seiya, Shiryu, Shun, Ikki, eu subirei as 12 Casas do Zodíaco e trarei o Grande Mestre até aqui para salvar Athena. Até lá, peço que protejam a Saori com suas vidas. Pressinto um grande perigo a frente."'.magenta.bold)
    	} else if (player == 'shun') {
    		console.log('"Seiya, Hyoga, Shiryu, Ikki, eu subirei as 12 Casas do Zodíaco e trarei o Grande Mestre até aqui para salvar Athena. Até lá, peço que protejam a Saori com suas vidas. Pressinto um grande perigo a frente."'.magenta.bold)
    	} else {
    		console.log('"Seiya, Hyoga, Shun, Shiryu, eu subirei as 12 Casas do Zodíaco e trarei o Grande Mestre até aqui para salvar Athena. Até lá, peço que protejam a Saori com suas vidas. Pressinto um grande perigo a frente."'.magenta.bold)
    	};
    	console.log();
    	console.log();
    	console.log(`${(player.toUpperCase())} se prepara para chegar à primeira casa do Santuário, "Áries", guardada por um antigo guerreiro Lemuriano, Mu de Jamiel, o último restaurador de armaduras do mundo.

    Mas antes que ele inicie o caminho, o antigo Relógio do Zodíaco acende-se misteriosamente. 12 chamas iluminam os 12 símbolos referentes a cada signo zodiacal.

    "Jovens Cavaleiros de Athena, este relógio representam o tempo que temos para salvar nossa Deusa Athena. A cada 1 hora uma das chamas irá se apagar, e quando a última faísca consumir-se, significará que nossos esforços foram em vão. ${(player.toUpperCase())}, confiamos em você para salvar não apenas Saori, mas todo o nosso mundo. Há um grande mal que rodeia o Santuário, se sem a presença da Deusa neste plano, o planeta Terra se tornará um inferno, e toda a humanidade estará condenada."

    ${(player.toUpperCase())}: "Olhem, é o Mestre Ancião, guardião dos 5 Picos Antigos de Rozan"`.magenta.bold);
    	console.log();
    	console.log();
    	prompt('Pressione "ENTER" para continuar.'.yellow.bold);
    	console.clear();
    	console.log(`Faltam ${hora} horas para o Relógio do Zodíaco se apagar.`.red.bold);
    	console.log();
    	console.log();
    	console.log(`
                                ┌───── •✧✧• ─────┐
                                -CASA DE ÁRIES- 
                                └───── •✧✧• ─────┘
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⡀⢀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠄⡢⡝⣲⢱⣷⡾⠛⡔⣩⣖⡩⠐⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢼⣻⡙⢀⡟⠿⣾⣶⡇⣞⡼⣰⣏⡴⡧⢂⢀⣷⢄⠀⡄⣠⠴⠤⡛⢅⡫⢕⡢⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡚⣾⢇⠡⣿⣿⣿⢻⣿⣿⣾⣷⣣⣿⣪⣓⡵⣫⠿⣀⡐⠀⡀⠱⡄⢄⠐⠼⣮⣾⣾⣾⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⡨⡪⡐⡬⢽⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⡯⣶⠎⢠⣿⡅⠸⣷⣶⣿⣷⣿⣿⣿⣏⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠌⠈⢾⣕⢿⡿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⠿⢋⣉⣤⣿⠛⢃⡄⠈⢿⣿⣿⣿⣿⣿⣿⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⡀⢀⡘⢑⣿⣿⡄⠮⣿⣷⣜⣿⣿⣿⡿⠀⠁⠀⢠⡮⠏⠈⠀⠘⠒⠂⠐⢻⣿⣿⣿⣿⠋⡌⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠁⢠⡉⣹⣾⣿⡿⣿⡺⢫⣿⢧⢿⣟⣴⣷⡗⢤⠋⢁⡀⠀⠀⠀⠀⠀⣁⠀⠙⢿⡩⠙⠢⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡗⠢⢼⣿⣿⣿⣿⠀⠀⠉⠚⠒⢾⣾⣿⠿⢿⣵⣍⡀⠸⠆⠀⠀⠀⠀⠀⠟⠢⡀⣼⡏⠉⡠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠈⡠⣿⣿⣿⣿⣄⠀⠀⠀⠀⢸⣿⣷⡀⠉⠁⠙⠃⣀⡄⠀⠀⠀⠀⠀⢹⡵⣿⡯⡖⢹⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣎⠾⣿⣿⣿⣿⣿⣦⡄⠐⠀⣿⣿⣿⣷⡄⠀⣀⠀⢘⣶⣠⡀⢀⠄⠀⠘⣧⣿⢽⠈⡇⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡀⣪⣿⣿⣿⣿⣿⡆⠀⢠⣧⠻⣿⣿⣿⡀⠩⠓⠲⠿⢽⠏⣀⠀⠀⢀⢻⡿⣞⠰⠀⠀⠀⠀⠀⢀⠔⡱⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⠝⡟⢿⣿⣿⢘⣷⠀⣼⡿⡷⣿⡯⢻⣷⠀⣑⣿⣿⠁⠘⠈⠾⣶⡶⠆⡇⣗⠇⠀⠀⢀⣠⡾⣩⠖⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢾⣾⣿⣿⣿⣴⣿⠀⣼⢁⠈⠊⣿⡷⠟⣹⣉⣿⣗⣀⠀⠀⢀⡌⠀⢀⡧⢿⣀⣤⣶⣿⣯⡮⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢿⣏⣯⣾⡏⣰⣏⡙⠂⠒⡟⣧⣦⣼⣯⣟⣿⣎⠑⢿⣿⣷⠖⣹⣿⣿⣿⣿⣿⢯⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠀⣟⣬⠛⣾⢹⠇⣟⣋⡺⣿⣿⣿⣿⣷⣶⣶⣶⣾⢿⣿⣟⣿⣿⠝⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢉⠗⠏⡄⠚⠠⡏⢸⣿⣷⣿⣿⣿⣿⣿⣿⣾⣷⣿⠷⠭⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡌⠔⠅⠁⠈⠟⢸⣿⡟⣿⣿⡿⡿⠇⣿⣿⣻⣿⣇⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⢥⠠⠄⠀⠀⠀⢜⣿⣿⣿⡅⠋⠊⠺⣟⣿⣏⢿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣸⡔⢀⡂⠀⢀⠈⠩⢿⣏⠲⠁⠀⠀⢘⣿⠓⢸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⡷⠀⠀⠀⠈⠃⠀⠜⡍⠀⠀⠠⠠⠰⣧⢔⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣇⠰⠀⠀⡄⠁⠀⠠⠀⠀⠀⠀⠀⠈⣇⠘⠳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢁⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠄⠀⠀⠀⢀⡀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    `.yellow.bold);
    	console.log();
    	console.log();
    	console.log(`Bem vindo à casa de Áries, ${(player.toUpperCase())}. Eu sou Mu, e te garanto, não sou seu inimigo. Há muito tempo percebi que o mal havia tomado conta de todo o Santuário, e desde então venho coletando informações para que eu possa contribuir. Também devo minha vida e lealdade a Athena, e por isso o deixarei passar sem batalhar, pois sinto que seu espírito já está pronto. Porém, sua armadura está muito danificada, não irá aguentar todo o poder que está prestes a enfrentar. Deixe-me fazer esta gentileza e recuperar sua armadura.`.yellow.bold);
    	console.log();
    	prompt(`Pressione "ENTER" para continuar.`.yellow.bold)
    	console.clear();
    	//DEFINIR SE IRÁ CONSERTAR ARMADURA
    	let conserto = false;
    	while (conserto == false) {
    		console.log(`Consertar a Armadura:\n1 - Sim\n2 - Não\n*NOTA: Caso escolha 'SIM', você gastará 30 min, caso escolha 'Não', você gastará 10 min.`.yellow.bold);
    		//CASO SIM, DEFINIR SE IRÀ TREINAR
    		let escolha = +prompt();
    		console.log();
    		if (escolha == 1) {
    			hora = avancahora(hora, 0.5);
    			console.log(`Farei o reparo de sua armadura, ${(player.toUpperCase())}. Enquanto eu recolho Oricalco para realizar o trabalho, o deixo sob os cuidados do meu assistente "Kiki". Ele poderá ajudá-lo também.`.yellow.bold);
    			conserto = true
    				console.log();
    			prompt(`Presione ENTER para continuar.`.yellow.bold);
    			console.log();
    			console.log(`Kiki: "Hey, ${(player.toUpperCase())}, enquanto sua armadura conserta, gostaria de ajudá-lo a treinar algumas habilidades comigo. Você topa?"\n1 - Sim\n2 - Não\n\n*NOTA: Se escolher 'SIM', você treinará 5 habilidades com Kiki: [ATAQUE], [DEFESA], [RESISTÊNCIA], [COSMOS] e [SÉTIMO SENTIDO].\nCada habilidade custará 6 minutos do seu tempo. Caso escolha "NÃO", você gastará 15 minutos`.yellow.bold);
    			console.log();
    			let treino = +prompt();
    			console.clear();
    			console.log();
    			if (treino == 1) {
    				//AUMENTAR ATAQUE;
    				console.log(`Vamos treinar suas habilidades de Ataque.\n1 - Sim\n2 - Não`.yellow.bold);
    				e1 = +prompt();
    				if (e1 == 1) {
    					char.upSkillAtaque(10);
    					hora = avancahora(hora, 0.1);
    					console.log(`Você ganhou + 10 de Ataque, agora você tem "${char.ataque}" de Ataque no total.`.yellow.bold);
    				} else {
    					hora = avancahora(hora, 0);
    				}
    				console.log();
    				//AUMENTAR DEFESA;
    				console.log(`Vamos treinar suas habilidades de Defesa.\n1 - Sim\n2 - Não`.yellow.bold);
    				e2 = +prompt();
    				if (e2 == 1) {
    					char.defesa = char.upSkillDef(10);
    					hora = avancahora(hora, 0.1);
    					console.log(`Você ganhou + 10 de Defesa, agora você tem "${char.defesa}" de Defesa no total.`.yellow.bold);
    				} else {
    					hora = avancahora(hora, 0);
    				}
    				console.log();
    				//AUMETAR RESISTÊNCIA;
    				console.log(`Vamos aumentar sua Resistência, os inimigos a frente são muito poderosos.\n1 - Sim\n2 - Não`.yellow.bold);
    				e3 = +prompt()
    					if (e3 == 1) {
    						char.upSkillRes(0.5);
    						hora = avancahora(hora, 0.1);
    						console.log(`Você ganhou + 0.5 de Resistência, agora você tem "${char.resistencia}" de Resistência no total.`.yellow.bold);
    					} else {
    						hora = avancahora(hora, 0);
    					}
    					console.log();
    				//AUMENTAR COSMOS;
    				console.log(`Vamos queimar seu Cosmos.\n1 - Sim\n2 - Não`.yellow.bold);
    				e4 = +prompt();
    				if (e4 == 1) {
    					char.cosmos = char.upSkillCos(0.5);
    					hora = avancahora(hora, 0.1);
    					console.log(`Você elevou + 0.5 do Cosmos, agora você tem "${char.cosmos}" de Cosmos no total.`.yellow.bold);
    				} else {
    					hora = avancahora(hora, 0);
    				}
    				console.log();
    				//AUMENTAR SÉTIMO SENTIDO;
    				console.log(`Você precisa despertar seu Sétimo Sentido. Concentre-se, você consegue.\n1 - Sim\n2 - Não`.yellow.bold);
    				e5 = +prompt();
    				if (e5 == 1) {
    					char.setimosent = char.upSkillSet(0.5);
    					hora = avancahora(hora, 0.1);
    					console.log(`Você aumentou em + 0.5 seu Sétimo Sentido, agora você tem "${char.setimosent}" de Sétimo Sentido no total.`.yellow.bold);
    				} else {
    					hora = avancahora(hora, 0);
    				}
    				console.log();
    			} else { // SE NÃO TREINOU, O TEMPO IRÁ AVANÇAR MENOS
    				hora = avancahora(hora, 0.3);
    				console.log(`Kiki: "Uma pena ${(player.toUpperCase())}, teria sido muito importante você evoluir seus atributos para enfrentar seus adversários. Mas ainda assim, acredito em você."`.yellow.bold);
    				console.log();
    			}

    		} else if (escolha == 2) { // SE NÃO CONSERTOU A ARMADURA, O TEMPO AVANÇARÁ MENOS
    			hora = avancahora(hora, 0.2);
    			console.log(`Mu de Áries: ${(player.toUpperCase())}, mesmo achando muito imprudente da sua parte atravessar as 12 casas com este estado deplorável da sua Armadura, permitirei você passar, pois o tempo está contra Athena. Queime ao máximo sua Cosmo Energia, é isto que faz um cavaleiro, não a sua patente.`.yellow.bold);
    			escolha = false
    				console.log();
    			break;
    		} else {
    			console.log(`<<< OPÇÃO INVÁLIDA!!!\nDIGITE [1] PARA SIM E [2] PARA NÃO.`.red.bold);
    			escolha = false
    		}
    		console.log(),
    		prompt(`Pressione "ENTER" para continuar.`.yellow.bold)
    		console.clear();
    		console.log();
    		if (escolha == true) {
    			console.log(`Seu Ataque agora é: ${char.ataque}`.green.bold);
    			console.log();
    			console.log(`Sua Defesa agora é: ${char.defesa}`.magenta.bold);
    			console.log();
    			console.log(`Sua Resistência agora é: ${char.resistencia}`.cyan.bold);
    			console.log();
    			console.log(`Seu Cosmos agora é: ${char.cosmos}`.blue.bold);
    			console.log();
    			console.log(`Seu Sétimo Sentido agora é: ${char.setimosent}`.grey.bold);
    			console.log();
    		} else {
    			console.log(`VOCÊ NÃO GANHOU NENHUM ACRÉSCIMO DE ATRIBUTO. UMA PENA FARÁ FALTA NAS PRÓXIMAS BATALHAS.`.red.bold);
    		}
    		prompt('Pressione "ENTER" para continuar. '.yellow);
    		console.log();
    		console.clear();
    		if (escolha == true) {
    			console.log(`Tudo certo ${(player.toUpperCase())}, sua armadura está completamente restaurada. Você estará um pouco mais protegido, mas se você não queimar seu Cosmos ao máximo e despertar seu Sétimo Sentido, de nada adiantará esta proteção.`.yellow.bold);
    		} else {
    			console.log(`Mu: ${(player.toUpperCase())}, se apresse. A Casa de Touro é logo adiante. O próximo adversário é o Cavaleiro com maior força física entre todos, muito cuidado.
        
        Que Athena te proteja!`.yellow.bold);
    		}
    	};
    	prompt('Pressione "ENTER" para continuar. '.yellow.bold);
    	console.log();
    	console.clear();
    	console.log();
    	console.log(`Restam ${(hora.toFixed(1))} horas para o Relógio se apagar.`.red.bold)
    	console.log();
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.clear();
    	console.log();
    	console.log(`Já consigo ver a casa de Touro daqui. Aguente firme Saori, confie em seu Cavaleiro.

    ---------------
    PUF PUF PUF PUF
    ---------------

    ---------------
    CORRE CORRE
    ---------------

    Enfim Cheguei a...`.blue.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.log(`

    ┌───── •✧✧• ─────┐
    -CASA DE TOURO- 
    └───── •✧✧• ─────┘

        .     .
        '.___.'
        .'   '.
    :       :
    :       :
        '.___.'

    `.yellow.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.clear();
    	console.log();
    	console.log(`Bem vindo à casa de Touro. Eu sou o Cavaleiro de Ouro Aldebaran. Não consigo compreender a leniência de Mu de Áries em deixar tão insignificante Cavaleiro de Bronze passar por sua casa. Este tipo de piedade eu não terei.

    Saiba que eu não me interesso sobre o porquê você quer encontrar com o Grande Mestre, apenas me interesso em seguir minhas ordens, que é não deixar qualquer Cavaleiro medíocre passar por mim.

    Por toda a sua petulância em achar que passaria por aqui, não serei nem um pouco gentil.

    SINTA O PODER DO TOURO: BIG HORN!!!!
    `.yellow.bold);
    	console.log();
    	console.log(`

    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠟⠁⠀⢰⣿⣿⠇⣿⣿⣿⣿⠋⣾⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠛⠁⣠⣿⣿⣿⡇⠀⢿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⡟⠿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠚⠋⠸⣿⣿⣿⣄⠀⠙⢿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⡀⠈⠛⠿⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⣿⣿⠆⠀⠘⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⣸⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣯⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢢⡀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⠟⠋⣀⣴⡖⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠲⠤⣶⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⠟⢁⣴⠾⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠀⠀⠀⠀⠀⠀⢠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⡏⣰⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⡇⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠙⣦⠀⠀⠀⠀⠀⠀⠀⣿⣷⣄⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⡇⢹⣇⠀⠀⠀⠀⠀⣴⣿⣿⣿⡇⠀⠀⠀⠀⣴⣶⣾⣿⣿⣿⣾⣧⡀⠀⠀⠀⠀⠀⢿⣿⣿⣷⣄⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣆⠸⣿⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠀⠀⠀⠘⠿⣿⣿⣿⡇⠀⠀⠀⠉⠙⠻⣿⣿⣿⣿⣿⣿
    ⣿⣿⣷⡟⠀⠀⠀⠀⠛⠛⠿⣿⣿⠇⠀⠀⠀⠈⠉⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠈⠙⢿⡇⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿
    ⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠹⣿⣀⡀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠈⢃⣀⣀⣄⣀⣀⣀⣀⣼⣿⣿⣿⣿
    ⣿⣿⣿⣤⣄⡀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣷⣶⣶⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣀⣀⣀⣀⣀⣀⣀⣀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿

    `.red.bold)
    	console.log();
    	danoTouro = (aldebaramTouro.ataque * aldebaramTouro.cosmos) * (Math.random() * aldebaramTouro.setimosent);
    	defesaChar = (char.defesa * char.resistencia) * (Math.random() * char.setimosent);
    	dano = (danoTouro) - (defesaChar);
    	if (dano > char.vida || dano <= 0) {
    		dano = 800
    	} else {
    		dano = dano;
    	};
    	prompt('Pressione "ENTER" para continuar. '.yellow.bold);
    	console.log();
    	console.clear();
    	console.log(`Em um piscar de olhos Aldebaran lança seu ataque contra ${(player.toUpperCase())}. O Big Horn (Grande Chifre) é uma técnica que permite o Cavaleiro de Touro enviar uma poderosa rajada de energia no alvo à sua frente.`.yellow.bold);
    	console.log();
    	console.log();
    	console.log();
    	console.log('O Dano de Aldebaran foi de'.red.bold,  + Math.round(danoTouro));
    	console.log('Sua defesa foi de'.blue.bold,  + Math.round(defesaChar));
    	char.diminuiVida(dano);
    	console.log('Você tomou'.blue.bold,  + Math.round(dano), 'de dano, e sua vida agora é'.blue.bold,  + Math.round(char.vida));
    	console.log();
    	console.log();
    	console.log();
    	prompt('Pressione "ENTER" para continuar. '.yellow.bold);
    	console.log();
    	console.log(`${(player.toUpperCase())}: "O que aconteceu? Não consigo sentir mais nada... Que poder terrível e devastador... Parece que meu corpo foi reduzido a átomos."`.blue.bold);
    	console.log();
    	console.log('------------------------------------------------------------');
    	console.log();
    	prompt('Pressione "ENTER" para continuar. '.yellow.bold);
    	console.log();
    	console.log(`Aldebaran: HaAhAHHAhAHahahAHHAahAHHahAhAHaHa. É com este nível de poder que você quer nos enfrentar, os Cavaleiros de Ouro?

    ${(player.toUpperCase())}, Você precisa entender a diferença entre nossos poderes. Um Cavaleiro de Bronze tem domínio total dos 5 sentidos, e apesar de muito rápidos, alcançam uma velocidade entre Mach 1 e Mach 3 (2.448 km/h ~ 3.704 km/h).

    Os Cavaleiros de Prata, além dos 5 sentidos, conseguem dominar mais um sentido: a INTUIÇÃO. E por isso podem mover-se entre Mach 5 e Mach 7 (6.174 km/h ~ 8.644 km/h).

    Já os Cavaleiros de Ouro dominam com perfeição o Sétimo Sentido, que é a compreensão da física em nível molecular, e por isso podemos nos mover na VELOCIDADE DA LUZ (1.079.252.848.8 km/h [um bilhão setenta e nove milhões duzentos e cinquenta e dois mil oitocentos e quarenta e oito ponto oito quilômetros por hora.]).

    A diferença entre nossos poderes é desproporcional, não há chances para você. Desista agora.`.yellow.bold);
    	console.log();
    	console.log();
    	prompt('Pressione "ENTER" para continuar. '.yellow.bold);
    	console.log();
    	console.log(`${(player.toUpperCase())}: "Então é isso. Por isso não pude enxergar seus movimentos. Do meu ponto de vista, Aldebaram sequer se moveu."`.blue.bold);
    	console.log();
    	console.log();
    	+prompt('Pressione "ENTER" para continuar.'.yellow.bold);
    	console.clear();
    	console.log();
    	console.log(`"${(player.toUpperCase())}... ${(player.toUpperCase())}..." O que é isso? É a voz da Senhorita Saori dentro da minha cabeça...

    "${(player.toUpperCase())}, por acaso não lhe disse para ser forte e corajoso? A única diferença entre você e os Cavaleiros de Ouro é a determinação. Apesar de muito forte, o Touro ainda não usou todo o seu poder.
    Você precisa se lembrar que luta pela justiça e pelo amor, você precisa de lembrar que está lutando por toda a humanidade. 
    Não se sinta sozinho ${(player.toUpperCase())}, estarei com você durante todo o caminho.`.blue.bold);
    	console.log();
    	console.log();
    	prompt('Pressione "ENTER" para continuar'.yellow.bold);
    	console.log();
    	console.log();
    	console.log(`Amparado pela confiança e amor de Athena, ${(player.toUpperCase())} se levanta e começa a cambalear em direção a Aldebaran`.blue.bold);
    	console.log();
    	console.log(`Aldebaran: "Não posso acreditar no que estou vendo. Você recebeu meu Big Horn sem sequer se defender, ninguém sobreviveria a isso.`.yellow.bold)
    	console.log();
    	console.log(`${(player.toUpperCase())}: "Touro, nem mesmo seu grande poder será capaz de me impedir de chegar ao salão do Grande Mestre e salvar Athena. Você, mesmo sendo um Cavaleiro de Ouro, também deveria lutar pela paz, pela justiça, pelo amor e por Athena." Agora saia da minha frente e me deixe passar, ou verá que minha determinação te fará se arrepender de ter me enfrentado.`.blue.bold);
    	console.log();
    	console.log();
    	console.log(`"ahuahuahuahuHAuhUahUAH, jamais imaginaria que um mero Cavaleiro de Bronze sequer viveria ao meu ataque, muito melos tagarelar coisas sem sentido.

    Acredito que eu deva ter acertado sua cabeça com muita força.`.yellow.bold);
    	console.log();
    	if (conserto == true) {
    		console.log(`Se não fosse o reparo da sua Armadura feito por Mu de Áries, você jamais teria resistido.`.yellow.bold);
    	} else if (conserto == false) {
    		console.log(`Se você ao menos tivesse reparado sua Armadura com Mu de Áries, seu corpo poderia estar em melhor estado.`.yellow.bold);
    	};
    	console.log();
    	console.clear();
    	console.log(`Não fale besteiras, Touro. Você verá que não estou brincando.\n Contemple o poder da justiça!`.blue.bold);
    	console.log();
    	console.log(`Vejam só como o Cosmos deste garoto ruge. AHHAHAHAhAHAH!!!!
    Garoto, como é mesmo seu nome?`.yellow.bold);
    	console.log();
    	console.log(`MEU NOME É ${(player.toLocaleUpperCase())}, TOURO!!! NUNCA SE ESQUEÇA DISSO!!!`.blue.bold);
    	console.log();
    	console.log(`Pois bem, ${(player.toLocaleUpperCase())}, quero te fazer uma proposta. Se você conseguir arrancar um dos chifres do meu Elmo, eu o deixarei passar. Acha que é capaz disso?`.yellow.bold);
    	console.log();
    	console.log(`Você está falando sério, Aldebaran?`.blue.bold);
    	console.log();
    	console.log(`Eu não brinco, sou um Cavaleiro de Ouro.

    Mas lembre-se, se quiser equiparar-se, mesmo que por um segundo, ao poder de um Cavaleiro de Ouro, você tem que queimar seus Cosmos ao máximo e atingir o Sétimo Sentido.

    Esta é a única forma de me superar, ${(player.toLocaleUpperCase())}.`.yellow.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar. `.yellow.bold);
    	console.clear();
    	console.log();
    	console.log(`${(player.toLocaleUpperCase())}, eu te darei 3 chances de me atacar.
    Caso consiga arrancar um dos chifres, cumprirei minha promessa.`.yellow.bold)
    	console.log();
    	let atacar = '';
    	ataqueT: for (i = 0; i < 3; i++) {
    		if (player == 'seiya') {
    			console.log(`Aldebaran, sinta o poder do Pégaso:
        METEOOOOROO DE PÉGASUUUUSS!!!`.blue.bold);
    		} else if (player == 'shiryu') {
    			console.log(`Aldebaran, sinta o poder do Dragão:
        CÓLERAAAA DO DRAGÃOOOO!!!`.blue.bold);
    		} else if (player == 'hyoga') {
    			console.log(`Aldebaran, sinta o poder do Cisne:
        PÓÓÓÓÓÓ DE DIAMANTEEEE!!!`.blue.bold);
    		} else if (player == 'shun') {
    			console.log(`Aldebaran, sinta o poder de Andrômeda:
        CORRENTEEEE DE ANDRÔMEDAAA!!!`.blue.bold);
    		} else if (player == 'ikki') {
    			console.log(`Aldebaran, sinta o poder da Fênix:
        AVEEEEEE FÊNIIIIX!!!`.blue.bold);
    		}

    		do {
    			ataque = (char.ataque * char.cosmos) * (Math.random() * char.setimosent);
    			atacar = prompt(`Pressione ENTER para atacar!`.bgRed);
    			defesaT = (aldebaramTouro.defesa * aldebaramTouro.resistencia) / 3;
    			danoT = ataque - defesaT;
    			if (danoT <= 166) {
    				danoT = 167
    			}
    			aldebaramTouro.diminuiVida(danoT);
    			console.log('Seu ataque foi de : ' + Math.round(ataque));
    			console.log('A defesa de Aldebaran foi de : ' + Math.round(defesaT));
    			console.log('Seu dano foi de : ' + Math.round(danoT));
    			console.log('A vida do Touro é de : ' + Math.round(aldebaramTouro.vida));
    			console.log();
    			if (aldebaramTouro.vida <= 1000) {
    				console.log(`AUHAUHAUHAUHUAHUHAUhAUhA. Você conseguiu ${(player.toUpperCase())}, arrancou o chifre do meu Elmo!!!

    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢀⣰⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⣼⣿⣿⣿⡷⠀⢀⣀⣤⣾⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣶⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⣄⡀⢀⣀⣀⣾⣿⣿⣿⣿⣶⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢿⣿⣿⣷⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠉⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠰⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠉⠙⠋⠉⠙⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠙⢿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⣀⣤⣶⣿⣿⠿⠋⠀⠀⠉⣻⣿⣿⣿⣿⣿⣷⣤⡀⠀⠀⣠⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⢹⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⣀⣰⣿⣿⣿⡟⠁⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⣰⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠐⡀⠀⢿⣿⣿⣿⣿⡇⠠⡀⠀⠀⠀⠀⠀⠀
    ⠀⣸⣿⡿⠟⠛⠉⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⢸⣿⣿⣿⣿⠀⠀⡇⠀⠀⠀⠀⠀⠀
    ⠘⠛⠉⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⠏⠛⠋⠙⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠂⠀⠸⠀⢸⣿⣿⣿⠏⢀⡜⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡿⠃⠀⠀⣠⣶⣾⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⢠⠁⠀⢸⣿⣿⠏⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⡿⠋⠀⠀⠀⠀⠁⠋⠏⠉⠁⠀⣻⣛⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⠿⠻⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⣼⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣼⣿⣿⣿⡿⣻⡟⠉⠁⠀⠀⠙⢿⣿⣿⠀⠀⠀⠀⠀⠀⢠⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⣀
    ⠀⠀⠀⠀⠀⣼⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣗⣾⣿⡇⠀⠀⠀⠀⠀⠀⢹⣿⣿⣷⡀⠀⠀⢀⣾⠃⣀⣤⣴⣶⣶⣶⣶⣶⣶⣾⣿⣿⣿⣿
    ⣶⣦⣤⣀⣠⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣮⢿⣿⠀⠀⠀⠀⢀⣀⣀⣹⣿⣿⣷⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣧⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣽⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿


            KKKKKK, quem imaginaria tanta determinação?`.yellow.bold);
    				console.log();
    				hora = avancahora(hora, 0.2);
    				break ataqueT;
    			} else {
    				console.log(`Vamos ${(player.toUpperCase())}, mostre-me do que é capaz, me ataque novamente.`.yellow.bold);
    				console.log();

    			}
    		} while (true);

    	}
    	console.log();
    	console.log(`Restam ${(hora.toFixed(1))} horas.`.red.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.clear();
    	console.log();
    	console.log(`Você foi muito bem, ${(player.toUpperCase())}. Conseguiu mesmo arrancar um dos meus chifres.

    Te disse que não deixaria passar pela Casa de Touro nenhum cavaleiro medíocre... E na minha frente não vejo ninguém, além de um Cavaleiro de Athena.`.yellow.bold);
    	console.log();
    	console.log(`Aldebaran... `.blue.bold);
    	console.log();
    	console.log(`Não fale mais nada, apenas siga em frente ${(player.toUpperCase())}.

    A Casa de Gêmeos é a próxima. Seu adversário não está presente, mas isso não significa que você conseguirá passar por ela tão facilmente.`.yellow.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.clear(),
    	char.upSkillAtaque(10);
    	char.upSkillCos(0.5);
    	char.upSkillSet(1);
    	char.upSkillRes(0.5)
    	char.upSkillVida(dano);
    	console.log(`Seu Ataque agora é: ${char.ataque}`.green.bold);
    	console.log();
    	console.log(`Sua Resistência agora é: ${char.resistencia}`.cyan.bold);
    	console.log();
    	console.log(`Seu Cosmos agora é: ${char.cosmos}`.blue.bold);
    	console.log();
    	console.log(`Seu Sétimo Sentido agora é: ${char.setimosent}`.grey.bold);
    	console.log();
    	console.log(`Você ganhou um BÔNUS.`.blue.bgWhite.bold);
    	console.log();
    	prompt(`Pressione ENTER para descobrir.`.blue.bgYellow.bold);
    	console.log();
    	console.log(`Sua vida agora é: ${char.vida}`.grey.bold);
    	console.log();
    	console.log(`A Cosmo Energia de Athena restaurou sua vida, ${(player.toUpperCase())}. Você já está preparado para continuar subindo as 12 Casas do Zodíaco.`.magenta.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.clear();
    	console.log();
    	console.log(`Aldebaram: "Pode sair daí, Mu. Já vi que você acompanhava nossa batalha desde o início."`.yellow.bold);
    	console.log();
    	console.log(`

    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣴⣿⣿⣵⡤⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡭⣽⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⢹⣿⣿⣼⢿⣤⣀⣀⡀⠀⠀⠀⠀⠀⠀⢠⣔⣠⣏⠚⠓⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣏⣷⣿⣿⣿⣿⡿⡿⣿⣻⣿⢞⡀⠀⢄⢠⠀⣴⣾⣿⣿⣾⡄⣜⣎⣡⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣽⣿⣽⣟⣿⣿⡿⠾⣮⣭⣛⢿⠇⠀⠀⠅⢠⢿⣻⣻⢭⡿⢣⠬⣔⢊⣥⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣽⣿⣿⣿⣖⣾⣶⣾⣿⣿⡿⠉⠀⠀⠀⠀⣘⣾⣿⣿⣾⢯⣽⣟⡟⣿⣼⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠹⠿⢶⣷⣾⣿⣿⣯⣭⣽⣿⡿⠀⠀⠀⠀⠀⠀⣇⣏⣿⣓⡭⣽⣏⣷⣻⡏⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⢟⡿⣿⣿⣴⣾⣿⣯⠀⠀⠀⠀⠀⠀⠀⢾⣾⣿⣿⡻⢹⣿⡏⣿⣻⠅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡷⠟⡿⣿⣿⣷⣿⣿⠀⠀⠀⠀⠀⠀⢰⣏⣯⣿⣯⣼⣾⡿⡇⢸⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡾⣷⣽⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠻⣿⣿⣿⡇⢸⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣽⡷⣶⣾⣿⣿⢿⣿⣧⠀⠀⠀⠀⠀⠀⣸⢬⢻⣻⠀⢿⣻⣿⡏⢸⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⣿⣟⠋⠈⣻⣟⣿⣿⠀⠀⠀⠀⠀⠀⡿⠽⣬⡿⠀⠈⡏⢹⣳⠘⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢴⠾⣽⠀⠀⠀⣽⢿⣿⡀⠀⠀⠀⠀⢠⠙⣄⣿⡇⠀⠀⢣⣾⣼⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢾⣤⡿⡄⠀⠀⢙⡯⡽⣅⠀⠀⠀⢀⠎⠀⣯⣿⣷⠀⠀⣿⡅⣿⡇⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣶⠀⠀⠸⣿⣿⣿⠀⢀⠀⡜⠀⢀⢻⢻⡏⡇⠀⢋⣿⢸⣧⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠨⢿⣼⡇⠀⠀⠀⢍⣿⣿⢀⠂⡘⠀⠀⢸⢸⣸⣳⠇⠀⠈⣿⣼⣿⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⣿⠀⠀⠀⠀⠈⠏⡿⠁⠠⠀⠀⠀⡸⢈⢻⡿⠀⠀⠀⠸⣽⣷⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⡽⠀⠀⠀⠀⠀⠘⠀⠀⠆⠄⣀⢀⠇⢸⢺⡇⠀⠀⠀⠀⢟⣿⠘⠠⠤⠤⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣝⣇⠀⠀⠀⠀⠀⣗⣤⣀⠀⠀⠀⠈⢒⣎⠹⡏⠀⠀⠀⠀⣉⣿⡇⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣐⣻⣟⣽⣻⠀⠀⠀⠀⠠⠧⠾⠽⠆⠀⠀⠠⠤⠬⠆⠇⠀⠀⠀⠀⠛⠛⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⡀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣤⣤⣤⣤⣤⣤⣴⣤⣤⣦⣴⣶⣶⣶⣀⣀⣀⣠⣄⣀⣐⣒⣠⣶⣦⣄⣀⣀⣀⣀⣀⣀⣀⣀⣠⣤⣤⣀⣀⣸⣿⣿⣿⣷⣀⠀⠀⠀⠀⠀
    ⡀⠀⠀⠀⠀⠀⣀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠉⠉⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀

    `.yellow.bold);
    	console.log();
    	console.log(`Mu: "Meu amigo Aldebaran, não resisti a curiosidade e tive que vim pessoalmente saber o motivo de você permitir que ${(player.toUpperCase())} passasse pela Casa de Touro."`.yellow.bold);
    	console.log();
    	console.log(`Aldebaran: "Há algum tempo eu passei a ter dúvidas sobre as ordens do Grande Mestre, não tinha certeza de quem realmente falava a verdade. Mas fiquei curioso em saber até onde ${(player.toUpperCase())} vai. Mas acho que ele não conseguirá passar pela Casa de Gêmeos."`.yellow.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar. `.yellow.bold);
    	console.clear();
    	// FIM DA FASE DE PROEFICIÊNCIA DA MECÂNICA DO GAME. A PARTIR DAQUI AS BATALHAS SERÃO PRA vALER.
    	console.log();
    	console.log(`Já consigo ver a entrada da Casa de Gêmeos.`.blue.bold);
    	console.log();
    	console.log(`

                                ┌───── •✧✧• ─────┐
                                -CASA DE GÊMEOS- 
                                └───── •✧✧• ─────┘


    ⠀⠀⠀⠀⠀⠀⠀⠀⠰⡄⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⢦⠀⡔⣠⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣦⡄⠀⣸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠃⠀⣸⣣⣷⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣶⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢴⣶⣿⣿⣿⣿⣿⣿⣶⣢⡄⠀⠀⠀⠀⠀⠀⠀⣼⣿⣶⣾⣿⣿⠿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⣿⣿⣇⣀⡀⠀⠀⠀⠀⠀⢀⣤⣿⣿⣿⣿⣿⢫⠶⢮⢻⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⣠⣿⣷⣿⣿⠋⠁⠀⠀⠀⣠⠀⠀⠀⣀⡀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡗⠀⠀⠀⠀⠀⢺⣿⣿⣿⣿⣿⣟⡚⢥⡼⣸⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⣿⣿⣿⣿⡿⠀⠀⠀⠀⣼⢃⣴⣶⠟⠋⠀⠀⠀
    ⠀⠀⠀⣴⣶⣶⣶⣦⡄⠀⠀⠘⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠹⠻⢉⡕⡵⣿⣿⣷⣾⣿⣿⢓⣢⡌⠟⠁⠀⠀⠀⠀⣿⣿⣿⡿⠁⠀⠀⠀⠀⣿⣾⣿⣿⠀⣴⠀⠀⠀
    ⠀⠀⢰⣿⣿⣿⣿⣿⣇⡀⠀⠀⢹⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⡿⢁⡇⣽⣿⣿⣿⣿⡇⣿⠺⠏⠀⠀⠀⠀⠀⢠⣿⣿⣿⡇⠀⠀⠀⠀⢠⣿⣿⣿⣿⣾⠇⠀⠀⠀
    ⠀⠀⠀⠙⠿⣿⣿⣿⣿⣿⡄⠀⢸⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠂⡄⠡⣟⣿⣛⡛⠛⠇⢻⠠⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⠏⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠹⢿⣿⡟⢱⠀⢸⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⣤⣾⣾⣿⣿⣿⣿⣿⣷⣶⣵⣄⠀⠀⠀⢠⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠘⢿⣿⣿⠏⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠙⣿⡿⣬⢇⠈⣿⣿⣿⣿⣿⣧⣄⣀⠀⠀⣺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢀⣴⣶⣿⣿⣿⣿⣿⣿⠀⠀⠀⢀⢞⠀⣼⡿⠃⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠘⣷⣻⡌⢷⣿⣿⣿⣿⣿⣿⣿⣿⣇⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⡇⠀⢀⡴⠋⡤⣾⡋⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣷⣻⡀⠹⣟⣻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣄⡴⠋⢀⣾⣾⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣷⣄⠘⡏⠳⡝⣿⣿⠿⢿⠛⠛⠛⠛⠻⠿⠁⠀⠀⠩⠛⠿⠋⠉⠉⠀⡙⠛⠿⢷⠋⠉⢿⠁⣠⢞⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣏⡟⣾⠁⠀⣹⣧⣀⣀⡀⣀⡀⠀⣀⠀⠁⠀⠀⠀⠀⡀⡀⠀⠀⠀⠀⠀⠀⣀⣡⠀⠀⣸⣾⢿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣾⢿⡀⠀⣿⣿⣶⣶⣶⣷⣶⣶⣾⣿⡄⠀⠀⠀⣰⣿⣿⣿⣭⣽⣿⣾⣿⣿⣿⣧⣶⣳⣿⣾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⡸⣷⡀⠁⠉⠉⢉⡿⢹⣿⣿⣿⣿⣿⣷⣶⣾⣿⣾⣿⣿⣶⡟⠉⠉⠉⠉⠉⠁⣾⣿⣿⠇⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣷⣽⠃⠀⠀⠀⢸⢧⣿⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠁⠀⠀⠀⠀⢸⢹⡷⠁⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣤⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⣺⡟⣾⡿⠿⠿⠛⣛⣻⣿⣿⡿⢿⡿⣿⣧⣿⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⢹⣿⢣⡏⠉⣦⠀⠐⡇⣿⣿⣿⡇⢠⡏⠉⣿⣯⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡿⣸⣈⡒⠤⠕⠚⡇⣿⣿⣿⠗⣿⣶⠒⣉⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣺⣿⡇⣿⣿⡤⠤⠤⢤⡧⣿⣿⣿⡧⢿⣿⠤⢿⢻⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣇⣿⡿⢸⣿⡏⠀⠀⠀⢸⡇⣿⣿⣿⣷⢸⣿⡇⢸⡀⢿⣿⢻⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡿⣸⠟⡁⣿⣿⠟⠁⠀⠀⢸⡇⣿⣿⣿⣿⡆⢻⡇⠈⣿⣌⠻⡈⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠟⠑⢡⣾⢸⣿⣿⠀⠀⠀⠀⣼⡇⣿⣿⣿⣿⠀⣼⣇⠀⣿⣿⣷⢈⠈⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠂⢀⣼⣿⣿⡿⠋⢸⠯⢉⡁⣭⣙⡻⢿⣿⣿⣿⣿⠻⡿⣿⣷⢲⣥⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⢀⣀⣠⡾⠏⠐⠿⢛⣭⡝⠁⠠⠌⠐⣓⡣⠖⢽⣿⣦⡩⠻⡿⠿⠼⠇⠉⠛⠃⠙⠿⠿⠶⠦⠄⠀⢠⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠁⠀⠙⠀⠀⠖⠀⠠⠀⠞⠉⠋⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

    `.yellow.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.log();
    	console.log(`Parece que estou correndo em círculos. Toda vez que entro na Casa de Gêmeos, acabo saindo pelo mesmo lugar que entrei.`.blue.bold);
    	console.log();
    	console.log(`HIHIHI HEHEHE HAHAHAHAHAHAHAHAH, Cavaleiro de Bronze. Esta é a minha Casa, intrusos não são bem-vindos.

    Para entrar na Casa de Gêmeos, seu Sétimo Sentido e seu Cosmos tem que estar queimando ao máximo.`.yellow.bold);
    	console.log();
    	console.log(`${(player.toUpperCase())}: De onde vem esta voz????`.blue.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.clear();
    	console.log(`
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣶⣤⣤⣤⣾⠶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣯⣿⣿⣿⢿⣿⣿⣷⣾⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⡕⠟⠴⠛⠓⣽⡛⠿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣷⠄⠀⠀⣤⣿⢁⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣀⠈⢻⣶⣶⡤⠀⠀⢻⣿⣾⠿⠃⠀⣀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣽⣎⣥⡄⣿⣿⣿⣧⡀⠀⠘⢻⣾⣮⣽⣽⣆⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣧⣤⡼⣿⣿⣿⣿⣿⣿⣿⣿⡷⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣟⠙⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢠⣤⡀⣿⣿⡄⠀⠻⠿⣿⣿⣿⣿⣿⣿⣼⣿⣷⣼⣿⣿⡿⠟⣻⣦⡾⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠘⣿⣿⡿⣿⣿⣄⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢀⣴⣿⣿⡝⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢻⠿⣼⢙⣿⠿⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣭⡏⠺⣿⣿⠿⠋⠇⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢸⣇⡅⠀⢩⠄⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⠀⠸⣿⣍⢷⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢺⢿⠃⢰⠋⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠈⣿⣿⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢸⣻⠀⠌⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠹⣿⢸⠁⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢸⢻⣬⠀⠀⠀⠀⣠⣿⣿⣹⣿⣿⣿⣧⣼⣿⣿⣿⣆⠀⠀⢻⣟⡂⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠸⣀⡿⠀⠀⠀⢠⣿⣿⢣⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⡀⠀⢸⣇⣣⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡄⠀⢀⣾⣿⢇⣏⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣇⠀⢸⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠰⢿⣿⡋⠿⠀⣼⣿⢉⠞⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡸⡄⠀⠘⠻⠇⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠰⣿⡏⡘⠀⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣯⣰⣿⣿⠁⠀⠛⠛⠛⢻⣿⣿⣧⣠⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡆⠀⠀⠀⢠⣾⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣻⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣏⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣤⣀⡀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⢠⣿⣿⣿⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠿⠟⢿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠻⣿⣿⡿⠗⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠀⠀⠀⠀⠀⠀
    `.yellow.bold);
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.clear();
    	console.log(`O que, uma armadura vazia?`.blue.bold);
    	console.log();
    	console.log(`Cavaleiro de Bronze, você está no meu labirinto. Só existem duas formas de você sair daqui: me derrotando ou morto.`.yellow.bold);
    	console.log();
    	console.log(`Se você conhecer a Mitologia Grega profundamente, eu deixarei você sair do labirinto de Gêmeos`.yellow.bold);
    	console.log();
    	prompt(`Pressione ENTER para prosseguir.`.yellow.bold);
    	console.clear();
    	console.log();
    	//INÍCIO DO LABIRINTO
    	let r1 = '';
    	let r2 = '';
    	let r3 = '';
    	let r4 = '';
    	let r5 = '';
    	let lab = false;
    	while (lab == false) {
    		prosseguir = prompt(`Digite "Blue" para prosseguir no Labirinto de Gêmeos: `.blue.bgWhite.bold).toLowerCase();
    		console.log();
    		if (prosseguir = 'blue') {
				lab == true
    			while (r1 != 1 && r1 != 2) {
    				console.log(`No Olimpo há um Deus do Vinho e das Festas. Qual o Seu nome?\n1 - Dionísio\n2 - Baco\n `.yellow.bold);
    				r1 = +prompt();
    				console.log();
    				if (r1 == 1) {
    					console.log(`VOCÊ TEVE SORTE DESTA VEZ!!\nANDE 12 PASSOS E DEPOIS DOBRE A DIREITA`.bold);
    					char.upSkillDef(10);
    					hora = avancahora(hora, 0.1);
    					console.log();
    					console.log();
    				} else if (r1 = 2) {
    					console.log(`HIHIHI HEHE HAHAHAHA!! BACO É UM DEUS ROMANO!\nPOR SUA INSOLÊNCIA TOME ISTO: EXPLOSÃO GALÁTICAAA!`.bold);
    					let danoG = [(sagaGemeos.ataque * sagaGemeos.cosmos) * Math.random(sagaGemeos.setimosent)] / 2;
    					char.diminuiVida(danoG);
    					hora = avancahora(hora, 0.3);
    				} else if (r1 != 1 && r1 != 2) {
    					console.log(`RESPONDA 1 OU 2 APENAS`.white.bgRed.bold);
    				}
    			}
    			while (r2 != 1 && r2 != 2) {
    				console.log();
    				console.log(`Quem é o responsável por fazer a travessia no mundo dos mortos?\n1 - Aqueronte\n2 - Caronte\n `.yellow.bold);
    				r2 = +prompt();
    				if (r2 == 2) {
    					console.log(`VOCÊ TEVE SORTE DESTA VEZ!!\nANDE 9 PASSOS E DEPOIS DOBRE A ESQUERDA`.bold);
    					char.upSkillAtaque(10);
    					hora = avancahora(hora, 0.1)
    				} else if (r2 == 1) {
    					console.log(`HIHIHI HEHE HAHAHAHA!! AQUERONTE É O RIO QUE OS MORTOS ATRAVESSAM!\nPOR SUA INSOLÊNCIA TOME ISTO: EXPLOSÃO GALÁTICAAA!`.bold);
    					let danoG = [(sagaGemeos.ataque * sagaGemeos.cosmos) * Math.random(sagaGemeos.setimosent)] / 2;
    					char.diminuiVida(danoG);
    					hora = avancahora(hora, 0.3)
    				} else if (r2 != 1 && r2 != 2) {
    					console.log(`RESPONDA 1 OU 2 APENAS`.white.bgRed.bold);
    				}
    			}
    			while (r3 != 1 && r3 != 2) {
    				console.log();
    				console.log(`Quem foi o primeiro Titã, que deu origem a todos os Deuses Gregos?\n1 - Cronos\n2 - Caos\n `.yellow.bold);
    				r3 = +prompt();
    				if (r3 == 2) {
    					console.log(`VOCÊ TEVE SORTE DESTA VEZ!!\nANDE 4 PASSOS E DOBRE PARA A ESQUERDA, DEPOIS ANDE MAIS 5 PASSOS E DOBRE A DIREITA`.bold);
    					char.upSkillSet(0.5);
    					hora = avancahora(hora, 0.1);
    				} else if (r3 == 1) {
    					console.log(`O PRIMEIRO TITÃ FOI CAOS!!! DO CAOS ADVÉM TUDO!!!\nPOR SUA INSOLÊNCIA TOME ISTO: EXPLOSÃO GALÁTICAAA!`);
    					let danoG = [(sagaGemeos.ataque * sagaGemeos.cosmos) * Math.random(sagaGemeos.setimosent)] / 2;
    					char.diminuiVida(danoG); ;
    					hora = avancahora(0.3);
    				} else if (r3 != 1 && r3 != 2) {
    					console.log(`RESPONDA 1 OU 2 APENAS`.white.bgRed.bold);
    				}
    			}
    			while (r4 != 1 && r4 != 2) {
    				console.log();
    				console.log(`Qual o nome da primeira esposa de Zeus?\n1 - Métis\n2 - Hera\n `.yellow.bold);
    				r4 = +prompt();
    				if (r4 == 1) {
    					console.log(`VOCÊ TEVE SORTE DESTA VEZ!!\nANDE 11 PASSOS E DEPOIS DOBRE A DIREITA`.bold);
    					char.upSkillSet(0.5);
    					hora = avancahora(hora, 0.1)
    				} else if (r4 == 2) {
    					console.log(`HIHIHI HEHE HAHAHAHA!! HERA, ALÉM DE SUA IRMÃ, TAMBÉM FOI SUA TERCEIRA ESPOSA!\nPOR SUA INSOLÊNCIA TOME ISTO: EXPLOSÃO GALÁTICAAA!`.bold);
    					let danoG = [(sagaGemeos.ataque * sagaGemeos.cosmos) * Math.random(sagaGemeos.setimosent)] / 2;
    					char.diminuiVida(danoG);
    					hora = avancahora(hora, 0.3);
    				} else if (r4 != 1 && r4 != 2) {
    					console.log(`RESPONDA 1 OU 2 APENAS`.white.bgRed.bold); ;
    				}
    			}
    			while (r5 != 1 && r5 != 2) {
    				console.log();
    				console.log(`Quais destes NÃO foram um dos 12 trabalhos de Hércules?\n1 - Cavalariças de Áugias\n2 - Derrotar a Medusa\n `.yellow.bold);
    				r5 = +prompt();
    				if (r5 == 2) {
    					console.log(`VOCÊ TEVE SORTE DESTA VEZ!!\nANDE 5 PASSOS E DOBRE A ESQUERDA, DEPOIS DOBRE A DIREITA NA PRIMEIRA SAÍDA.`.bold);
    					char.upSkillVida(100);
    					hora = avancahora(hora, 0.1);
    				} else if (r5 == 1) {
    					console.log(`HIHIHI HEHE HAHAHAHA!! AS CAVALARIÇAS DE ÁUGIAS FOI UM DOS TRABALHOS DE HÉRCULES!\nPOR SUA INSOLÊNCIA TOME ISTO: EXPLOSÃO GALÁTICAAA!`.bold);
    					let danoG = [(sagaGemeos.ataque * sagaGemeos.cosmos) * Math.random(sagaGemeos.setimosent)] / 2;
    					char.diminuiVida(danoG);
    					hora = avancahora(hora, 0.3)
    				} else if (r5 != 1 && r5 != 2) {
    					console.log(`RESPONDA 1 OU 2 APENAS`.white.bgRed.bold);
    				}
    			}
    			console.log();
    			let ponto = 0;

    			if (r1 === 1) {
    				ponto++;
    			}

    			if (r2 === 2) {
    				ponto++;
    			}

    			if (r3 === 2) {
    				ponto++;
    			}

    			if (r4 === 1) {
    				ponto++;
    			}

    			if (r5 === 2) {
    				ponto++;
    			}
    			console.log();
    			if (ponto === 0) {
    				console.log(`Como esperado, você é um fracassado ${(player.toUpperCase())}.\nMORRA AGORA!!!! OOOOOUTRA DIMENSÃÃÃÃOOOOO!!! `.yellow.bold);
    				console.log();
    				prompt(`Pressione ENTER`.red.bold);
    				console.log(`
        
        ⠀⠀⠀⠀⠀⠀⢀⡀⠀⠠⠤⠤⠀⠤⠤⠄⡀⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⢤⣤⣤⣤⣤⣄⣀⣀⣀⣀⣀⡀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⣀⢀⠀⢀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣷⣦⣴⣶⣾⣿⣷⣤⣤⣐⣤⣤⣤⣴⣶⣶⡦⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⣄⣒⣚⣿⣟⣥⣬⣤⣶⣿⣿⣤⣤⣾⣶⣦⡆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣖⠒⠒⠒⠒⠒⠒⠒⠒⠒⢒⡛⣿⣿⢿⢿⡿⣻⣻⣿⡿⡿⠿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠟⠉⣀⣀⠀⠙⢿⡟⢡⠄⠰⠈⠩⣿⠏⠀⢀⠤⠤⠀⠀⠀⠀⠄⢁⠤⠤⡁⠌⠩⠃⠉⠈⠉⠙⢿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣏⣢⡏⠄⠀⠃⠀⡸⡅⢧⡀⠐⠀⣰⠀⠀⠀⢸⣦⡴⠇⠀⠀⠀⡀⠈⠀⠀⡕⣸⡇⠀⠈⠀⠉⣦⠀⢻⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣧⡈⠿⣶⣤⣴⢾⣿⡟⢮⠻⢿⣋⠁⠁⠀⠀⠈⢿⣇⠀⠀⠀⠀⠀⣂⡴⠞⡱⠃⠘⢦⣤⣤⣴⡿⢀⣸⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣄⠀⠉⠉⠉⣉⣉⣡⣭⣖⣤⣌⡁⠂⠀⠀⢾⠏⠀⡠⠐⢈⣁⣤⣒⣉⣉⣁⠐⠒⠛⠉⠉⣠⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⠟⡋⠉⠀⠀⠀⡐⠁⠀⠑⡀⠂⢈⠆⡌⠰⠈⠉⠑⠄⠀⠀⠈⢍⢻⣻⢶⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡄⢈⠙⠫⢟⡟⠀⠀⠀⠀⠀⢶⡄⠢⠤⢃⠄⠘⠀⢇⠰⠤⠌⣠⡆⠀⠀⠀⢒⡫⣶⡿⠿⠛⢉⢸⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡇⠸⣿⣶⣤⡀⠁⡢⠀⠀⠀⢀⠍⠛⠛⠉⠀⠀⠀⠀⠙⠲⠿⣭⠀⠀⠀⢀⡕⠋⣁⣤⣶⣿⠀⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣷⠀⣿⣿⡿⠁⡐⠁⠀⠀⢀⠂⢨⣒⣶⣶⣶⣶⣲⣖⣶⣶⣶⡀⢣⠀⣰⣾⣗⡄⠹⣿⣿⡟⣄⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⠀⢻⡿⠁⡜⠀⠀⠀⢀⠂⢠⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⢣⢾⣿⣿⣿⡄⠹⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⡇⠘⠀⢼⠀⠀⠀⢀⠂⢠⣻⣿⣿⣿⣿⣿⢹⢸⣿⣿⣿⣿⣿⣷⡀⢻⣿⣿⣿⣿⡄⠹⡚⣾⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣇⢀⠎⠀⠀⠀⢀⠂⢠⣿⣿⣿⣿⣿⣿⡇⢸⠀⣿⣿⣿⣿⣿⣿⣧⠀⢛⣿⣿⣿⣿⣴⣭⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⠎⠀⠀⠀⢀⠂⢠⣿⣿⠿⠿⠛⠋⠉⠁⢸⡠⠈⠉⠛⠻⠿⣿⣿⣧⠀⢻⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡿⠄⠀⠀⠀⠈⣿⣯⢿⣿⣽⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠿⠛⠉⠁⠈⠀⠀⠀⠀⠘⣿⣯⠿⠛⠋⠙⠛⢿⣿⣿⠿⠛⠛⠛⠻⢿⣿⡯⠟⠛⠙⠛⠛⠛⠛⠈⠛⠛⠛⠛⢿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⠟⠁⠀⣠⣴⣶⣶⣶⣶⣤⣀⠀⠘⡿⠁⢀⣤⣤⡄⠀⠹⠇⠀⣠⣴⣤⡀⠀⠋⠀⢀⣤⣦⣄⠀⣤⣶⣶⣶⣶⣦⡄⠀⢹⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⡏⠀⢠⣾⣿⣿⠿⠿⠿⢿⣿⡿⠀⠀⠀⢀⣾⣿⣿⣿⡄⠀⠀⠀⣿⣿⣿⣿⣆⠀⣴⣿⣿⣿⣿⢸⣿⣿⣿⠿⠿⠿⠃⠀⣸⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⣿⣿⠃⠀⣠⣤⣤⣤⣄⠀⠀⠀⣾⣿⣿⣿⣿⣿⡀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣤⣤⣤⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⣿⣿⡀⠀⢿⣿⣿⣿⣿⡇⠀⣼⣿⣿⣏⣘⣿⣿⣷⡀⠀⣿⣿⣿⡏⠻⣿⠟⢹⣿⣿⣿⢸⣿⣿⣿⠿⠿⠿⠃⠀⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⡆⠀⠹⣿⣿⣿⣦⣤⣤⣿⣿⣿⡇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⣿⣿⣿⡇⠀⠁⠀⢸⣿⣿⣿⢸⣿⣿⣿⣀⣀⣀⡀⠈⢿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣆⠀⠈⠻⢿⣿⣿⣿⣿⡿⠟⠀⠻⣿⡿⠁⠀⠀⠀⢻⣿⡿⠁⢿⣿⣿⠃⠀⠀⠀⠸⣿⣿⡿⠈⢿⣿⣿⣿⣿⣿⠇⠀⢸⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⡏⠀⠀⣠⣶⣿⣿⣿⣿⣿⣶⣄⠀⠀⣾⣿⣦⠀⠀⠀⢀⣶⣿⣷⢠⣾⣿⣿⣿⣿⣿⡆⢰⣿⣿⣿⣿⣿⣷⣦⡀⠀⢠⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⡏⠀⢀⣾⣿⣿⡿⠛⠛⠛⢿⣿⣿⣧⠀⢿⣿⣿⣧⠀⠀⣾⣿⣿⡟⢸⣿⣿⣿⠛⠛⠛⠁⢸⣿⣿⡏⠉⠙⣿⣿⣷⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⢸⣿⣿⡟⠀⢠⣦⠀⠈⣿⣿⣿⠀⠈⢿⣿⣿⣧⣼⣿⣿⡟⠀⢸⣿⣿⣿⣶⣶⣶⠀⢸⣿⣿⣧⣤⣴⣿⣿⠏⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠸⣿⣿⣷⡀⠈⠁⠀⢠⣿⣿⣿⠀⠀⠈⢿⣿⣿⣿⣿⡿⠁⠀⢸⣿⣿⣿⠛⠛⠛⠀⢸⣿⣿⡿⣿⣿⣿⣇⠀⠀⢿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣷⠀⠀⠻⣿⣿⣿⣶⣶⣾⣿⣿⡿⠃⠀⣀⠀⠘⣿⣿⣿⡿⠁⠀⠀⢸⣿⣿⣿⣶⣶⣦⡄⢸⣿⣿⡇⠈⢿⣿⣿⣷⠀⠈⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣷⣄⠀⠈⠙⠻⠿⠿⠿⠛⠋⠀⢀⣴⣾⣆⠀⠘⠿⠟⠁⠀⣴⠀⠈⠻⠿⠿⠿⠿⠿⠃⠘⠿⠿⠃⠀⠀⠙⠿⠋⠀⢠⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠁⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠉⠉⠉⠁⠀⠀⠀⠀⠀
        
        `)
    				console.log();
    				char.vida = 0
    					console.log();
    				break gameOver;
    			} else if (ponto === 1 || ponto === 2) {
    				console.log(`Seu conhecimento ainda é raso, por isso você irá deixar este mundo hoje.\n\nEXPLOSÃO GALÁTICA!!!!`.yellow.bold);
    				char.vida = 0
    					console.log();
    				prompt(`Pressione ENTER`.red.bold);
    				console.log(`
        
        ⠀⠀⠀⠀⠀⠀⢀⡀⠀⠠⠤⠤⠀⠤⠤⠄⡀⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⢤⣤⣤⣤⣤⣄⣀⣀⣀⣀⣀⡀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⣀⢀⠀⢀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣷⣦⣴⣶⣾⣿⣷⣤⣤⣐⣤⣤⣤⣴⣶⣶⡦⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⣄⣒⣚⣿⣟⣥⣬⣤⣶⣿⣿⣤⣤⣾⣶⣦⡆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣖⠒⠒⠒⠒⠒⠒⠒⠒⠒⢒⡛⣿⣿⢿⢿⡿⣻⣻⣿⡿⡿⠿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠟⠉⣀⣀⠀⠙⢿⡟⢡⠄⠰⠈⠩⣿⠏⠀⢀⠤⠤⠀⠀⠀⠀⠄⢁⠤⠤⡁⠌⠩⠃⠉⠈⠉⠙⢿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣏⣢⡏⠄⠀⠃⠀⡸⡅⢧⡀⠐⠀⣰⠀⠀⠀⢸⣦⡴⠇⠀⠀⠀⡀⠈⠀⠀⡕⣸⡇⠀⠈⠀⠉⣦⠀⢻⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣧⡈⠿⣶⣤⣴⢾⣿⡟⢮⠻⢿⣋⠁⠁⠀⠀⠈⢿⣇⠀⠀⠀⠀⠀⣂⡴⠞⡱⠃⠘⢦⣤⣤⣴⡿⢀⣸⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣄⠀⠉⠉⠉⣉⣉⣡⣭⣖⣤⣌⡁⠂⠀⠀⢾⠏⠀⡠⠐⢈⣁⣤⣒⣉⣉⣁⠐⠒⠛⠉⠉⣠⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⠟⡋⠉⠀⠀⠀⡐⠁⠀⠑⡀⠂⢈⠆⡌⠰⠈⠉⠑⠄⠀⠀⠈⢍⢻⣻⢶⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡄⢈⠙⠫⢟⡟⠀⠀⠀⠀⠀⢶⡄⠢⠤⢃⠄⠘⠀⢇⠰⠤⠌⣠⡆⠀⠀⠀⢒⡫⣶⡿⠿⠛⢉⢸⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡇⠸⣿⣶⣤⡀⠁⡢⠀⠀⠀⢀⠍⠛⠛⠉⠀⠀⠀⠀⠙⠲⠿⣭⠀⠀⠀⢀⡕⠋⣁⣤⣶⣿⠀⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣷⠀⣿⣿⡿⠁⡐⠁⠀⠀⢀⠂⢨⣒⣶⣶⣶⣶⣲⣖⣶⣶⣶⡀⢣⠀⣰⣾⣗⡄⠹⣿⣿⡟⣄⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⠀⢻⡿⠁⡜⠀⠀⠀⢀⠂⢠⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⢣⢾⣿⣿⣿⡄⠹⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⡇⠘⠀⢼⠀⠀⠀⢀⠂⢠⣻⣿⣿⣿⣿⣿⢹⢸⣿⣿⣿⣿⣿⣷⡀⢻⣿⣿⣿⣿⡄⠹⡚⣾⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣇⢀⠎⠀⠀⠀⢀⠂⢠⣿⣿⣿⣿⣿⣿⡇⢸⠀⣿⣿⣿⣿⣿⣿⣧⠀⢛⣿⣿⣿⣿⣴⣭⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⠎⠀⠀⠀⢀⠂⢠⣿⣿⠿⠿⠛⠋⠉⠁⢸⡠⠈⠉⠛⠻⠿⣿⣿⣧⠀⢻⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡿⠄⠀⠀⠀⠈⣿⣯⢿⣿⣽⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠿⠛⠉⠁⠈⠀⠀⠀⠀⠘⣿⣯⠿⠛⠋⠙⠛⢿⣿⣿⠿⠛⠛⠛⠻⢿⣿⡯⠟⠛⠙⠛⠛⠛⠛⠈⠛⠛⠛⠛⢿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⠟⠁⠀⣠⣴⣶⣶⣶⣶⣤⣀⠀⠘⡿⠁⢀⣤⣤⡄⠀⠹⠇⠀⣠⣴⣤⡀⠀⠋⠀⢀⣤⣦⣄⠀⣤⣶⣶⣶⣶⣦⡄⠀⢹⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⡏⠀⢠⣾⣿⣿⠿⠿⠿⢿⣿⡿⠀⠀⠀⢀⣾⣿⣿⣿⡄⠀⠀⠀⣿⣿⣿⣿⣆⠀⣴⣿⣿⣿⣿⢸⣿⣿⣿⠿⠿⠿⠃⠀⣸⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⣿⣿⠃⠀⣠⣤⣤⣤⣄⠀⠀⠀⣾⣿⣿⣿⣿⣿⡀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣤⣤⣤⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⣿⣿⡀⠀⢿⣿⣿⣿⣿⡇⠀⣼⣿⣿⣏⣘⣿⣿⣷⡀⠀⣿⣿⣿⡏⠻⣿⠟⢹⣿⣿⣿⢸⣿⣿⣿⠿⠿⠿⠃⠀⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⡆⠀⠹⣿⣿⣿⣦⣤⣤⣿⣿⣿⡇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⣿⣿⣿⡇⠀⠁⠀⢸⣿⣿⣿⢸⣿⣿⣿⣀⣀⣀⡀⠈⢿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣆⠀⠈⠻⢿⣿⣿⣿⣿⡿⠟⠀⠻⣿⡿⠁⠀⠀⠀⢻⣿⡿⠁⢿⣿⣿⠃⠀⠀⠀⠸⣿⣿⡿⠈⢿⣿⣿⣿⣿⣿⠇⠀⢸⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⡏⠀⠀⣠⣶⣿⣿⣿⣿⣿⣶⣄⠀⠀⣾⣿⣦⠀⠀⠀⢀⣶⣿⣷⢠⣾⣿⣿⣿⣿⣿⡆⢰⣿⣿⣿⣿⣿⣷⣦⡀⠀⢠⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⡏⠀⢀⣾⣿⣿⡿⠛⠛⠛⢿⣿⣿⣧⠀⢿⣿⣿⣧⠀⠀⣾⣿⣿⡟⢸⣿⣿⣿⠛⠛⠛⠁⢸⣿⣿⡏⠉⠙⣿⣿⣷⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⢸⣿⣿⡟⠀⢠⣦⠀⠈⣿⣿⣿⠀⠈⢿⣿⣿⣧⣼⣿⣿⡟⠀⢸⣿⣿⣿⣶⣶⣶⠀⢸⣿⣿⣧⣤⣴⣿⣿⠏⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠸⣿⣿⣷⡀⠈⠁⠀⢠⣿⣿⣿⠀⠀⠈⢿⣿⣿⣿⣿⡿⠁⠀⢸⣿⣿⣿⠛⠛⠛⠀⢸⣿⣿⡿⣿⣿⣿⣇⠀⠀⢿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣷⠀⠀⠻⣿⣿⣿⣶⣶⣾⣿⣿⡿⠃⠀⣀⠀⠘⣿⣿⣿⡿⠁⠀⠀⢸⣿⣿⣿⣶⣶⣦⡄⢸⣿⣿⡇⠈⢿⣿⣿⣷⠀⠈⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣷⣄⠀⠈⠙⠻⠿⠿⠿⠛⠋⠀⢀⣴⣾⣆⠀⠘⠿⠟⠁⠀⣴⠀⠈⠻⠿⠿⠿⠿⠿⠃⠘⠿⠿⠃⠀⠀⠙⠿⠋⠀⢠⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠁⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠉⠉⠉⠁⠀⠀⠀⠀⠀
        
        `)
    				console.log();
    				break gameOver;
    				console.log();
    				break;
    			} else if (ponto === 3) {
    				console.log(`Você não deveria usar esta armadura. Mal sabe a história por trás dela. Por isso vagará para sempre em meu labirinto.`.yellow.bold);
    				char.vida = 0
    					console.log();
    				prompt(`Pressione ENTER`.red.bold);
    				console.log(`
        
        ⠀⠀⠀⠀⠀⠀⢀⡀⠀⠠⠤⠤⠀⠤⠤⠄⡀⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⢤⣤⣤⣤⣤⣄⣀⣀⣀⣀⣀⡀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⣀⢀⠀⢀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣷⣦⣴⣶⣾⣿⣷⣤⣤⣐⣤⣤⣤⣴⣶⣶⡦⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⣄⣒⣚⣿⣟⣥⣬⣤⣶⣿⣿⣤⣤⣾⣶⣦⡆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣖⠒⠒⠒⠒⠒⠒⠒⠒⠒⢒⡛⣿⣿⢿⢿⡿⣻⣻⣿⡿⡿⠿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠟⠉⣀⣀⠀⠙⢿⡟⢡⠄⠰⠈⠩⣿⠏⠀⢀⠤⠤⠀⠀⠀⠀⠄⢁⠤⠤⡁⠌⠩⠃⠉⠈⠉⠙⢿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣏⣢⡏⠄⠀⠃⠀⡸⡅⢧⡀⠐⠀⣰⠀⠀⠀⢸⣦⡴⠇⠀⠀⠀⡀⠈⠀⠀⡕⣸⡇⠀⠈⠀⠉⣦⠀⢻⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣧⡈⠿⣶⣤⣴⢾⣿⡟⢮⠻⢿⣋⠁⠁⠀⠀⠈⢿⣇⠀⠀⠀⠀⠀⣂⡴⠞⡱⠃⠘⢦⣤⣤⣴⡿⢀⣸⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣄⠀⠉⠉⠉⣉⣉⣡⣭⣖⣤⣌⡁⠂⠀⠀⢾⠏⠀⡠⠐⢈⣁⣤⣒⣉⣉⣁⠐⠒⠛⠉⠉⣠⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⠟⡋⠉⠀⠀⠀⡐⠁⠀⠑⡀⠂⢈⠆⡌⠰⠈⠉⠑⠄⠀⠀⠈⢍⢻⣻⢶⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡄⢈⠙⠫⢟⡟⠀⠀⠀⠀⠀⢶⡄⠢⠤⢃⠄⠘⠀⢇⠰⠤⠌⣠⡆⠀⠀⠀⢒⡫⣶⡿⠿⠛⢉⢸⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡇⠸⣿⣶⣤⡀⠁⡢⠀⠀⠀⢀⠍⠛⠛⠉⠀⠀⠀⠀⠙⠲⠿⣭⠀⠀⠀⢀⡕⠋⣁⣤⣶⣿⠀⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣷⠀⣿⣿⡿⠁⡐⠁⠀⠀⢀⠂⢨⣒⣶⣶⣶⣶⣲⣖⣶⣶⣶⡀⢣⠀⣰⣾⣗⡄⠹⣿⣿⡟⣄⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⠀⢻⡿⠁⡜⠀⠀⠀⢀⠂⢠⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⢣⢾⣿⣿⣿⡄⠹⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⡇⠘⠀⢼⠀⠀⠀⢀⠂⢠⣻⣿⣿⣿⣿⣿⢹⢸⣿⣿⣿⣿⣿⣷⡀⢻⣿⣿⣿⣿⡄⠹⡚⣾⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣇⢀⠎⠀⠀⠀⢀⠂⢠⣿⣿⣿⣿⣿⣿⡇⢸⠀⣿⣿⣿⣿⣿⣿⣧⠀⢛⣿⣿⣿⣿⣴⣭⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⠎⠀⠀⠀⢀⠂⢠⣿⣿⠿⠿⠛⠋⠉⠁⢸⡠⠈⠉⠛⠻⠿⣿⣿⣧⠀⢻⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡿⠄⠀⠀⠀⠈⣿⣯⢿⣿⣽⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠿⠛⠉⠁⠈⠀⠀⠀⠀⠘⣿⣯⠿⠛⠋⠙⠛⢿⣿⣿⠿⠛⠛⠛⠻⢿⣿⡯⠟⠛⠙⠛⠛⠛⠛⠈⠛⠛⠛⠛⢿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⠟⠁⠀⣠⣴⣶⣶⣶⣶⣤⣀⠀⠘⡿⠁⢀⣤⣤⡄⠀⠹⠇⠀⣠⣴⣤⡀⠀⠋⠀⢀⣤⣦⣄⠀⣤⣶⣶⣶⣶⣦⡄⠀⢹⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⡏⠀⢠⣾⣿⣿⠿⠿⠿⢿⣿⡿⠀⠀⠀⢀⣾⣿⣿⣿⡄⠀⠀⠀⣿⣿⣿⣿⣆⠀⣴⣿⣿⣿⣿⢸⣿⣿⣿⠿⠿⠿⠃⠀⣸⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⣿⣿⠃⠀⣠⣤⣤⣤⣄⠀⠀⠀⣾⣿⣿⣿⣿⣿⡀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣤⣤⣤⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⣿⣿⡀⠀⢿⣿⣿⣿⣿⡇⠀⣼⣿⣿⣏⣘⣿⣿⣷⡀⠀⣿⣿⣿⡏⠻⣿⠟⢹⣿⣿⣿⢸⣿⣿⣿⠿⠿⠿⠃⠀⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⡆⠀⠹⣿⣿⣿⣦⣤⣤⣿⣿⣿⡇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⣿⣿⣿⡇⠀⠁⠀⢸⣿⣿⣿⢸⣿⣿⣿⣀⣀⣀⡀⠈⢿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣆⠀⠈⠻⢿⣿⣿⣿⣿⡿⠟⠀⠻⣿⡿⠁⠀⠀⠀⢻⣿⡿⠁⢿⣿⣿⠃⠀⠀⠀⠸⣿⣿⡿⠈⢿⣿⣿⣿⣿⣿⠇⠀⢸⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⡏⠀⠀⣠⣶⣿⣿⣿⣿⣿⣶⣄⠀⠀⣾⣿⣦⠀⠀⠀⢀⣶⣿⣷⢠⣾⣿⣿⣿⣿⣿⡆⢰⣿⣿⣿⣿⣿⣷⣦⡀⠀⢠⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⡏⠀⢀⣾⣿⣿⡿⠛⠛⠛⢿⣿⣿⣧⠀⢿⣿⣿⣧⠀⠀⣾⣿⣿⡟⢸⣿⣿⣿⠛⠛⠛⠁⢸⣿⣿⡏⠉⠙⣿⣿⣷⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⢸⣿⣿⡟⠀⢠⣦⠀⠈⣿⣿⣿⠀⠈⢿⣿⣿⣧⣼⣿⣿⡟⠀⢸⣿⣿⣿⣶⣶⣶⠀⢸⣿⣿⣧⣤⣴⣿⣿⠏⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠸⣿⣿⣷⡀⠈⠁⠀⢠⣿⣿⣿⠀⠀⠈⢿⣿⣿⣿⣿⡿⠁⠀⢸⣿⣿⣿⠛⠛⠛⠀⢸⣿⣿⡿⣿⣿⣿⣇⠀⠀⢿⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣷⠀⠀⠻⣿⣿⣿⣶⣶⣾⣿⣿⡿⠃⠀⣀⠀⠘⣿⣿⣿⡿⠁⠀⠀⢸⣿⣿⣿⣶⣶⣦⡄⢸⣿⣿⡇⠈⢿⣿⣿⣷⠀⠈⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣿⣷⣄⠀⠈⠙⠻⠿⠿⠿⠛⠋⠀⢀⣴⣾⣆⠀⠘⠿⠟⠁⠀⣴⠀⠈⠻⠿⠿⠿⠿⠿⠃⠘⠿⠿⠃⠀⠀⠙⠿⠋⠀⢠⣿⣿⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠁⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠉⠉⠉⠁⠀⠀⠀⠀⠀
        
        `)
    				console.log();
    				break gameOver;
    				console.log();
    				break;
    			} else if (ponto === 4) {
    				console.log(`Até que você não foi mal, ${(player.toUpperCase())}, Mesmo passando do meu Labirinto, você não será capaz de enfrentar nós, os Cavaleiros de Ouro.`.yellow.bold);
    				char.diminuiVida(50);
    				console.log();
    				break;
    			} else if (ponto === 5) {
    				console.log(`Não posso acreditar, você conseguiu escapar do meu labirinto.`.yellow.bold);
    				char.upSkillVida(150)
    				console.log();
    				break;
    			}
    		} else { //CHAVE IF
    			lab == false
				console.log(`Digite o nome Corretamente.`.red.bold);
    		} // CHAVE ELSE
    	} // CHAVE WHILE
    	// FIM DO LABRINTO
    	//PAINEL DE STATUS
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.clear();
    	console.log();
    	console.log(`Seu Ataque agora é: ${char.ataque}`.green.bold);
    	console.log();
    	console.log(`Sua Defesa agora é: ${char.defesa}`.magenta.bold);
    	console.log();
    	console.log(`Sua Resistência agora é: ${char.resistencia}`.cyan.bold);
    	console.log();
    	console.log(`Seu Cosmos agora é: ${char.cosmos}`.blue.bold);
    	console.log();
    	console.log(`Seu Sétimo Sentido agora é: ${char.setimosent}`.grey.bold);
    	console.log();
    	console.log(`Sua vida agora é: ${char.vida}`.grey.bold);
    	console.log();
    	console.log(`Restam ${(hora.toFixed(1))} horas.`.red.bold);
    	console.log();
    	//FIM DO PAINEL DE STATUS
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	//INÍCIO DA CAMINHADA PARA CASA DE CÂNCER
    	console.clear();
    	console.log();
    	console.log(`Não posso acreditar que passei pelo Labirinto de Gêmeos.

    Não consigo deixar de pensar no adversário terrível que ele é. 

    Mesmo sem sua presença física, dominou o espaço e o tempo da Terceira Casa de forma inimaginável.

    Será que este é mesmo o nível dos Cavaleiros de Ouro?`.blue.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar`.yellow.bold);
    	console.log();
    	console.log(`Ali, já consigo enxergar a entrada da Casa de Câncer.

    Mas o que é isso espalhado por todas as paredes, teto e chão?

    Não posso acreditar!!!!!!

    `.blue.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.clear();
    	console.log(`

    São ossadas humanas!!????


                    ┌───── •✧✧• ─────┐
                    -CASA DE CÂNCER- 
                    └───── •✧✧• ─────┘

    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠤⠤⠤⠤⠤⠄⢀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠤⠖⠉⠀⠀⠀⠀⠀⠃⢐⠀⠀⢰⠘⣿⣶⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⡠⠐⠈⠀⠀⠀⠔⢀⠀⠠⠀⠀⠸⠈⡰⠀⠀⢀⠀⢪⣙⢛⣿⣿⣆⣄⡀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⢀⡄⠚⠁⠀⠀⠀⠈⠁⠀⠀⠀⠀⠁⠀⠐⠀⠈⠈⢡⢀⠁⠀⠀⡄⠨⣽⣿⣿⣿⣆⣀⠀⠀⠀⠀
    ⠀⠀⠀⡠⠥⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢃⠀⠀⠀⠀⠀⢹⢿⣿⣿⣿⣿⣦⡀⠀⠀
    ⠀⢀⠌⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⢄⠀⠀⠀⠀⠀⠀⠠⠄⣀⡀⠤⡗⢛⣿⣿⣿⣿⣷⡀⠀
    ⠀⡞⠀⢠⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⠀⠀⢀⢰⠀⠀⠀⠀⠀⠀⢄⡀⡽⡙⢪⣧⣿⣿⣿⣿⣿⣿⣇⠀
    ⠰⠀⠀⠸⠀⠀⠀⠀⠘⠠⠬⠀⠀⠀⠀⠀⠀⠀⠀⠎⠀⠀⠀⠀⠀⠬⢄⢀⣠⠟⢄⠹⣻⣿⣿⣿⣿⣿⣿⡀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⢀⠀⠀⠀⠀⠂⠀⠀⠀⡤⠀⠱⠈⠑⠌⠀⠀⠑⡽⣿⣿⣿⣿⣿⣿⡇
    ⢸⠆⠀⢱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⡇
    ⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣀⣀⢄⢸⢆⣐⣂⣀⠀⠀⢀⠀⠁⠀⠀⠀⠀⠈⠁⢐⣿⣿⣿⣿⣿⣿⣿⡇
    ⠐⠀⠀⢰⠬⠀⠀⢀⣠⣦⣼⣿⠿⣿⢿⡷⢶⣮⣠⣄⣠⣪⣷⣾⣿⣷⢷⢶⣶⣴⠶⡘⠝⠟⠻⣿⣿⣿⣿⡇
    ⠀⡁⠀⠔⠀⣠⣤⣿⣿⣿⣿⣿⣿⣿⣿⡮⢿⣟⣿⣿⣿⣽⣿⣿⣿⣷⠛⠛⠛⠛⠒⠚⢷⣶⣿⣿⣧⠀⠙⠁
    ⠀⡁⠀⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⡻⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⣿⡿⣿⣿⡀⠀⠀
    ⠀⣏⣬⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⢻⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⢈⣿⡅⣿⣿⡇⠀⠀
    ⠀⠳⢸⣽⡿⣿⣿⣿⣿⣹⣿⣿⠉⣿⡋⢛⣿⣿⣿⣿⣿⢚⣿⣇⠀⠀⠀⠀⠀⠀⠀⢠⣿⢧⢳⣿⣿⠇⠀⠀
    ⠀⠈⣿⣿⣻⡻⠻⢅⣿⣿⣿⣿⣟⣿⣟⢹⣀⣿⣿⣿⡿⠀⢻⣿⣿⣿⣦⣤⣀⣤⣴⣼⣕⣥⣿⣿⣿⣤⠀⠀
    ⠀⠀⠘⣿⡫⡐⠻⣻⣿⡟⠛⠹⠯⠿⢿⣾⢿⡉⠀⠀⠀⠀⠈⢾⣿⣿⣿⣿⣿⣷⣶⣿⢿⣿⣿⣿⣿⣿⠇⠀
    ⠀⠀⠀⢹⣦⣕⡤⢿⣄⠀⠀⠀⢀⠀⠀⢈⠪⡇⠀⠀⠀⠀⠀⢸⢻⣿⣿⣿⣿⣿⣿⣽⣼⡿⣿⣿⣿⡟⠀⠀
    ⠀⠀⠀⠀⠙⣙⢿⡿⢿⣷⡄⠀⢘⠀⡀⢘⠀⣿⣤⣄⣠⣦⣤⣤⢿⣿⣿⣿⡇⣿⣧⣿⣿⣷⣿⠟⠋⠁⠀⠀
    ⠀⠀⠀⠀⠀⠀⠉⠃⠀⠈⢻⡖⡘⢐⠁⠸⠀⡟⠙⡝⠛⣿⠹⣫⣿⣿⣿⣿⣷⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⡟⢱⡦⢱⢨⣗⢸⣤⡈⢹⢼⠉⣾⣏⢹⣿⣿⣿⣟⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠋⠚⠓⠛⠚⠻⠼⢿⡯⣾⣼⠧⠼⠚⣿⣏⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠻⠿⠿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀


    `.blue.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.clear();
    	console.log();
    	console.log(`Pare aí mesmo se quiser viver, Cavaleiro!

    Ou então, junte-se aos meus milhares de companheiros que adormecem aqui na Quarta Casa.

    Não é uma escolha muito difícil, e até mesmo um cavaleiro de tão baixa classe conseguiria escolher o mais racional, AHUHAUHAUHAUHAUHA!

    `.yellow.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar`.yellow.bold);
    	console.log();
    	console.log(`Você quer dizer que todos estes crânios são de humanos de verdade?

    Nã.. O que... Não acredito no que vejo....

    São crânios de crianças? Você por um acaso é mesmo um Cavaleiro de Athena?

    `.blue.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar`.yellow.bold);
    	console.log();
    	console.log(`Essas cabeças são a prova da minha força. Em outras palavras são minhas medalhas.

    Em uma guerra se evita lançar bomba em crianças e mulheres? É exatamente a mesma coisa!`.yellow.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar`.yellow.bold);
    	console.clear();
    	console.log();
    	console.log(`Seu desgraçado, como pode ser um Cavaleiro que serve à Justiça de Athena sendo um assassino sanguinário?

    Como ousa usar esta armadura?`.blue.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar`.yellow.bold);
    	console.log();
    	console.log(`As definições de justiça mudam com o passar do tempo, isso é uma coisa que a história já provou.

    O que eu fiz pode ser diabólico, mas vencendo, isso será o justo. Ou seja, o errado pode se tornar o certo. Se perder, você passa a ser o injusto.`.yellow.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar`.yellow.bold);
    	console.log();
    	console.clear();
    	console.log(`Seu tolo!!! A injustiça nunca se tornará justiça. E é a própria história humana que prova que isso é verdade.

    Os Impérios que possuiam exércitos poderosos, mas foram injustos, foram derrotados e sumiram do fluxo história.

    Este é o destino das forças do mal. O mal nunca deixará de ser o que é.

    O bem é uma coisa que não muda por mais que o tempo passe, ninguém pode alterar esta verdade nesta grande correnteza da vida`.blue.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar`.yellow.bold);
    	console.clear();
    	console.log();
    	console.log(`Eu admiro você, que é capaz de dar uma lição de moral ao seu algoz.

    Mas não há mais tempo para conversa fiada.

    MORRAAAAA!!!

    SEKISHIKI MEIKAI HA! (ONDAS DO INFERNO!)

    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣴⣶⠶⠖⠒⠒⠒⠒⠦⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠶⠒⠈⣠⣾⣿⠛⠉⠀⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠞⠋⠁⠀⢀⣠⣼⣿⣿⣷⣾⣿⣿⣿⣿⡿⠿⠿⠿⢿⣦⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡇⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⡄⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠟⠀⠀⠀⠀⣠⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⠾⠟⠛⢿⣿⣿⣿⣿⠿⠛⠉⠁⠀⠀⠀⠀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⣿⣿⣿⡿⠿⠛⠉⢸⣿⡆⠀⠀⠀⠀⣀⠴⠾⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⣀⣀⣀⣀⣠⣤⣶⡾⠿⠛⠉⠁⠀⠀⠀⠀⢸⣿⣧⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠈⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⡇⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣷⣤⣾⣿⣷⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢦⣼⣦⣿⣿⣿⣿⣿⣿⣿⣏⠕⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠠⢽⣿⣿⣿⣿⣿⣿⡿⠿⠕⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⣀⣤⣶⣶⣿⣿⣶⣶⣶⣤⣤⣄⣀⣀⣀⣀⣚⣿⣿⣿⣿⣿⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⣼⣿⡿⠟⠉⢈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⣿⡟⠁⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠐⡏⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠃⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢟⢿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠛⠛⠛⣿⣿⡿⠛⠛⢿⣿⣿⣿⣿⠿⠛⠁⢀⠣⣿⣿⡂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⠁⠀⠀⠀⠉⠉⠉⠀⠀⠀⠀⠀⠙⢻⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀


    `.yellow.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar`.yellow.bold);
    	console.log();
    	console.clear();
    	danoCancer = (mDmCancer.ataque * mDmCancer.cosmos) * (Math.random() * mDmCancer.setimosent);
    	dano = danoCancer;
    	if (dano > char.vida || dano <= 0) {
    		dano = 150
    	} else {
    		dano = dano;
    	};
    	console.log(`O Golpe Sekishiki Meikai Ha é uma habilidade do Cavaleiro de Câncer que, além dos espectros de Hades, levam o oponente até o Sub-Mundo dominado por Hades.

    A técnica não possui defesa física, já que o impacto do golpe atinge diretamente a alma do adversário, arrancando-a do corpo e enviando-a à entrada do mundo dos mortos.
    `.yellow.bold);
    	console.log();
    	console.log('O Dano de Máscara da Morte foi de'.red.bold,  + Math.round(dano));
    	console.log();
    	prompt(`Pressione ENTER para continuar`.yellow.bold);
    	console.log();
    	console.log(`Imediatamente após tomar o Golpe, ${(player.toUpperCase())} sente sua alma abandonar o seu corpo e ser levada às profundezas do inferno.

    ⡏⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⢹
    ⡇⠀⡶⢶⣖⣶⣶⣶⣶⠖⣶⠶⣶⡖⠲⢲⣶⣶⣶⣶⣶⣖⠒⠒⣶⣶⡶⢲⣶⡖⠒⠒⠒⠒⢒⢶⣖⠒⠒⢶⣶⣲⡶⠒⠒⠒⠒⠲⠀⢸
    ⡇⠀⣧⡀⣿⣿⣻⣿⣿⣾⣷⠀⢸⡟⢧⣤⣨⣿⠿⠛⠻⣷⣿⣶⠌⠀⠁⣸⣿⣥⣶⣾⣿⣷⣿⣀⡟⣷⣦⠀⠈⠛⢷⠀⡴⠀⠀⠀⠀⢸
    ⡇⠀⣿⣿⣿⣿⡈⠘⠓⣿⣿⢿⣯⣷⣴⣿⠏⠀⠀⠀⠀⠀⢈⣯⣤⠄⣠⣿⣿⣿⣿⣿⣿⡍⠛⢿⡿⠘⣿⣿⣶⣄⡘⡞⠙⣆⠀⠀⠀⢸
    ⡇⠀⡇⣿⣿⢿⣿⣦⡄⠀⠺⢻⣟⣿⣿⠋⠀⠀⠀⠀⠀⣠⠚⢫⣧⣾⡟⠁⠀⠹⣿⡿⠿⣿⠀⢘⡟⠀⠹⡄⠛⢻⣿⣿⠀⠘⡆⠀⠀⢸
    ⡇⠀⣿⣿⣅⠈⠙⣿⣿⣿⣦⣀⠀⠛⣿⡄⠀⠀⣄⣤⡴⠛⠗⣦⣈⡽⠀⠀⠀⠀⢸⠀⠀⢸⠀⢸⠁⠀⠀⢱⣠⡀⠐⠻⡿⢦⣿⠀⠀⢸
    ⡇⠀⡏⣿⢟⣿⣤⣼⢷⣟⢿⣿⣷⢦⡀⠹⡄⣸⡟⢿⣷⣖⣀⠀⢹⣇⠀⠈⢶⠀⠈⠀⠀⠘⠀⠀⠀⠀⠀⠀⣯⡾⣦⡠⣧⠀⡏⠀⠀⢸
    ⡇⠀⣷⣿⣤⣽⠿⣷⣶⣿⣆⠈⠛⢿⣿⣶⢹⣽⣿⣼⣽⣿⣿⣶⣿⣿⣧⠀⠀⠱⠀⠀⠐⠈⠀⠀⠀⠀⠀⠀⢿⠼⣿⡽⣿⡿⠁⠀⠀⢸
    ⡇⠀⣇⢹⡿⢿⣦⣄⣑⣿⣯⣷⣄⡀⠙⠻⣿⣽⣿⣿⣿⣿⠛⠙⠉⠀⠈⠁⠀⠐⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡄⠈⠒⢸⠀⠀⠀⠀⢸
    ⡇⠀⣿⡷⣦⣾⠛⢛⣿⣿⡿⣿⣿⣿⣶⣄⡀⠙⠿⣿⣿⣦⣤⡤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣧⣤⣸⠀⠀⢀⠀⢸
    ⡇⠀⣿⠏⢻⡇⢀⣿⡿⠋⠀⠀⠙⣿⠿⢿⢿⣷⡶⠾⠛⠛⠉⠀⠀⠀⠀⢀⡀⠤⠄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡿⣿⠀⣠⡾⠀⢸
    ⡇⠀⡏⠀⠀⣥⣠⣿⣇⠀⢀⡀⠀⠸⠀⠈⠇⣿⡇⠀⠀⠀⠀⠀⢀⠠⠊⠁⠀⠀⠀⠀⠑⢄⠀⠀⠀⠀⠀⠀⠀⢸⠛⢽⣿⣾⣿⣿⠀⢸
    ⡇⠀⣷⡆⣄⠙⠳⡛⠟⢷⡀⠈⣈⠀⠀⠀⣴⠟⠃⠀⠀⠀⢀⠔⠁⠀⠀⠀⠀⠀⠀⠀⠀⣸⣷⡀⠀⠀⠀⠀⠀⢸⡶⣌⣿⣿⣿⣧⠀⢸
    ⡇⠀⡏⠳⢿⣷⣦⣝⠶⠤⣑⠀⡈⢁⣠⣶⣧⡀⠀⠀⠀⡠⠊⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣷⠀⠀⠀⠀⠀⢸⡆⢹⠃⢻⣆⠙⠀⢸
    ⡇⠀⣷⣦⣄⡙⠷⣿⣿⡍⠀⠀⣰⣿⠟⠉⠉⠛⢦⣀⠜⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠈⣿⡏⠀⠀⢿⡷⠀⢸
    ⡇⠀⣿⣿⣏⣿⣟⠲⢽⣿⡄⠀⢽⠃⠀⠀⠀⠀⠐⣄⠀⠀⠀⠀⠀⠀⣀⣶⣿⣿⣿⡿⠉⠉⠉⢹⠀⠀⠀⠀⠀⣼⣿⠁⠀⠀⠘⣧⠀⢸
    ⡇⠀⣟⣿⣿⣿⣻⣼⡆⣌⢻⡄⠀⠀⠀⠀⠀⠀⠀⠈⠢⡀⠀⣀⣴⣾⣿⣿⠟⠋⠁⠀⠀⠀⠀⠈⠀⠀⠀⠀⣰⣿⠃⠀⠀⠀⠀⠙⠀⢸
    ⡇⠀⣇⠘⠻⣿⣿⣿⣷⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⠇⠀⠀⠀⠀⠀⠀⠀⢸
    ⡇⠀⣿⣷⣦⡀⠙⠻⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⢸
    ⡇⠀⠯⠿⠿⠿⠷⠦⠤⠽⠿⠿⠿⠿⠦⠤⠤⠤⠤⠤⠤⠤⠤⠤⠼⠦⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠼⠿⠿⠤⠤⠤⠤⠤⠤⠤⠤⠀⢸
    ⣇⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣸

    `.red.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar`.yellow.bold);
    	console.clear();
    	console.log();
    	char.diminuiVida(dano);
    	console.log(`Sua vida agrora é. ${Math.round(char.vida)}`.red.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar`.yellow.bold);
    	console.log();
    	console.log(`Não posso acreditar que estou no Submundo, para onde todas as almas são enviadas após a morte para serem julgadas por Hades.`.blue.bold);
    	console.log();
    	console.log(`Você é um inseto comparado a mim. Não me importo em ao menos saber o seu nome, desde que sua cabeça vá para a decoração da Casa de Câncer`.yellow.bold);
    	console.log();
    	console.log(`Máscara da Morte, eu sou ${(player.toUpperCase())}. Guarde meu nome, pois você descobrirá que até mesmo insetos podem derrubar grandes adversários.`.blue.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.log();
    	let atacar4 = '';
    	ataqueC: for (i = 0; i < 10; i++) {
    		if (player == 'seiya') {
    			console.log(`Câncer, sinta o poder do Pégaso:
        METEOOOOROO DE PÉGASUUUUSS!!!`.blue.bold);
    			console.log();
    		} else if (player == 'shiryu') {
    			console.log(`Câncer, sinta o poder do Dragão:
        CÓLERAAAA DO DRAGÃOOOO!!!`.blue.bold);
    			console.log();
    		} else if (player == 'hyoga') {
    			console.log(`Câncer, sinta o poder do Cisne:
        PÓÓÓÓÓÓ DE DIAMANTEEEE!!!`.blue.bold);
    			console.log();
    		} else if (player == 'shun') {
    			console.log(`Câncer, sinta o poder de Andrômeda:
        CORRENTEEEE DE ANDRÔMEDAAA!!!`.blue.bold);
    			console.log();
    		} else if (player == 'ikki') {
    			console.log(`Câncer, sinta o poder da Fênix:
        AVEEEEEE FÊNIIIIX!!!`.blue.bold);
    			console.log();
    		};
    		do {
    			ataque = (char.ataque * char.cosmos) * (Math.random() * char.setimosent);
    			atacar4 = prompt(`Pressione ENTER para atacar!`.bgRed);
    			defesaC = (mDmCancer.defesa * mDmCancer.resistencia) * (Math.random() * mDmCancer.setimosent);
    			danoC = ataque - defesaC;
    			if (danoC <= 166) {
    				danoC = 167
    			} else if (danoC > 300) {
    				char.upSkillVida(100);
    			};
    			hora = avancahora(hora, 0.1);
    			mDmCancer.diminuiVida(danoC)

    			console.log('Seu ataque foi de :',  + Math.round(ataque));
    			console.log('A defesa de Máscara da Morte foi de : ' + Math.round(defesaC));
    			console.log('Seu dano foi de :',  + Math.round(danoC));
    			console.log('A vida de Máscara da Morte é de :',  + Math.round(mDmCancer.vida));
    			console.log();

    			if (mDmCancer.vida > 0) {
    				ataqueMdM = (mDmCancer.ataque * mDmCancer.cosmos) * (Math.random() * mDmCancer.setimosent);
    				atacar4 = prompt(`Pressione ENTER para se defender`.black.bgRed.bold);
    				defesaCharC = (char.defesa * char.resistencia) * (Math.random() * char.setimosent);
    				danoCharC = ataqueMdM - defesaCharC
    					if (danoCharC <= 0) {
    						danoCharC = 200;
    					}
    					hora = avancahora(hora, 0.1);
    				char.diminuiVida(danoCharC);
    				console.log('O ataque de Máscara da Morte foi de :',  + Math.round(ataqueMdM));
    				console.log('A sua defesa foi de :',  + Math.round(defesaCharC));
    				console.log('Seu dano de Máscara da Morte foi de:',  + Math.round(danoCharC));
    				console.log('A sua vida é de :',  + Math.round(char.vida));
    				console.log();
    			}

    			if (mDmCancer.vida <= 0) {
    				console.log(`"Não Acredito, a armadura de Câncer está me abandonando!!!"

                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢤⠄⠀⠀⣀⡀⠀⢀⣀⠀⠀⠀⠀⠀⠀⢀⠀⠀⢀⡀⠀⠀⢀⠀⠀⠀⠀⠀⢀⣄⠂⠀⣀⣀⠀⠀⣠⠤⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠐⠂⣀⣀⣀⣲⡄⢈⠀⠋⠹⠿⣿⣿⣿⣦⣤⣀⣤⣤⣦⣶⣤⣜⣧⣤⢤⣾⣧⣤⣄⣤⣴⣿⣿⡿⠿⣛⣓⣬⣷⣶⣀⣶⣶⣶⠖⠂⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠈⠛⣿⣿⣿⣿⣿⣿⣶⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⢿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣶⣾⣿⣿⣿⣿⣿⣿⣯⣿⡉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⢠⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣧⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠐⠆⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⢀⡠⢠⣿⣿⣿⣿⣾⣟⡿⠿⠿⠟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡯⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣆⣀⡂⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⣠⡚⣷⣿⣿⣿⣿⣿⣿⣿⣷⡄⠙⠀⠻⠿⠿⠋⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢟⠻⠛⢉⠡⠂⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠈⠁⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠨⣿⣿⣿⠋⡩⣿⣿⣿⣿⣿⣶⣶⣆⢀⡀⠄⠀⠀⠀⠈⠉⠉⠉⠉⠉⢉⣡⣔⠈⡀⠄⠂⠀⠀⣀⣾⣿⣿⣿⣿⣿⣿⣿⡿⠋⠹⢿⣿⣦⡬⠆⠀⠀⠀
                ⠀⠀⠀⢀⠄⣼⣿⣿⡇⠐⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣿⢂⡀⠀⠀⡀⠀⠀⢐⣾⣿⣿⣿⣷⣶⣶⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡆⠀⠈⣻⣿⣧⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠘⣿⣿⡇⠰⠼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⢦⠅⢁⣠⣤⣤⣼⡟⠻⠋⠙⠿⣽⣷⣿⣿⣿⣿⣿⣿⣿⠏⣱⣿⣿⡟⡜⡟⠀⠀⢸⣿⣿⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠹⣿⣷⡀⠀⠉⡟⣽⠻⣿⣿⣿⣿⣿⣿⣿⡇⡌⣴⣿⡿⣿⣿⠿⠇⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⡿⢃⣠⣾⠿⠋⡷⠀⠁⠀⠀⣾⡿⠁⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠙⠳⠀⠀⠀⠈⠀⠀⠉⠙⠛⢿⣧⠀⡀⢱⡟⠃⠀⠀⠀⠀⣴⣤⣴⣿⣿⣿⣿⣿⣿⣏⣿⠟⠀⠈⠁⠀⠀⠀⠁⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠾⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⢉⣿⣿⡿⠋⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠴⠼⠶⠿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        


                "Isso não é Justo!!!"`.yellow.bold);
    				char.upSkillAtaque(10)
    				console.log();
    				hora = avancahora(hora, 0.5);
    				char.upSkillVida(200)
    				break ataqueC;
    			} else if (mDmCancer.vida > 0) {
    				console.log(`Você é muito insolente, ${(player.toUpperCase())}. Como ousa me atacar com um poder tão baixo.`.yellow.bold);
    				console.log();
    			} else if (char.vida <= 0) {
    				console.log(`Eu te avisei que não era páreo para mim. Morra de uma vez. Caia no Poço das Almas e desapareça para sempre.`.yellow.bold);
    				console.log();
    				console.log(`
        
                    ⠀⠀⠀⠀⠀⠀⢀⡀⠀⠠⠤⠤⠀⠤⠤⠄⡀⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⢤⣤⣤⣤⣤⣄⣀⣀⣀⣀⣀⡀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⣀⢀⠀⢀⠀⠀⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣷⣦⣴⣶⣾⣿⣷⣤⣤⣐⣤⣤⣤⣴⣶⣶⡦⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⣄⣒⣚⣿⣟⣥⣬⣤⣶⣿⣿⣤⣤⣾⣶⣦⡆⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣖⠒⠒⠒⠒⠒⠒⠒⠒⠒⢒⡛⣿⣿⢿⢿⡿⣻⣻⣿⡿⡿⠿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠟⠉⣀⣀⠀⠙⢿⡟⢡⠄⠰⠈⠩⣿⠏⠀⢀⠤⠤⠀⠀⠀⠀⠄⢁⠤⠤⡁⠌⠩⠃⠉⠈⠉⠙⢿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣏⣢⡏⠄⠀⠃⠀⡸⡅⢧⡀⠐⠀⣰⠀⠀⠀⢸⣦⡴⠇⠀⠀⠀⡀⠈⠀⠀⡕⣸⡇⠀⠈⠀⠉⣦⠀⢻⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣧⡈⠿⣶⣤⣴⢾⣿⡟⢮⠻⢿⣋⠁⠁⠀⠀⠈⢿⣇⠀⠀⠀⠀⠀⣂⡴⠞⡱⠃⠘⢦⣤⣤⣴⡿⢀⣸⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣄⠀⠉⠉⠉⣉⣉⣡⣭⣖⣤⣌⡁⠂⠀⠀⢾⠏⠀⡠⠐⢈⣁⣤⣒⣉⣉⣁⠐⠒⠛⠉⠉⣠⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⠟⡋⠉⠀⠀⠀⡐⠁⠀⠑⡀⠂⢈⠆⡌⠰⠈⠉⠑⠄⠀⠀⠈⢍⢻⣻⢶⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡄⢈⠙⠫⢟⡟⠀⠀⠀⠀⠀⢶⡄⠢⠤⢃⠄⠘⠀⢇⠰⠤⠌⣠⡆⠀⠀⠀⢒⡫⣶⡿⠿⠛⢉⢸⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡇⠸⣿⣶⣤⡀⠁⡢⠀⠀⠀⢀⠍⠛⠛⠉⠀⠀⠀⠀⠙⠲⠿⣭⠀⠀⠀⢀⡕⠋⣁⣤⣶⣿⠀⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣷⠀⣿⣿⡿⠁⡐⠁⠀⠀⢀⠂⢨⣒⣶⣶⣶⣶⣲⣖⣶⣶⣶⡀⢣⠀⣰⣾⣗⡄⠹⣿⣿⡟⣄⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⠀⢻⡿⠁⡜⠀⠀⠀⢀⠂⢠⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⢣⢾⣿⣿⣿⡄⠹⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⡇⠘⠀⢼⠀⠀⠀⢀⠂⢠⣻⣿⣿⣿⣿⣿⢹⢸⣿⣿⣿⣿⣿⣷⡀⢻⣿⣿⣿⣿⡄⠹⡚⣾⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣇⢀⠎⠀⠀⠀⢀⠂⢠⣿⣿⣿⣿⣿⣿⡇⢸⠀⣿⣿⣿⣿⣿⣿⣧⠀⢛⣿⣿⣿⣿⣴⣭⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⠎⠀⠀⠀⢀⠂⢠⣿⣿⠿⠿⠛⠋⠉⠁⢸⡠⠈⠉⠛⠻⠿⣿⣿⣧⠀⢻⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡿⠄⠀⠀⠀⠈⣿⣯⢿⣿⣽⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠿⠛⠉⠁⠈⠀⠀⠀⠀⠘⣿⣯⠿⠛⠋⠙⠛⢿⣿⣿⠿⠛⠛⠛⠻⢿⣿⡯⠟⠛⠙⠛⠛⠛⠛⠈⠛⠛⠛⠛⢿⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣿⣿⣿⠟⠁⠀⣠⣴⣶⣶⣶⣶⣤⣀⠀⠘⡿⠁⢀⣤⣤⡄⠀⠹⠇⠀⣠⣴⣤⡀⠀⠋⠀⢀⣤⣦⣄⠀⣤⣶⣶⣶⣶⣦⡄⠀⢹⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣿⣿⡏⠀⢠⣾⣿⣿⠿⠿⠿⢿⣿⡿⠀⠀⠀⢀⣾⣿⣿⣿⡄⠀⠀⠀⣿⣿⣿⣿⣆⠀⣴⣿⣿⣿⣿⢸⣿⣿⣿⠿⠿⠿⠃⠀⣸⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⣿⣿⠃⠀⣠⣤⣤⣤⣄⠀⠀⠀⣾⣿⣿⣿⣿⣿⡀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣤⣤⣤⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⣿⣿⡀⠀⢿⣿⣿⣿⣿⡇⠀⣼⣿⣿⣏⣘⣿⣿⣷⡀⠀⣿⣿⣿⡏⠻⣿⠟⢹⣿⣿⣿⢸⣿⣿⣿⠿⠿⠿⠃⠀⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣿⣿⡆⠀⠹⣿⣿⣿⣦⣤⣤⣿⣿⣿⡇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⣿⣿⣿⡇⠀⠁⠀⢸⣿⣿⣿⢸⣿⣿⣿⣀⣀⣀⡀⠈⢿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣿⣿⣿⣆⠀⠈⠻⢿⣿⣿⣿⣿⡿⠟⠀⠻⣿⡿⠁⠀⠀⠀⢻⣿⡿⠁⢿⣿⣿⠃⠀⠀⠀⠸⣿⣿⡿⠈⢿⣿⣿⣿⣿⣿⠇⠀⢸⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣿⣿⣿⡏⠀⠀⣠⣶⣿⣿⣿⣿⣿⣶⣄⠀⠀⣾⣿⣦⠀⠀⠀⢀⣶⣿⣷⢠⣾⣿⣿⣿⣿⣿⡆⢰⣿⣿⣿⣿⣿⣷⣦⡀⠀⢠⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣿⣿⡏⠀⢀⣾⣿⣿⡿⠛⠛⠛⢿⣿⣿⣧⠀⢿⣿⣿⣧⠀⠀⣾⣿⣿⡟⢸⣿⣿⣿⠛⠛⠛⠁⢸⣿⣿⡏⠉⠙⣿⣿⣷⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⢸⣿⣿⡟⠀⢠⣦⠀⠈⣿⣿⣿⠀⠈⢿⣿⣿⣧⣼⣿⣿⡟⠀⢸⣿⣿⣿⣶⣶⣶⠀⢸⣿⣿⣧⣤⣴⣿⣿⠏⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠸⣿⣿⣷⡀⠈⠁⠀⢠⣿⣿⣿⠀⠀⠈⢿⣿⣿⣿⣿⡿⠁⠀⢸⣿⣿⣿⠛⠛⠛⠀⢸⣿⣿⡿⣿⣿⣿⣇⠀⠀⢿⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣿⣿⣷⠀⠀⠻⣿⣿⣿⣶⣶⣾⣿⣿⡿⠃⠀⣀⠀⠘⣿⣿⣿⡿⠁⠀⠀⢸⣿⣿⣿⣶⣶⣦⡄⢸⣿⣿⡇⠈⢿⣿⣿⣷⠀⠈⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⣿⣿⣿⣷⣄⠀⠈⠙⠻⠿⠿⠿⠛⠋⠀⢀⣴⣾⣆⠀⠘⠿⠟⠁⠀⣴⠀⠈⠻⠿⠿⠿⠿⠿⠃⠘⠿⠿⠃⠀⠀⠙⠿⠋⠀⢠⣿⣿⣿⠀⠀⠀⠀⠀
            ⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠁⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠉⠉⠉⠁⠀⠀⠀⠀⠀
                    
                    `)
    				console.log();
    				console.log(`Aperte CTRL + C paa sair do jogo.`.red.bold)
    				break gameOver;
    			} else {
    				console.log(`Você ainda não me derrotou, Máscara da Morte.`.blue.bold)
    			}

    		} while (true); // FIM DO do{
    	} //FIM DO label: AtaqueC
    	if (char.vida <= 0) {
    		break gameOver;
    	}
    	if (hora <= 0) {
    		break gameOver;
    	}
    	console.log();
    	console.log(`A sua vida é de:`.red.bold,  + Math.round(char.vida));
    	console.log();
    	console.log(`Restam ${(hora.toFixed(1))} horas.`.red.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar`.yellow.bold);
    	console.clear();
    	console.log();
    	console.log(`Que homem terrível foi Máscara da Morte. Espero que em sua pós-vida ele possa entender realmente o que significa ser Cavaleiro de Athena.

O próximo adversário é Aiolos de Leão. Será bom ver um rosto amigo.`.blue.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.log(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⣽⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡇⠀⠀⠀⠀⣀⡄⣢⣤⣶⣿⣷⣆⣀⡀⠀⢀⡄⢀⣄⠀⢸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣧⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣆⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣣⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢢⣭⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⡜⠳⠋⠛⠛⠻⠋⠋⠫⣽⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣦⡄⠀⢀⡄⠀⢠⣴⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠶⢿⣿⣿⣿⣿⣿⡃⠀⠀⠀⠀⣼⣿⣿⣿⣿⣤⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠷⣶⣿⣿⣿⣿⣿⣿⣇⡀⠙⠋⢀⣻⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠀⠀
⠀⠀⣿⣿⣧⡂⠉⣉⣉⣉⡙⠛⠀⠂⠂⠀⠒⠀⠠⠄⢰⣿⣿⢿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⣿⡇⡁⡀⠠⠄⠐⠂⠀⠀⠚⠋⠉⢙⣙⡉⠛⠃⠀⣼⣿⣿⠀⠀
⠀⠀⢼⣿⣿⣿⣾⣿⣿⣾⣿⣶⣶⣦⣀⡀⠀⠀⠀⠀⠁⠉⢘⢿⣿⣿⣿⣯⠛⢿⣿⠟⣿⣿⣿⣿⡟⡏⠈⠀⠀⠀⠀⠀⢠⢄⣀⣶⣶⣿⣿⣿⣿⣶⣶⣿⣿⡇⠀⠀
⠀⠀⠘⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣤⣤⣤⣄⣿⣿⣿⣿⣿⣿⣄⠀⠀⣰⣿⣿⣿⢿⣿⣷⣶⣭⣥⣵⣶⣶⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⠃⠀⠀
⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⢨⣿⣿⣿⣧⣿⠿⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⠃⠀⠀⠀
⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⣿⢅⢀⣀⠀⣀⠀⠈⠙⠿⣿⣶⣾⠿⠟⡉⠀⣀⡀⠀⣀⠀⣻⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣷⣾⣿⣿⣷⣿⣿⣶⣿⣿⣿⣿⣷⣿⣶⣄⠈⢻⠃⠀⣠⣰⣿⣾⣿⣿⣿⣿⣾⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡿⢿⣿⣿⣿⣿⣿⣿⣿⣟⢛⡿⣿⢿⣟⠛⠉⠛⠿⢿⣿⣷⡀⠬⣾⣿⡿⠿⠛⠈⠫⠿⣿⣿⢿⣟⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠀⠀⠀⠀⠀⠀⠀


⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠀⣀⣀⠀⢀⣀⡀⠀⠀⠀⢀⣠⣤⣤⣤⣀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣀⡀⠀⠀⠀⣠⣴⣶⣶⣦⣄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣾⣿⣿⣆⠀⠀⠀⣾⣿⣿⣷⡀⠀⣠⣾⣿⣿⡇⣿⣿⣿⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⡆⠀⣴⣿⣿⣿⣿⣿⣿⣿⣦⡀⠸⣿⡿⠿⢿⣿⣿⡇⠀⠀⠀
⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⡄⠀⠀⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⡇⣿⣿⣿⢀⣿⣿⣿⠋⠀⣀⣈⣉⣉⠀⣼⣿⣿⡟⠁⠀⠀⠹⣿⣿⣷⠀⠀⠀⣤⣾⣿⡿⠃⠀⠀⠀
⠀⠀⠀⠀⣼⣿⣿⣇⣿⣿⣿⡄⠀⣿⣿⣿⡟⢿⣿⡿⢻⣿⣿⡇⣿⣿⣿⢸⣿⣿⣿⠀⠸⣿⣿⣿⣿⡇⣿⣿⣿⡀⠀⠀⠀⠀⣿⣿⣿⠀⠀⢸⣿⣿⡏⠀⠀⠀⠀⠀
⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⣿⡇⠀⠋⠀⢸⣿⣿⡇⣿⣿⣿⠀⢿⣿⣿⣦⣄⣈⣽⣿⣿⡇⠹⣿⣿⣷⣄⣀⣠⣼⣿⣿⡟⠀⠀⢀⣤⣤⡀⠀⠀⠀⠀⠀
⠀⠀⠀⢿⣿⡿⠉⠉⠉⠹⣿⣿⠇⢻⣿⣿⠇⠀⠀⠀⢸⣿⣿⠇⢿⣿⣿⠀⠀⠛⢿⣿⣿⣿⣿⣿⡿⠃⠀⠙⠿⣿⣿⣿⣿⣿⠿⠋⠀⠀⠀⠸⣿⣿⠇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`.red.bold)
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.clear();
    	console.log();
    	console.log(`
                        ┌───── •✧✧• ─────┐
                           -CASA DE LEÃO- 
                        └───── •✧✧• ─────┘

⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⣋⣵⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠟⣛⣋⣩⣥⣴⣾⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢛⣉⣶⣿⣿⣿⣿⠿⠿⠛⣛⣋⣭⣭⣴⣶⠾⠿⠟⠛⠛⠋⠉⠉⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠟⠛
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⣋⠴⠾⠟⣛⣋⣭⣭⣶⡶⠾⠟⠟⠛⠙⠉⠁⠀⣀⣀⣠⣤⣤⠴⠶⠖⠛⣿⢿⣯⣭⣥⣤⣶⣶⣶⣾⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣯⣴⠶⠾⠞⠛⠛⠉⠉⠁⣀⣀⣠⣤⣤⡴⠶⠖⠛⠛⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⣻⣿⣿⣿⠛⠋⠉⠉⣉⣀⣀⣠
⣿⣿⣿⣿⣿⣿⣿⣿⣟⣃⣤⠤⠴⠶⠒⠛⠋⠉⠉⠁⠀⠀⠀⠀⠀⠀⣀⣀⡠⠤⠤⢤⣶⣖⣀⡉⠩⣬⣿⣿⣿⣷⣶⡿⠿⠛⠛⠛⠋⠉
⣿⡿⠿⠿⢟⣛⣛⣩⡍⠀⠀⠀⠀⠀⣀⣀⣀⡤⠤⣤⣴⣶⣶⣿⣿⣿⣿⣴⢖⢤⣜⣿⣿⣿⡱⠊⢿⣿⣿⣿⣿⣿⣿⣓⣀⣀⣤⣤⡤⠴
⠶⠶⠿⠛⠛⠛⠉⠉⢲⣒⠒⠊⣽⣿⣿⣶⡢⠤⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⢺⣿⣿⣿⡇⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣦⣿⣿⣷⡖
⣀⣤⠤⠤⠶⠒⠚⠛⠉⠁⠈⠹⣿⣿⣿⣿⠀⠈⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢸⣿⣿⣿⡇⠀⠀⡟⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⡷
⣀⣀⣀⣤⣤⣤⠴⠶⠖⠂⠀⢠⣿⣿⣿⡇⠀⠀⣮⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢸⣿⣿⣿⡇⠀⠀⡇⣿⣿⣿⣿⣿⠐⣿⣿⣿⣿⣿⣷
⣿⡗⠀⢶⣿⣿⣿⠄⡾⠀⠀⣸⣿⣿⣿⠃⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢸⣿⣿⣿⡇⠀⠀⠃⠿⠿⠿⣿⣿⠀⢿⣿⣿⣿⣿⣿
⣿⠇⠀⡸⣿⣿⡿⠀⡇⠀⢀⣿⣿⣿⣿⠀⠀⢸⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢸⣿⣿⣿⠁⠦⠶⣰⠋⠑⢆⡎⡻⡃⢸⣿⣿⣿⣿⣿
⡟⠀⠀⢿⣿⣿⠇⢰⠀⠀⢸⣿⣿⣿⡇⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⢸⣿⣿⣿⢔⠖⢀⣿⢈⣦⢠⣷⣧⣆⢸⣿⣿⣿⣿⣿
⠇⠀⠸⣾⣿⡿⠀⡄⠀⠀⣦⣿⣿⣿⠇⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿⡧⡠⣭⣽⣿⠊⡟⢸⣽⣯⡇⡞⣿⣿⣿⣿⣿
⠀⠀⢳⣿⣿⠇⢀⠀⠀⢠⣹⡟⠉⣿⠀⠀⠀⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⢸⣿⣿⣿⠺⢿⡏⡃⣾⠃⢹⣿⣟⣽⠏⣿⣿⣿⣿⣿
⠀⠘⣾⣿⡟⠀⠈⠀⠀⣈⡿⠀⢰⡏⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠘⣿⣿⣿⣇⠀⡐⣸⢹⣶⣾⣿⣿⣿⠍⣿⣿⣿⣿⣿
⠀⢰⣿⣿⠃⠀⠀⠀⠀⢻⡇⠀⢸⠇⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⣿⣿⣿⡏⢘⣦⣫⢞⣵⣿⠛⣿⣿⡓⠻⣿⣿⣿⣿
⠐⣾⣿⡟⠀⠈⠀⠀⠀⣿⠀⠀⣿⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⡄⣿⣿⣿⠁⣞⢿⣹⢟⣿⣿⠀⠉⣯⠞⢠⣿⣿⣿⣿
⢰⣿⣿⠃⠀⠀⠀⠀⢶⡇⠀⢸⡏⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠃⠿⠃⠀⠂⠆⠀⠉⠽⠿⠏⠆⠠⠿⠧⠾⢿⣿⣿⣿
⣾⣿⡿⠀⠀⠀⠀⢠⣼⠁⠀⣸⠃⠀⠀⠐⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢤⣤⣤⣤⣄⣀⣄⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣠⣿⣿⣿


`.yellow.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.clear();
    	console.log();
    	console.log(`Aiolia, sou eu, ${(player.toUpperCase())}!!\n\nComo é bom te reencontrar, velho amigo. Eu gostaria de te conversar um pouco mais com você, mas a Saori... Quero dizer... Athena, está em perigo, e preciso chegar ao salão do Grande Mestre e...\n\nAAAAAHHHHHHHHH.`.blue.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.log();
    	console.log(`Antes mesmo que ${(player.toUpperCase())} terminasse a frase, Aiolia de Leão o atinge com seu golpe mais poderoso.\n\nLIGHTNING PLASMA (RELÂMPAGO DE PLASMA)`.red.bold);
    	char.diminuiVida(100); // PERDE 100 DE VIDA
    	console.log(`${(player.toUpperCase())} foi atingido com muita violência por Aiolia.\nSua vida agora é de ${Math.round(char.vida)}`);
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.log();
    	console.log(`Aiolia, por que você me atacou desta forma? Não somos amigos?`.blue.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar.`.yellow.bold);
    	console.log(``);
    	//INÍCIO BATALHA DE LEÃO
    	batalhaLeao: for (i = 0; i < 10; i++) {
    		// FUNÇÕES PARA A BATALHA NA CASA DE LEÃO
    		function ataqueLeo() {
    			let ataqueL = [(aioliaLeao.ataque * aioliaLeao.cosmos) * (Math.random() * aioliaLeao.setimosent)] / 2;
    			let danoL = ataqueL - [(char.defesa * char.resistencia) * (Math.random() * char.setimosent)];
    			if (danoL <= 0) {
    				danoL = 100;
    			}
    			return danoL;
    		}
    		function ataqueCh() {
    			let ataqueCha = (char.ataque * char.cosmos) * Math.random(char.setimosent);
    			let danoCha = ataqueCha - [(aioliaLeao.defesa * aioliaLeao.resistencia) * (Math.random() * aioliaLeao.setimosent) / 3];
    			if (danoCha <= 0) {
    				danoCha = 400;
    			}
    			return danoCha;
    		}; // FIM DAS FUNÇÕES DE BATALHA NA CASA DE LEÃO
    		do {
    			prompt(`PRESSIONE ENTER PARA ATACAR`.white.bgRed.bold);
    			console.log();
    			if (player == 'seiya') {
    				console.log(`METEOOOROOO DE PÉGASUUUUS`.blue.bold)
    				console.log();
    			} else if (player == 'shiryu') {
    				console.log(`CÓLERA DO DRAGÃOOOO`.blue.bold);
    				console.log();
    			} else if (player == 'hyoga') {
    				console.log(`PÓÓÓÓÓ DE DIAMANTEEEE`.blue.bold);
    				console.log();
    			} else if (player == 'shun') {
    				console.log(`CORRENTEEEE DE ANDRÔMEDAAAA`.blue.bold);
    				console.log();
    			} else if (player == 'ikki') {
    				console.log(`AVEEE FÊNIIIIIX`.blue.bold);
    				console.log();
    			}
    			ataqueCh();
    			aioliaLeao.diminuiVida(ataqueCh());
    			console.log(`Você causou ${Math.round(ataqueCh())}. A vida do Leão é de ${Math.round(aioliaLeao.vida)} pontos.`.red.bold);

    			if (aioliaLeao.vida <= 0) {
    				console.log(`Você conseguiu, derrubou o Leão.`.yellow.bold);
    				console.log();
    				hora = avancahora(hora, 0.3);
    				break batalhaLeao;
    			}
    			if (aioliaLeao.vida > 0) {
    				prompt(`PRESSIONE ENTER PARA DEFENDER-SE DE AIOLIA`.white.bgBlue.bold);
    				console.log(`LIGHTNING PLASMA (RELAMPAGO DE PLASMA)`.black.bgYellow.bold);
    				ataqueLeo();
    				char.diminuiVida(ataqueLeo());
    				hora = avancahora(hora, 0.1);
    				console.log(`O ataque de Aiolia causou ${Math.round(ataqueLeo())}. Sua vida agora é de ${Math.round(char.vida)} pontos`.red.bold);
    				console.log();
    			}
    			if (char.vida < 0) {
    				console.log(`
            
            ⠀⠀⠀⠀⠀⠀⢀⡀⠀⠠⠤⠤⠀⠤⠤⠄⡀⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⢤⣤⣤⣤⣤⣄⣀⣀⣀⣀⣀⡀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⣀⢀⠀⢀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣷⣦⣴⣶⣾⣿⣷⣤⣤⣐⣤⣤⣤⣴⣶⣶⡦⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⣄⣄⣒⣚⣿⣟⣥⣬⣤⣶⣿⣿⣤⣤⣾⣶⣦⡆⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣖⠒⠒⠒⠒⠒⠒⠒⠒⠒⢒⡛⣿⣿⢿⢿⡿⣻⣻⣿⡿⡿⠿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠟⠉⣀⣀⠀⠙⢿⡟⢡⠄⠰⠈⠩⣿⠏⠀⢀⠤⠤⠀⠀⠀⠀⠄⢁⠤⠤⡁⠌⠩⠃⠉⠈⠉⠙⢿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣏⣢⡏⠄⠀⠃⠀⡸⡅⢧⡀⠐⠀⣰⠀⠀⠀⢸⣦⡴⠇⠀⠀⠀⡀⠈⠀⠀⡕⣸⡇⠀⠈⠀⠉⣦⠀⢻⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣧⡈⠿⣶⣤⣴⢾⣿⡟⢮⠻⢿⣋⠁⠁⠀⠀⠈⢿⣇⠀⠀⠀⠀⠀⣂⡴⠞⡱⠃⠘⢦⣤⣤⣴⡿⢀⣸⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣄⠀⠉⠉⠉⣉⣉⣡⣭⣖⣤⣌⡁⠂⠀⠀⢾⠏⠀⡠⠐⢈⣁⣤⣒⣉⣉⣁⠐⠒⠛⠉⠉⣠⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⠟⡋⠉⠀⠀⠀⡐⠁⠀⠑⡀⠂⢈⠆⡌⠰⠈⠉⠑⠄⠀⠀⠈⢍⢻⣻⢶⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡄⢈⠙⠫⢟⡟⠀⠀⠀⠀⠀⢶⡄⠢⠤⢃⠄⠘⠀⢇⠰⠤⠌⣠⡆⠀⠀⠀⢒⡫⣶⡿⠿⠛⢉⢸⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡇⠸⣿⣶⣤⡀⠁⡢⠀⠀⠀⢀⠍⠛⠛⠉⠀⠀⠀⠀⠙⠲⠿⣭⠀⠀⠀⢀⡕⠋⣁⣤⣶⣿⠀⣾⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣷⠀⣿⣿⡿⠁⡐⠁⠀⠀⢀⠂⢨⣒⣶⣶⣶⣶⣲⣖⣶⣶⣶⡀⢣⠀⣰⣾⣗⡄⠹⣿⣿⡟⣄⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⠀⢻⡿⠁⡜⠀⠀⠀⢀⠂⢠⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⢣⢾⣿⣿⣿⡄⠹⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⡇⠘⠀⢼⠀⠀⠀⢀⠂⢠⣻⣿⣿⣿⣿⣿⢹⢸⣿⣿⣿⣿⣿⣷⡀⢻⣿⣿⣿⣿⡄⠹⡚⣾⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣇⢀⠎⠀⠀⠀⢀⠂⢠⣿⣿⣿⣿⣿⣿⡇⢸⠀⣿⣿⣿⣿⣿⣿⣧⠀⢛⣿⣿⣿⣿⣴⣭⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⠎⠀⠀⠀⢀⠂⢠⣿⣿⠿⠿⠛⠋⠉⠁⢸⡠⠈⠉⠛⠻⠿⣿⣿⣧⠀⢻⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⡿⠄⠀⠀⠀⠈⣿⣯⢿⣿⣽⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠿⠛⠉⠁⠈⠀⠀⠀⠀⠘⣿⣯⠿⠛⠋⠙⠛⢿⣿⣿⠿⠛⠛⠛⠻⢿⣿⡯⠟⠛⠙⠛⠛⠛⠛⠈⠛⠛⠛⠛⢿⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣿⣿⣿⠟⠁⠀⣠⣴⣶⣶⣶⣶⣤⣀⠀⠘⡿⠁⢀⣤⣤⡄⠀⠹⠇⠀⣠⣴⣤⡀⠀⠋⠀⢀⣤⣦⣄⠀⣤⣶⣶⣶⣶⣦⡄⠀⢹⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣿⣿⡏⠀⢠⣾⣿⣿⠿⠿⠿⢿⣿⡿⠀⠀⠀⢀⣾⣿⣿⣿⡄⠀⠀⠀⣿⣿⣿⣿⣆⠀⣴⣿⣿⣿⣿⢸⣿⣿⣿⠿⠿⠿⠃⠀⣸⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⣿⣿⠃⠀⣠⣤⣤⣤⣄⠀⠀⠀⣾⣿⣿⣿⣿⣿⡀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣤⣤⣤⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⣿⣿⣿⡀⠀⢿⣿⣿⣿⣿⡇⠀⣼⣿⣿⣏⣘⣿⣿⣷⡀⠀⣿⣿⣿⡏⠻⣿⠟⢹⣿⣿⣿⢸⣿⣿⣿⠿⠿⠿⠃⠀⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣿⣿⡆⠀⠹⣿⣿⣿⣦⣤⣤⣿⣿⣿⡇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⣿⣿⣿⡇⠀⠁⠀⢸⣿⣿⣿⢸⣿⣿⣿⣀⣀⣀⡀⠈⢿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣿⣿⣿⣆⠀⠈⠻⢿⣿⣿⣿⣿⡿⠟⠀⠻⣿⡿⠁⠀⠀⠀⢻⣿⡿⠁⢿⣿⣿⠃⠀⠀⠀⠸⣿⣿⡿⠈⢿⣿⣿⣿⣿⣿⠇⠀⢸⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣿⣿⣿⡏⠀⠀⣠⣶⣿⣿⣿⣿⣿⣶⣄⠀⠀⣾⣿⣦⠀⠀⠀⢀⣶⣿⣷⢠⣾⣿⣿⣿⣿⣿⡆⢰⣿⣿⣿⣿⣿⣷⣦⡀⠀⢠⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣿⣿⡏⠀⢀⣾⣿⣿⡿⠛⠛⠛⢿⣿⣿⣧⠀⢿⣿⣿⣧⠀⠀⣾⣿⣿⡟⢸⣿⣿⣿⠛⠛⠛⠁⢸⣿⣿⡏⠉⠙⣿⣿⣷⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⢸⣿⣿⡟⠀⢠⣦⠀⠈⣿⣿⣿⠀⠈⢿⣿⣿⣧⣼⣿⣿⡟⠀⢸⣿⣿⣿⣶⣶⣶⠀⢸⣿⣿⣧⣤⣴⣿⣿⠏⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠸⣿⣿⣷⡀⠈⠁⠀⢠⣿⣿⣿⠀⠀⠈⢿⣿⣿⣿⣿⡿⠁⠀⢸⣿⣿⣿⠛⠛⠛⠀⢸⣿⣿⡿⣿⣿⣿⣇⠀⠀⢿⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣿⣿⣷⠀⠀⠻⣿⣿⣿⣶⣶⣾⣿⣿⡿⠃⠀⣀⠀⠘⣿⣿⣿⡿⠁⠀⠀⢸⣿⣿⣿⣶⣶⣦⡄⢸⣿⣿⡇⠈⢿⣿⣿⣷⠀⠈⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣿⣿⣿⣷⣄⠀⠈⠙⠻⠿⠿⠿⠛⠋⠀⢀⣴⣾⣆⠀⠘⠿⠟⠁⠀⣴⠀⠈⠻⠿⠿⠿⠿⠿⠃⠘⠿⠿⠃⠀⠀⠙⠿⠋⠀⢠⣿⣿⣿⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠁⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠉⠉⠉⠁⠀⠀⠀⠀⠀
            
            `.yellow.bold);
    				console.log();
    				console.log(`VOCÊ FOI DERROTADO POR AIOLIA DE LEÃO.`.black.bgWhite.bold);
    				break batalhaLeao; //COLOCAR A LABEL gameOver
    			}
    		} while (true)
    	} //FIM DO for BATALHA DE LEÃO.
    	if (char.vida <= 0) {
    		break gameOver;
    	}
    	if (hora <= 0) {
    		break gameOver;
    	}
    	console.log();
    	console.log(`Restam ${(hora.toFixed(1))} horas para o Relógio do Zodíaco apagar.`.red.bold);
    	console.log();
    	prompt(`Pressione ENTER para continuar`.yellow.bold);
    	console.log();
    	console.clear();
    	console.log();
    	console.log(`${(player.toUpperCase())}, o que está acontecendo? O que você faz aqui?`.yellow.bold);
    	console.log();
    	console.log(`${(player.toUpperCase())}: """O Semblante de Aiolia mudou"""\n\nAiolia, você está bem?\n `.blue.bold);
    	console.log(`${(player.toUpperCase())}, eu sei o que aconteceu com Aiolia.\n `.magenta.italic.bold);
    	console.log(`${(player.toUpperCase())}:

⠀⢀⠞⠙⠁⡔⠀⣀⠙⢿⡿⠋⠉⠀⠀⢰⢢⣈⡕⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠚⠛⠛⠻⢧⠑⣭⣂⣹⡻⠡⢒⠘⢿⣿⣧⠀⠀⠀
⠀⠀⠀⠀⢸⠀⡼⠻⢷⢆⠘⢄⠀⠀⠀⠈⠁⠀⡇⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡆⢹⠙⢻⠣⣳⠁⢹⠘⣿⣿⣷⡀⠀
⠀⠀⠀⠀⢸⠀⡇⢀⠇⢀⣿⡀⠫⡀⠀⠀⠀⢰⠃⣸⠀⠀⣄⣀⠤⠔⠒⠒⠒⠒⠤⢄⣀⠀⠀⠀⠙⡀⢷⣯⢲⣿⣷⢻⠀⣇⠉⠈⠉⠂
⠀⠀⠀⠀⢸⠀⣇⣀⣴⡿⠋⠙⡖⡱⡀⠀⠀⡜⢀⢇⡤⠚⣁⡤⠴⢒⣒⣚⣒⣒⣒⡠⢌⡳⠲⢄⡀⢣⠈⣟⡎⠉⡀⢰⡆⣾⣷⣄⠀⠀
⠀⠀⠀⠀⠸⡀⡇⢀⡟⠀⢤⣀⠘⣼⠱⠀⢰⠁⡼⢁⡴⣪⠥⠒⢋⣉⣠⡤⠤⠤⣄⣈⣙⠛⢷⣤⣛⣾⡀⢻⢿⠉⡌⢺⠀⡿⢿⡉⠁⠀
⠀⠀⠀⠀⠀⡇⢱⡏⢠⠂⢄⡙⠦⣹⡇⣧⠎⢸⣳⡿⠋⣠⢴⣚⡅⡟⠀⢷⡄⣀⣇⠆⡏⠑⣦⣜⢝⢿⣧⢘⡧⠙⡌⡞⢸⠀⠀⡇⠀⠀
⠀⠀⠀⠀⠀⠸⡀⢣⡇⣠⠀⠙⣔⠙⣷⣿⠀⣿⠏⣲⠋⣿⣿⡅⡼⠃⠀⢸⣏⣷⣷⣰⠃⠀⠸⣇⣽⣷⡽⣾⡥⠤⣿⢁⠇⠐⣰⠧⠤⠀
⠀⠀⠀⠀⠀⠀⢳⡀⢣⡓⠘⠲⠯⣦⠜⡇⢰⡟⣹⠟⢲⣿⡿⠟⠳⠶⠶⢾⣿⡿⡾⠿⢶⠖⢪⣿⠟⠁⣟⣿⡆⣹⣁⡾⠴⠊⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢒⣷⡀⠱⣽⣝⠦⡎⣧⡇⢸⣽⣫⣴⣾⡿⠿⠿⣶⣄⢀⡿⠟⠋⠀⣠⡶⠶⢶⣦⠀⣰⢫⠏⡰⣁⡜⡀⠱⣤⣤⣤⠄⠀
⠀⠀⠀⠀⠀⠀⠀⠘⡍⢦⡈⠻⣬⡿⣿⡇⣸⣸⣿⠘⡜⢧⣄⠄⠙⠀⠀⠀⠀⠀⣴⡿⣇⢀⠀⠃⢀⣟⣿⡺⣩⣾⣿⠁⠀⣿⠿⠤⠤⢤
⠀⠀⠀⣀⠀⠓⣶⣄⣼⢦⡙⠢⣔⣩⣿⢷⠍⠟⣟⠆⠈⠤⠮⠀⠀⠀⠀⠀⠀⠀⢿⣣⢑⡈⠀⠀⢸⣷⣣⢕⣽⠿⢻⣶⡴⠁⠀⠀⠀⠀
⠀⢠⡀⠘⢾⣯⣉⣿⣿⣷⣌⠓⠶⢭⣹⡿⡀⠀⠁⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⡀⠀⠀⠀⣿⠙⣾⡻⠁⠀⡼⠊⠀⠀⠀⠀⠀⠀
⠓⠚⠛⠢⠬⢽⣟⣛⡻⣷⣿⠛⢲⢼⢿⢭⡭⣶⣶⣶⣮⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠁⠀⠀⣠⣿⣧⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠉⣹⢣⢠⣿⣄⡘⢸⣷⢠⢴⠃⢸⡀⠀⠀⠀⠀⠀⠀⢀⠀⠄⠀⠀⠀⣠⠏⢭⡽⣇⡣⢀⠀⠀⢀⠄⠀⠀⠀⡐⢐
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣜⡟⣖⢾⣾⣿⣞⣸⣠⣼⡏⠢⡀⠀⠀⠀⠀⠀⠀⠁⠀⢀⣴⣿⣶⣄⢿⡭⢿⣶⠾⠟⠁⠄⠂⢀⠎⠞⢌
⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣧⡏⢞⣿⠃⣿⣿⢾⣽⡇⠀⠈⠢⣄⠀⠀⠀⠈⠀⡠⠋⢿⣿⣿⣿⣿⣿⢦⡀⢆⢀⠆⢂⢆⢞⣪⣾⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⠡⠤⠿⠿⠿⠻⣇⠀⠀⠀⠈⠙⠲⠄⢀⣼⣧⡀⠈⢙⠻⢿⢿⣿⣿⣼⣽⢿⢞⢏⣴⣾⣿⠁⠀
⣸⢸⢠⢀⢀⢀⠀⠀⠀⠘⣿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⢈⣵⠦⣄⠀⠀⠀⠀⠀⢇⠉⢳⠀⠀⢀⢂⠡⠢⢋⣶⡻⢋⣴⣿⣿⣿⠂⠀⠀
⠭⠙⢿⠿⣺⣾⣼⣺⢸⡴⠃⠀⠀⠀⠠⢄⣀⣄⣀⠀⢀⣾⣿⣶⣷⣿⡆⠀⠀⠀⠀⢀⢞⣧⠡⡣⣵⡶⡻⠯⣫⠗⢿⣿⣿⣻⠋⠀⢀⣾
⣀⠀⠰⠉⢂⠩⢙⠿⣾⠑⠖⢢⠒⢂⠝⠛⠒⡄⠀⠈⠁⢸⠁⠀⠈⣿⣷⡀⠀⢀⡔⡣⢪⠙⣳⣅⣓⣉⡴⠞⣇⠀⠘⣿⣿⡏⠀⢠⣾⣿
⠉⠙⠓⠦⢬⣀⠐⢄⣿⢄⣪⡞⢠⠃⠀⠀⠀⡧⢀⠄⠂⠚⠂⠀⢠⣿⠿⣷⣊⡡⠎⠡⡀⢦⠛⡾⠀⠀⠉⢉⠘⢄⠀⠘⣿⠀⣴⣿⣿⣿
⠤⠤⠐⠒⠉⠉⠙⠲⣿⣡⢶⣲⠀⢑⡒⠒⢉⡠⠂⠀⠀⠀⠀⡠⢹⣏⢆⡈⠙⣆⠘⡄⠑⢁⠎⠀⠀⢀⠀⠀⠀⠈⢣⡀⠘⢿⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⠋⣡⢞⣠⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⢈⢇⠒⡼⡄⢹⡖⣉⢴⠃⡀⡀⣂⠀⠀⠀⠀⠠⠒⠳⡀⠘⣿⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣏⢟⣮⢖⠠⠀⠀⠀⠀⠀⠀⠀⠀⠠⠚⠉⢯⠙⢆⠘⡏⠁⡘⣸⡳⢕⡆⠀⠀⠀⠀⠁⠀⠀⠱⡀⠘⣿⣿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡨⢿⡿⣷⡱⡔⡀⠀⠀⠀⠀⠀⠀⠀⢨⠙⠫⣆⠂⠑⢇⠀⠀⡏⡝⠀⡆⠀⠀⠀⠀⠀⠀⠀⢀⠇⠀⠸⣿⣿


SHAINA DE OPHIÚCO`.blue.bold);
    	hora = avancahora(hora, 0.1);
    	console.log();
    	console.log(`O QUE SERÁ QUE SHAINA DE OPHIÚCO REVELARÁ SOBRE O PRÓXIMO COMPORTAMENTO DE AIOLIA?

QUAIS OS MOTIVOS QUE LEVARAM O CAVALEIRO DE LEÃO A ATACAR SEU AMIGO ${(player.toUpperCase())}.

DESCUBRA NA PRÓXIMA TEMPORADA DE SAINT SEIYA STAIRWAY TO SANCTUARY \n\n\n `.green.bold);
prompt(`Pressione ENTER`.yellow.bold);
console.clear();

console.log(`

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠶⠶⢶⠶⢶⡶⠶⣦⣠⢶⣄⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⡴⠚⠲⣄⠀⣀⣤⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣠⠶⠛⠛⠛⠛⠛⠀⢰⣿⡗⢯⡅⠀⠀⢠⣶⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⣀⠀⠀⣈⡋⢁⡟⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢰⠏⣴⣾⢿⣿⣿⠇⢀⣘⠛⢙⡛⠁⣀⠀⢘⣙⠂⢀⡀⠀⢀⣀⣀⢀⡁⣈⣁⡀⠉⢀⣀⡺⠗⢀⣙⡒⢶⡄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⡟⣸⣿⡏⠀⠀⠀⣼⡟⢻⡷⢸⡇⢰⡟⢰⣿⢻⣷⢸⡇⠀⢸⣿⠉⢸⣷⢹⣏⣿⡇⢿⡏⣿⡆⣿⡍⠁⠘⣷⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡾⢠⣿⡟⠀⠀⠀⢀⣿⣧⣼⡇⢸⣇⣿⠃⢸⣧⣼⣿⢸⡇⠀⢸⣿⠉⠀⣿⢸⣿⠹⣧⢸⣷⢸⣷⠈⠙⠻⣦⢸⣇⠀⠀⠀
⠀⠀⠀⠀⣼⠷⠘⠿⠿⠿⠿⠏⠸⠟⠉⠿⠇⠘⠿⠇⠀⠺⠏⠙⠿⠸⠿⠷⠚⠿⠶⠆⠿⠏⠿⠀⠿⠎⠻⠾⠟⠀⠶⠶⠿⠱⢿⡄⠀⠀
⠀⠀⠀⣸⠃⣰⡶⢶⣶⠄⣴⡶⢶⣦⠀⠀⠀⣶⣶⣶⣶⣶⣶⡆⣰⡶⣶⡄⣶⡶⢶⡄⣾⡇⣰⣶⣶⣄⢠⣶⡶⠶⠀⣶⡶⣦⡜⣧⠀⠀
⠀⠀⢰⡏⢰⣿⠃⣾⡟⢸⣿⠁⣿⡇⠀⠀⠀⠀⠀⢀⣼⣿⠟⠁⣿⡇⢸⣧⢸⣷⢸⣷⢸⣇⢿⣇⠘⣿⡏⣿⡆⠀⠀⢻⣧⢹⣷⢸⣇⠀
⠀⢠⡟⢠⣿⡏⣸⣿⢡⣿⡇⢸⣿⠀⠀⠀⠀⠀⣰⣿⡿⠃⠀⠀⣿⡇⢸⣿⢸⣿⢸⣿⢸⣿⢸⣿⣶⣿⣷⢻⣧⠀⠀⠘⣿⡆⢿⣇⢻⡄
⢀⣾⠁⠛⠛⠛⠛⠁⠈⣛⣛⣛⣁⣀⣀⠀⣠⣾⣿⠋⠀⠀⠀⠀⠙⠿⠿⠋⠘⠿⠿⠛⠘⠿⠚⠿⠀⠘⠿⠊⠛⠿⠿⠇⠉⠻⢿⣋⣼⠇
⠘⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⣻⢧⣿⣿⣿⣿⣿⣿⣿⡇⣿⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠋⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣶⣶⣶⣶⣶⣶⣶⣶⣶⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

BASEADO NA OBRA SAINT SEIYA™ DE MASAMI KURUMADA.
1986.
`.blue.bold);
    	win++;
		break gameOver
    } // FIM DA LABEL PARA BRECAR O JOGO (IF VIDA <= 0 || IF HORA <= 0) ;
	if(win===1){
		break
	}else{
		prompt(``);
		console.log(`Hey, psiu... ${(player.toUpperCase())}\n\nAcho que você não alcançou seu objetivo...\n\nAgora você terá outra oportunidade de recomeçar sua jornada.\nEu sou Cronos, o Titã, e quero ver você reiniciar sua batalha.\nAproveite bem esta oportunidade. Você terá apenas esta chance.`.blue.bold);
		prompt(``); //
		console.clear();
	}

}
