export function negativeNumbersCounter(arr:Array<Array<number>>){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        for(let a = 0; a < arr[i].length; a++){
            if(arr[i][a] < 0){
                sum+=1
            }
        }
    }
    return sum
}