import { validateCharacter, Character } from "./exercicio1";

export function calculateAttack(attacker: Character, defender: Character){
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error('invalid character')
    }
    if(attacker.strenght > defender.defence){
        defender = {
            ...defender,
            life: defender.life - (attacker.strenght - defender.defence)
        }
        return 'new defender status: ' + defender.life
    }
    return 'no damage was suffered'
}

export function calculateAttack2(attacker:Character, defender: Character, validator: (input:Character)=> boolean){
    if(!validator(attacker) || !validator(defender)){
        throw new Error('invalid character')
    }
    if(attacker.strenght > defender.defence){
        defender = {
            ...defender,
            life: defender.life - (attacker.strenght - defender.defence)
        }
        return 'new defender status: ' + defender.life
    }
    return 'no damage was suffered'
}

console.log(calculateAttack2({ name: 'ze', life: 80, defence: 80, strenght: 80 }, 
{name: 'jow', life: 60, defence: 60, strenght: 80}, validateCharacter))