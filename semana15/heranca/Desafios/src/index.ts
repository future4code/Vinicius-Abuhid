import {feijoada, salmao } from './kitchen/saltydish'
import {pudim, brigadeiro} from './kitchen/dessert'
import * as fs from 'fs'

export const avaiableDishes = [feijoada, salmao, brigadeiro, pudim]

export class JSONManager{
    path: string
    constructor(path: string){
        this.path = path
    }

    getJsonContent(){
        const content = JSON.parse(fs.readFileSync(this.path).toString())
        
    }
}