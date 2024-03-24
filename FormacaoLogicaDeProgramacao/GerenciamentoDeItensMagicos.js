// Definição da classe ItemMagico
class ItemMagico {
    constructor(tipo, dano, resistencia) {
        this.tipo = tipo;
        this.dano = dano;
        this.resistencia = resistencia;
    }

    calcularDano() {
        return this.tipo === 'arma' ? this.dano * 2 : this.dano;
    }
}

// Cria um objeto ItemMagico personalizado com base nas entradas do usuário
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite o tipo do item mágico: ', tipoItem => {
    readline.question('Digite o dano do item: ', danoItem => {
        readline.question('Digite a resistência do item: ', resistenciaItem => {
            const itemPersonalizado = new ItemMagico(tipoItem, parseInt(danoItem), parseInt(resistenciaItem));

            // Imprime os atributos do item personalizado
            console.log("Tipo: " + itemPersonalizado.tipo);
            console.log("Dano: " + itemPersonalizado.dano);
            console.log("Resistencia: " + itemPersonalizado.resistencia);

            // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
            const danoTotal = itemPersonalizado.calcularDano();
            console.log("Dano em combate: " + danoTotal);

            readline.close();
        });
    });
});

/*

Descrição
Você é um aventureiro em um mundo mágico cheio de perigos e monstros. Durante suas missões, você coleta diversos itens mágicos, cada um com seus próprios atributos e habilidades especiais. Agora, você está desenvolvendo um sistema aprimorado para gerenciar esses itens. Neste novo sistema, você pode criar diferentes tipos de itens mágicos, como armas, armaduras, poções, entre outros. Cada tipo de item terá atributos específicos e contribuirá de maneiras únicas para suas aventuras.

Tarefa: Crie um objeto que represente um item mágico personalizado. O objeto deve ter atributos como tipo de item, dano e resistência, de acordo com o tipo escolhido. Além disso, crie uma função que calcule o dano causado por um item durante um combate, levando em consideração o tipo de item.

Entrada
Peça ao usuário para digitar o tipo do item mágico que deseja criar, o dano e a resistência

Saída
Imprima o tipo do item, o dano, a resistência e o dano em combate.

Use a função de cálculo de dano para imprimir o dano causado por esse item em um combate simulado. Quando o tipo do item for igual a 'arma' deve-se multiplicar o dano por dois this.dano * 2 e quando não for arma, é retornado no dano this.dano.

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
Espada
200
300	Tipo: Espada
Dano: 200
Resistencia: 300
Dano em combate: 200
Cajado
600
800	Tipo: Cajado
Dano: 600
Resistencia: 800
Dano em combate: 600
Arco
900
500	Tipo: Arco
Dano: 900
Resistencia: 500
Dano em combate: 900

*/