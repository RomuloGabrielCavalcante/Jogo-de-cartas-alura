import { PersonagemView } from "./components/personagem-view.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { Mago } from "./modules/mago.js";
import { Personagem } from "./modules/personagem.js";

const magoVini = new Mago('Vini', 4, 'Fogo', 4, 3)
const magoXioso = new Mago('Xioso', 8, 'Água', 5, 8)
const arqueiroSnitt = new Arqueiro('Snitt', 8, 'Arqueiro', 5, 5)
const arqueiroMagoNero = new ArqueiroMago ('Nero',5, 6, 9, 10)

const personagens = [magoVini, magoXioso,arqueiroSnitt, arqueiroMagoNero]

new PersonagemView(personagens).render()
console.log(Personagem.verificarVencedor(arqueiroSnitt, magoXioso))