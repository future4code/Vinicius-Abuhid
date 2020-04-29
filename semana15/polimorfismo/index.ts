// EXERCÍCIO 1

export interface Client {
    name: string;
  
    registrationNumber: number;
  
    consumedEnergy: number;
  
    calculateBill(): number;
  }

const newClient = {
    name: 'vinicius',
    registrationNumber: '10',
    consumedEnergy: 10,
    calculateBill: () => {
        return 2
    }
}

console.log(newClient.name, newClient.registrationNumber, 
    newClient.consumedEnergy, newClient.calculateBill())
// a. Foi possível imprimir todas as propriedades deste objeto
// EXERCÍCIO 2
export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

// const newPlace = new Place

// a. 'Cannot create an instance of an abstract class'
// b. Retirar a palavra chave abstract

// EXERCÍCIO 3
export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      cep: string
    ) {
      super(cep);
    }
    getResidentsQuantity(){
        return this.residentsQuantity
    }
  }

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      cep: string
    ) {
      super(cep);
    }
    getFloorsQuantity(){
        return this.floorsQuantity
    }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      cep: string
          ) {
          super(cep);
    }
    getmMchinesQuantity(){
        return this.machinesQuantity
    }
  }

const newResidence = new Residence(30, '3000')
const newCommerce = new Commerce(15, '4000')
const newIndustry = new Industry(60, '5000')

// EXERCÍCIO 4

class ResidentialClient extends Residence implements Client{

    constructor(public cpf: number, public name: string, public registrationNumber: number,
        public consumedEnergy: number, residentsQuantity: number, cep: string){
        super(residentsQuantity, cep)
    }

    getCpf(){
        return this.cpf
    }

    calculateBill(): number{
        return this.consumedEnergy * 0.75
    }
}

// EXERCÍCIO 5

class CommercialClient extends Commerce implements Client{

    constructor(private cnpj: number, public name: string, public registrationNumber: number,
        public consumedEnergy: number, floorsQuantity: number, cep: string){
        super(floorsQuantity, cep)
    }
    
    getCnpj(){
        return this.cnpj
    }
    
    calculateBill(): number{
        return this.consumedEnergy * 0.53
    }

}

// EXERCÍCIO 6

class IndustrialClient extends Industry implements Client{
    
    constructor(private regulation: number, public name: string,  public registrationNumber: number,
        public consumedEnergy: number,machinesQuantity: number, cep: string){
        super(machinesQuantity, cep)
        if(registrationNumber === 5){
            console.log('esse numero pode nao, meu')
        }
    }

    getRegulation(){
        return this.regulation
    }

    calculateBill(): number{
        return this.consumedEnergy * 0.45
    }
}

// b. Esta class deve ser filha da class Industry, por possuir as mesmas propriedades
// c. Esta class deve implementar a interface Client, por precisar dos mesmos atributos

// EXERCÍCIO 7

class ClientManager{
    private clients: Client[] = []

    getClientsQuantity(){
        return this.clients.length
    }

    registerClient(client: Client){
        this.clients.push(client)
    }

    calculateBillOfClient(registrationNumber: number): number{
        let clientBill: number
        const findClient = this.clients.filter((client) => {
            return client.registrationNumber === registrationNumber
        })
        if(findClient){
            clientBill = findClient[0].calculateBill()
        }
        return clientBill
    }

    calculateTotalIncome(): number{
        let totalIncome = 0
        let i: number
        for(i = 0; i < this.clients.length; i++){
            let clientRegistration = this.clients[i].registrationNumber
            let eachBill = this.calculateBillOfClient(clientRegistration)
            totalIncome += eachBill
        }
        return totalIncome
    }

    deleteUser(registrationNumber: number){
        const currentList = this.clients.filter(client => {
            return client.registrationNumber !== registrationNumber
        })
        this.clients = currentList
        return currentList
    }

    printClients(){
        let i: number
        let allClientsInfo: string = ''
        for(i = 0; i < this.clients.length; i++){
        allClientsInfo += 
        `${this.clients[i].name.toUpperCase()} - ${this.clients[i].registrationNumber} - ${this.clients[i].consumedEnergy} - ${this.clients[i].calculateBill()} \n`
        }
        return allClientsInfo
    }
}

// EXERCÍCIO 8
const clientManager: ClientManager = new ClientManager
const newResidentialClient: ResidentialClient = 
new ResidentialClient(123, 'vinicius', 1, 40, 1, '300')
const newCommercialClient: CommercialClient = 
new CommercialClient(1234, 'renner', 2, 4000, 2, '400')
const newIndustrialClient: IndustrialClient = 
new IndustrialClient(12345, 'ambev', 5, 400000, 10, '500')

clientManager.registerClient(newResidentialClient)
clientManager.registerClient(newCommercialClient)
clientManager.registerClient(newIndustrialClient)

// console.log(clientManager.getClientsQuantity())
// console.log(clientManager.calculateBillOfClient(1))
// console.log(clientManager.calculateBillOfClient(2))
// console.log(clientManager.calculateBillOfClient(3))
// console.log(clientManager.calculateTotalIncome())
// console.log(clientManager.deleteUser(3))

// DESAFIO 1

console.log(clientManager.printClients())

// DESAFIO 2
