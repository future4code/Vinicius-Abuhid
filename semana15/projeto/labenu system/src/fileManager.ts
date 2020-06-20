import * as fs from 'fs'

export default class FileManager{
    constructor(public path: string){
        this.path = path
    }
    
    getData(){
        const data: string = fs.readFileSync(this.path).toString()
        const objectData = data && JSON.parse(data) 
        return objectData
    }

    saveData(newData: any){
        const data = this.getData()
        const allData = data? [...data, newData] : [newData]
        fs.writeFileSync(this.path, JSON.stringify(allData, null, 2))
    }
}