import { Personagem } from "./personagem.js"

export class Mago extends Personagem{
    elemntoMagico
    levelMagico
    inteligencia
    static tipo = 'Mago'
    static descricao = 'O mago é implacável!'
    constructor(nome, level,elemntoMagico, levelMagico, inteligencia){
        super(nome, level)
        this.elemntoMagico = elemntoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }

    obterInsignia(){
        if(this.levelMagico >=5 && this.inteligencia >=5){
            return`Mestre ${this.elemntoMagico}`
        }
        return super.obterInsignia()
    }
}