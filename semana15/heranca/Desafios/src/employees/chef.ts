import {Employee} from './employee'
import { Dessert } from '../kitchen/dessert'
import {SaltyDish} from '../kitchen/saltydish'
import {avaiableDishes} from '../index'

export class Chef extends Employee{
    constructor(name: string, salary: number){
        super(name, salary)
    }

    removeDishFromMenu(dishName: string){
        const teste = Object.keys(avaiableDishes)
        console.log(teste)
        return ''
    }

    addDishToMenu(price: number, cost: number, ingredients: string[], 
        timeToCook: number, slicesNumber?: number){
            if(slicesNumber){
                const newDessert = new Dessert(price, cost, ingredients, timeToCook, slicesNumber)
            }
            else{
                const newSaltyDish = new SaltyDish(price, cost, ingredients, timeToCook)
            }
    }
}

const test = new Chef('ola', 48)
console.log(test.removeDishFromMenu('jow'))