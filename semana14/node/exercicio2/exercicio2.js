const taskList = process.argv[2]
const task = process.argv[3]
const fs = require('fs')
const taskListFile = `${taskList}.txt`

if(taskList !== undefined && task !== undefined){
try{
    fs.writeFileSync(taskListFile, '')
    console.log("\x1b[32m", 'A sua lista de tarefas foi criada')
}catch(error){
    console.log(error)
}

try{
    fs.appendFileSync(taskListFile, task, 'utf-8')
    console.log("\x1b[31m",'tarefa adicionada')
}catch(error){
    console.log(error)
}
}
else if(taskList === undefined){
    console.log("\x1b[36m", 'Escreva o nome da sua lista de tarefas')
}
else if(task === undefined){
    console.log("\x1b[33m", 'Você precisa adicionar uma tarefa')
}
else{
    console.log("\x1b[30m", 'Escreva o nome da sua lista de tarefas e adicione uma tarefa')
}