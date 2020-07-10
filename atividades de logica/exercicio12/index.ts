const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const setSum = async (number: string) => {
    return new Promise((res, rej) => {
        rl.question(number, (answer: any) => {
            rl.close()
            res()
        });
    })
}

const questionMaker = async () => {
    console.log('Isira os números que deseja somar. Ao digitar zero, a soma será calculada')
    let number
    let sum = 0
    while (number !== 0) {
        number = await setSum('')
        sum = sum + number
    }
    return sum
}

console.log(questionMaker())