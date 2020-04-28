// import {Chef} from './chef'

export class Employee{
    name: string;
    salary: number
    static employeesLenght = 0

    constructor(name: string, salary: number){
        this.name= name;
        this.salary = salary
        Employee.employeesLenght += 1
    }
    sayJob(){
        
    }
}

const newEmployee = new Employee('sergio guedes', 40)
// const newChef = new Chef('douglas costa', 50)
console.log(Employee.employeesLenght)