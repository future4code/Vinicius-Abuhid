function calculateNumbers(number){
    if(number <= 0){
        return number
    }
    return number + calculateNumbers(number -1)
}

const calculateSumTo = (n, acc = 0) => {
    if (n === 0) {
      return acc;
    }
    return calculateSumTo(n - 1, acc + n);
  };

console.log(calculateSumTo(5))
console.log(calculateNumbers(5))