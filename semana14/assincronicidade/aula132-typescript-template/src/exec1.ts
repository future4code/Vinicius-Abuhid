import * as fs from 'fs'

fs.readdir('../textos', (err, files)=>{
    if(err){
        console.log(err)
    }
    else{
        files.forEach(file => {
            const myPath = `../textos/${file}`
            fs.readFile(myPath, (err: Error, data:  Buffer)=>{
                if(err){
                    console.log(err)
                }
                else{
                    const readableText = data.toString()
                    console.log(readableText)
                }
            })
        })
    }
})