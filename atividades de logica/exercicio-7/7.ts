function reverseNumbers(num: number): number{
    const str = num <0? (num - (2*num)).toString() :num.toString()
    let reverse = ''
    for(let i = 0; i < str.length; i++){
      reverse = reverse + str[(str.length -1) - i]
    }
    return num > 0? Number(reverse) : Number(reverse)
  }
  console.log(reverseNumbers(210))