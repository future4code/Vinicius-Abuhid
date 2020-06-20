export interface Character {
    name: string,
    life: number,
    defence: number,
    strenght: number
}

export function validateCharacter(character: Character) {
    if (!character.name || character.name === '') {
        return false
    }
    const characterInfo = [character.life, character.defence, character.strenght]
    for (let i = 0; i <= characterInfo.length - 1; i++) {
        if (characterInfo[i] < 0 || characterInfo[i] === undefined) {
            return false
        }
    }
    return true
}