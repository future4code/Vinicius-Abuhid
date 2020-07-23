function pascalTriangle(n: number) {
    let result = []
    for (let i = 0; i < n; i++) {
        if (result.length === 0) {
            result.push([1])
        }
        else {
            let newArr = [1]
            for (let a = 0; a < result[i - 1].length; a++) {
                if(result[i - 1][a + 1]) {
                  newArr.push(result[i - 1][a] + result[i - 1][a + 1] )
                }
            }
            newArr.push(1)
            result.push(newArr)
        }
    }
    return result
}
console.log(3)