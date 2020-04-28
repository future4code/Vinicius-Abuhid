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
