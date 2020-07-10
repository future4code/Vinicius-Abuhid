function completeArray(array){
  const sortedArray = array.sort()
  let aux
  let aux2
  for(let i = sortedArray[0]; i < 8; i++){
    console.log('o i entra assim:' + i)
    aux = 0
    aux2 = 0
    while(aux < sortedArray.length){
      if(i === sortedArray[aux]){
        aux2 ++
      }
      aux++
    }
    console.log('o aux 2 sai assim:' + aux2)
    if(aux2 === 0){
      sortedArray.push(i)
    }
  }
  return sortedArray
}

console.log(completeArray([8, 3, 1]))