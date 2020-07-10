const verifyRepetition = (str) => {
    let = currentLetter = ''
    let newStr = ''
    for(let i = 0; i < str.length -1; i++){
        let formerLetter = str[i - 1] < 0? '': str[i -1]
        currentLetter = formerLetter === str[i]? currentLetter += str[i] : str[i]
        let nextLetter = str[i + 1]
        console.log(formerLetter, currentLetter)
        if(currentLetter !== nextLetter){
            newStr += str[i]
            newStr += currentLetter.length.toString()
        }
    }
    return newStr.length > str.length? str : newStr
}

console.log(verifyRepetition('accurate'))