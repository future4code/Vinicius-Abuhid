const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userData = async(question:string) => {
  return new Promise((res, rej)=>{
    rl.question(question, (answer:any) => {
      res(answer)
    });
  })
}

const questionMaker = async()=>{
const name = await userData('qual o seu nome?')
const age = await userData('qual a sua idade?')
rl.close()
console.log('Suas informações são:', {name,age })
}

console.log(questionMaker())
