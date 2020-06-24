// Warm-up 23/06
// Challenge
function waitForME(time: number){
    new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log('acabou a espera')
        },time)
        res()
    })
}

// Warm-up 24/06
// Remember
// 1.e
// 2. a
// 3. c
// 4. a
// 5. d
// Challenge
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const purchaseInfo = async(question:string) => {
  return new Promise((res, rej)=>{
    rl.question(question, (answer:any) => {
    });
    rl.close()
    res()
  })
}

const questionMaker = async()=>{
const quantity = purchaseInfo('Quantos itens tem?')
let i = 1
let purchase = []
while(i < Number(quantity)){
    let item = purchaseInfo(`Qual o item ${i}`)
    purchase.push(item)
    i++
}
return ('Sua lista é:' + purchase)
}

console.log(questionMaker())