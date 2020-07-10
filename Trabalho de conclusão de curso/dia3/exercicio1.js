function printNumbers(number){
    if(number <= 0){
        return
    }
    printNumbers(number -1)
    console.log(number)
}

function printNumbers2(number){
    if(number <= 0){
        return
    }
    console.log(number)
    return printNumbers2(number -1)
}

printNumbers(10)
printNumbers2(10)
