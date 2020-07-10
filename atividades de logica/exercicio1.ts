// a.
function manipulateNumbers(array){
    let sum = 0
    let multiplication = 1
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }
    for(let i = 0; i < array.length; i++){
        multiplication = multiplication*array[i]
    }
    return {
        sum,
        length: array.length,
        multiplication
    }

}
// b. 
function analyseNumbers(array){
    let biggest = -Infinity
    let smallest = Infinity
    for(let i = 0; i < array.length; i++){
        if(array[i]>biggest){
            biggest = array[i]
        }
    }
    for(let i = 0; i < array.length; i++){
        if(array[i]< smallest){
            smallest = array[i]
        }
    }
    return {
        biggest,
        smallest
    }
}