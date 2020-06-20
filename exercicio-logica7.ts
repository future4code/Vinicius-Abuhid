function fatorial(num){
    let result = 1
    if(num < 1){
      throw new Error('Escolha um número maior do que 0')
    }
    else{
      let i = 0
      let aux = 1
      while(i < num){
        result = result * ((num + aux)-num)
        aux ++
        i++
      }
    }
    return result
  }
  
  function fatorial2(num) {
      let result = 1
      if (num < 0) {
          throw new Error('Escolha um número que não seja menor do que 0')
      }
      else {
          if (num === 0) {
          }
          else {
              let i = 0
              let aux = 1
              while (i < num) {
                  result = result * ((num + aux) - num)
                  aux++
                  i++
              }
          }
      }
      return result
  }