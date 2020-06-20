import { Character, validateCharacter } from "./exercicio1";

let fighter1: Character = {
    name: 'Charizard',
    life: 800,
    defence: 750,
    strenght: 1000
}
let fighter2: Character = {
    name: 'Blastoise',
    life: 900,
    defence:800,
    strenght: 800
}
let fighter3: Character = {
    name: 'venaussaur',
    life: 900,
    defence:800,
    strenght: 800
}

function recoverCharactersLifes(fighters: Array<Character>, validator: (input: Character)=>boolean){
    if(fighters.length < 2){
        throw new Error('the wizard does not stop his services to heal less than two fighters')
    }
    fighters.forEach((fighter)=>{
        if(validator(fighter)){
            fighter = {
                ...fighter,
                life: 1500
            }
        }
    })
    return fighters
}

console.log(recoverCharactersLifes([fighter1, fighter2, fighter3], validateCharacter))