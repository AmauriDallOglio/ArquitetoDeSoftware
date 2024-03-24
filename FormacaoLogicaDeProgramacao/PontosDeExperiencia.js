class Heroi {
    constructor(nivelMonstro, dificuldadeBatalha) {
        this.nivelMonstro = nivelMonstro;
        this.dificuldadeBatalha = dificuldadeBatalha;
    }

    calcularXP() {
        const XP = this.nivelMonstro * this.dificuldadeBatalha * 100;
        return XP;
    }

    mostrarXP() {
        const XP = this.calcularXP();
        print("Voce ganhou " + XP + " XP!");
    }
}

const nivelMonstro = parseInt(gets());
const dificuldadeBatalha = parseInt(gets());

const heroi = new Heroi(nivelMonstro, dificuldadeBatalha);
heroi.mostrarXP();