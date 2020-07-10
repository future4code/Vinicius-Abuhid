function printArrayElements(array, index = 0){
if(index >= array.length){
    return
}
console.log(array[index])
printArrayElements(array, index + 1)
}

printArrayElements([0,1,2,3,4,5,6,48,7])