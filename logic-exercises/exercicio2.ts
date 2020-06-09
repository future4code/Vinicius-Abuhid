function analyseString(word: string){
    const firstLetter = word.slice(0,1)
    const lastLetter = word.slice(word.length - 1)
    const length = word.length
    return {
      firstLetter,
      lastLetter,
      length
    }
  }
  
  function giveCharacters(word: string){
    const characters = word.split('')
    return characters
  }