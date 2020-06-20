// EXERCÍCIO 5
function setTime(seconds) {
    let time = []
    let unitys = ['s', 'm', 'h']
    if (seconds <= 59) {
        time.push(seconds)
    }
    else {
        while (seconds > 59) {
            if (seconds % 60 !== 0) {
                let result = seconds % 60
                console.log('sou o resto', result)
                time.push(result)
                seconds = seconds - result
            }
            else {
                time.length === 0 ? time.push(0) : ''
                seconds = seconds / 60
                console.log('sou a divisão', seconds)
                time.push(seconds === 60 ? 0 : seconds)
            }
        }
    }
    console.log(time)
    let filteredTime = []
    time.forEach((number, index) => {
        const each = number.toString() + unitys[index]
        console.log(each)
        filteredTime.push(each)
    })
    return filteredTime
}

// EXERCÍCIO 6

function convertString(str){
    let newStr = []
    const array = str.split('')
  
    for(let i = 1; i <= array.length; i++){
      console.log(array[array.length - i])
      newStr += array[array.length -i]
    }
    return newStr
  }
  
  console.log(convertString('escola'))