const verifyOneEditString = (str, editStr) => {
    const newStr = str + editStr
    const array = []
    let stringHash = {}
    let editedStringHash = {}
    let stringHashProps = 0
    let editedStringHashProps = 0
    let points = 0
    for (let i = 0; i < newStr.length; i++) {
        const aux = array.filter((item) => {
            return item === newStr[i]
        })
        if (aux.length < 1) {
            array.push(newStr[i])
        }
    }
    for (let i = 0; i < array.length; i++) {
        let key = array[i]
        if (str.includes(key)) {
            for (let z = 0; z < str.length; z++)
                if (str[z] === key)
                    if (stringHash[key]) {
                        stringHash[key] += 1
                    }
                    else {
                        stringHash = { ...stringHash, [key]: 1 }
                        stringHashProps += 1
                    }
        }
        if (editStr.includes(key)) {
            for (let z = 0; z < editStr.length; z++)
                if (editStr[z] === key)
                    if (editedStringHash[key]) {
                        editedStringHash[key] += 1
                    }
                    else {
                        editedStringHash = { ...editedStringHash, [key]: 1 }
                        editedStringHashProps += 1
                    }
        }
    }
    console.log(stringHash, editedStringHash)
    for (let i = 0; i < array.length; i++) {
        let key = array[i]
        if (stringHash[key] && editedStringHash[key]) {
            let difference = stringHash[key] > editedStringHash[key] ?
                stringHash[key] - editedStringHash[key] :
                editedStringHash[key] - stringHash[key]
            points += difference
            console.log(key, stringHash[key], editedStringHash[key], difference, points)
        }
        else if (stringHash[key]) {
            let difference = stringHash[key] - 0
            points += difference
            console.log(key, stringHash[key], editedStringHash[key], difference, points)
        }
        else if (editedStringHash[key]) {
            let difference = editedStringHash[key] - 0
            points += difference
            console.log(key, stringHash[key], editedStringHash[key], difference, points)
        }
    }
    return points <= 2 ? true : false
}