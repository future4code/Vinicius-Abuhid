export function discoveryMissingNumber(array: Array<number>) {
    const sortedArray = array.sort()
    let i = sortedArray[0] - 1
    let aux = 0
    while (i < sortedArray.length) {
        if (sortedArray[i] !== i + 1) {
            aux = i + 1
            i = sortedArray.length - 1
        }
        i++
    }
    return aux
  }