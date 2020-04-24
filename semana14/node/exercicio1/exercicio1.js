
    let opeation = process.argv[2]
    let number1 = process.argv[3]
    let number2 = process.argv[4]
    let result
    switch(opeation){
        case 'add':
            result = Number(number1) + Number(number2)
            console.log(result)
            break;
        case 'sub':
            result = Number(number1) - Number(number2)
            console.log(result)
            break;
        case 'mult':
            result = Number(number1) * Number(number2)
            console.log(result)
            break;
        case 'div':
            result = Number(number1) / Number(number2)
            console.log(result)
            break;
        default:
            console.log("\x1b[35m",
            'Falha na operação. Cheque se os seus argumentos foram passados corretamente ou tente novemente mais tarde...')
    }