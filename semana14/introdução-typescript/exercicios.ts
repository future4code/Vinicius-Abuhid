function operateNumbers(a: number, b: number):void{
    const result1: string = `${a}+${b}=${a + b}`;
    const result2: string = a>b? `${a}-${b}=${a - b}`: `${b}-${a}=${b - a}`
    const result3: string = `${a}x${b}=${a * b}`
    const result4: string = a>b? `${a} é maior`:`${b} é maior`
    console.log(result1, result2, result3, result4)
}

function checkArrayNumbers(array: number[]): 
{arrayLenght: number, oddNumbersLenght: number, arrayElemntsAddition: number}{
    let allArrayelements = 0
    const allOddNumbers: Number[] = array.filter(item => {
        return item % 2 === 0? item:''
    })
    for(let i of array){
        allArrayelements = allArrayelements + i 
    }
    return{arrayLenght: array.length, oddNumbersLenght: allOddNumbers.length, arrayElemntsAddition: allArrayelements}
}
console.log(checkArrayNumbers([1,2,3,4,5,6,7,8,9,10]))

let postList: {name:string, texto: string}[] = [{name: 'vinicius', texto: 'bom dia'},
{name: 'felipe', texto: 'ola'},{name: 'nadia', texto: 'tudo bem?'},{name: 'rosana', texto: 'boa tarde'},
{name: 'vinicius', texto: 'joia?'}]
function findOutTheAuthor(posts : {name:string, texto: string}[], authour: string) : {texto : string}[] {
    const filteredPosts : {texto : string}[] = posts.filter(post => {
        if(post.name === authour){
        return {texto: post.texto}}
    })
    return filteredPosts
}
console.log(findOutTheAuthor(postList, 'nadia'))

function findOutTheAge(year: number, era?: string): string {
    let age: string
    if(year > 4000 && era === 'AC'){
        age = 'Pré-História'
    }
    else if((year <= 4000 && era === 'AC') || (year < 476 && era !== 'AC')){
        age = 'Idade Antiga'
    }
    else if((year >= 476 && year < 1453) && era !== 'AC'){
        age = 'Idade Média'
    }
    else if((year >= 1453 && year < 1789) && era !== 'AC'){
        age = 'Idade Moderna'
    }
    else if(year >= 1789 && era !== 'AC'){
        age = 'Idade Contemporânea'
    }
    else{
        age = 'Desculpe, não foi possível identificar o período histórico. Tente novamente mais tarde...'
    }
    return age
}
console.log(findOutTheAge(3048, 'AC'))
console.log(findOutTheAge(1999))
console.log(findOutTheAge(1042, 'DC'))