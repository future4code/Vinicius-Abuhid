function verifyType(array: Array<any>) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            sum += 1
        }
    }
    if (sum = array.length) {
        return true
    }
    else {
        return false
    }
}
