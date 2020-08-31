export function checkTheft(arr: Array<number>){
    let evenHouses = 0
    let i = 0
    while(i < arr.length){
        evenHouses = evenHouses + arr[i]
        i += 2
    }
    let oddHouses = 0
    let y = 1
    while(y < arr.length){
        oddHouses += arr[y]
        y += 2
    }
    return evenHouses > oddHouses ? evenHouses : oddHouses
}

console.log(checkTheft([2,3,6,12,3,9,11,4]))