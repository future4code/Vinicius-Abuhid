function moveZeros(arr:Array<number>){
    const sortedArray = arr.sort()
    let zerosQnt = 0
    let i = 0; 
    while (i < sortedArray.length){
        if(sortedArray[i] === 0){
            sortedArray.splice(i,1)
            zerosQnt = zerosQnt + 1
        }
        else{
            i ++
        }
    }
    for (let a = 0; a <= zerosQnt; a++){
        sortedArray.push(0)
    }
    return zerosQnt
}
