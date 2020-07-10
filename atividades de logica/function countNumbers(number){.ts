function countNumbers(number){
  const str = number.toString()
  console.log(str)
  return str[0] === '-'? str.length - 1 : str. length
}