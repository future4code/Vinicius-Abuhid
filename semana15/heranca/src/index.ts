// EXERCICIO 1  

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
       public introduceYourself(): string {
           return `Olá sou o ${this.name}. Bom dia!`
       }
  }
  const newUser: User = new User('id1','vinicius@email.com', 'vinicius', '123')
  console.log(newUser.getName(), newUser.getEmail(), newUser.getId())

  //a. Não é possível imprimir no console a senha do usuário
//b. 1

// EXERCÍCIO 2

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }
const newCustomer: Customer = new Customer('id2','vinicius@email.com', 'vinicius', '123','masterCard')

//a. 1
//b. 2

// EXERCÍCIO 3

console.log(newCustomer.getName(), newCustomer.getEmail(),
newCustomer.getId(), newCustomer.getCreditCard())

//a. Não, pois não há nenhum método que o permita

// EXERCÍCIO 4

console.log(newCustomer.introduceYourself())

// EXERCÍCIO 5

console.log(newCustomer.introduceYourself())

// EXERCÍCIO 6

class Employee extends User{
    private static BENEFITS_VALUE: number = 400
    protected admissionDate: string;
    protected baseSalary: number
    constructor(admissionDate: string, baseSalary: number, id: string,
        email: string, name: string, password: string){
        super(id, email, name, password);
        this.admissionDate = admissionDate;
        this.baseSalary = baseSalary;
    }
    getAdmissionDate(): string{
        return this.admissionDate
    }

    getBaseSalary(): number{
        return this.baseSalary
    }

    calculateTotalSalary(): number {
        return this.baseSalary + Employee.BENEFITS_VALUE
    }
}
const newEmployee: Employee = new Employee('10/10/10', 10000, '10',
'vinicius@email.com', 'vinicius', '1010')
// a. 3

console.log(newEmployee.getName(), newEmployee.getEmail(), newEmployee.getId(),
newEmployee.getBaseSalary(), newEmployee.getAdmissionDate())

// b. Os dados possíveis de serem impressos são name, email, id, baseSalary, AdmissionDate

// EXERCÍCIO 7

console.log(newEmployee.calculateTotalSalary())

// EXERCÍCIO 8

class Seller extends Employee{
    private salesQuantity: number = 0
    private static SELLING_COMMISSION: number = 5
    setSalesQuantity(newSales: number){
        this.salesQuantity = this.salesQuantity + newSales
    }
    getSalesQuantity(): number {
		return this.salesQuantity
    }
    calculateTotalSalary(): number{
        return this.baseSalary + 400 + (Seller.SELLING_COMMISSION * this.salesQuantity)
    }
}
const newSeller: Seller = new Seller('10/10/10', 10000, '10',
'vinicius@email.com', 'vinicius', '1010')

// a. Para criar uma instância da classe Seller, eu tive que passar os mesmos parâmetros 
// passados para a classe Employee

console.log(newSeller.getAdmissionDate())
console.log(newSeller.getBaseSalary())
console.log(newSeller.getName())
console.log(newSeller.getEmail())
console.log(newSeller.getId())

// b. Consegui imprimir todas as mesmas informações da instância da classe Employee, que são 2
// próprias delas e mais 3 do pai, que no caso do newSeller, é o avô. A classe Seller, não
// apresenta por si só, nenhuma maneira para pegar informação

// EXERCICIO 9

newSeller.setSalesQuantity(40)
console.log(newSeller.getSalesQuantity())

// a. Só foi possível imprimir no terminal o salesQuantity, depois de criada uma função para tal

// EXERCICIO 10

console.log(newSeller.calculateTotalSalary())

// a. Foi impresso no terminal, a soma do salário + 400 de benefícios + 
// o resultado de 5 * salesQuantity

// EXERCÍCIO 11 
console.log(newEmployee.calculateTotalSalary())
console.log(newSeller.calculateTotalSalary())