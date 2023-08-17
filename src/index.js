import { PersonagemView } from "./components/personagem-view.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { Guerreiro } from "./modules/guerreiro.js";
import { Mago } from "./modules/mago.js";
import { Personagem } from "./modules/personagem.js";

const magoVini = new Mago('Vini', 4, 'Fogo', 4, 3)
const magoXioso = new Mago('Xioso', 4, 'Água', 4, 4)
const arqueiroSnitt = new Arqueiro('Snitt', 4, 4, 4)
const arqueiroMagoNero = new ArqueiroMago ('Nero',4, 4, 4, 4)
const guerreiroBezika = new Guerreiro ('Bezika', 0)

const personagens = [magoVini, magoXioso,arqueiroSnitt, arqueiroMagoNero, guerreiroBezika]

new PersonagemView(personagens).render()

