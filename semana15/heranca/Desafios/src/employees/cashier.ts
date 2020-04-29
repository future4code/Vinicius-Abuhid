import {Employee} from './employee'
import Dish from '../kitchen/dish'

export default class Cashier extends Employee{
    constructor(name: string, salary: number){
        super(name, salary)
    }
    calculateBill(consumation: Dish[]){
     let totalPrice = 0
        for(let i = 0; i < consumation.length - 1; i++){
            let dishPrive = consumation[i].getPrice()
            totalPrice = totalPrice + dishPrive
        }
    }
}
