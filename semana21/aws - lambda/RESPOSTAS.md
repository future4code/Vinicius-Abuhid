### Execício 
#### Tarefa2
a. 'bananinha' => return true
'maxixizinho' => return true
undefined => return false

b. utilizarmos o comando JSON.parse(event.body), pois o que chega no event, chega como string

c. Para que essa lambda retorne um código de 200, o input do verifyExistence, ou seja, event.body e o event.queryStringParameters tem que ser true. Nesse caso a lambda vai retornar JSON.stringify({hasBody, hasQueries})

d. Quando o event chega sem body ou sem query params

#### Tarefa3
function handler(cep){
  if(cep.length < 8){
    return false
  }
  const hyphen = cep.indexOf('-')
  const anotherHyphen = cep.indexOf('-', hyphen + 1)
  console.log(hyphen)
  console.log(anotherHyphen)
  if(hyphen < 0 || anotherHyphen > 0){
    return false
  }
  return true
}

