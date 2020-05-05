"use strict";
// EXERCÍCIO 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var newClient = {
    name: 'vinicius',
    registrationNumber: '10',
    consumedEnergy: 10,
    calculateBill: function () {
        return 2;
    }
};
console.log(newClient.name, newClient.registrationNumber, newClient.consumedEnergy, newClient.calculateBill());
// a. Foi possível imprimir todas as propriedades deste objeto
// EXERCÍCIO 2
var Place = /** @class */ (function () {
    function Place(cep) {
        this.cep = cep;
    }
    Place.prototype.getCep = function () {
        return this.cep;
    };
    return Place;
}());
exports.Place = Place;
// const newPlace = new Place
// a. 'Cannot create an instance of an abstract class'
// b. Retirar a palavra chave abstract
// EXERCÍCIO 3
var Residence = /** @class */ (function (_super) {
    __extends(Residence, _super);
    function Residence(residentsQuantity, cep) {
        var _this = _super.call(this, cep) || this;
        _this.residentsQuantity = residentsQuantity;
        return _this;
    }
    Residence.prototype.getResidentsQuantity = function () {
        return this.residentsQuantity;
    };
    return Residence;
}(Place));
exports.Residence = Residence;
var Commerce = /** @class */ (function (_super) {
    __extends(Commerce, _super);
    function Commerce(floorsQuantity, cep) {
        var _this = _super.call(this, cep) || this;
        _this.floorsQuantity = floorsQuantity;
        return _this;
    }
    Commerce.prototype.getFloorsQuantity = function () {
        return this.floorsQuantity;
    };
    return Commerce;
}(Place));
exports.Commerce = Commerce;
var Industry = /** @class */ (function (_super) {
    __extends(Industry, _super);
    function Industry(machinesQuantity, cep) {
        var _this = _super.call(this, cep) || this;
        _this.machinesQuantity = machinesQuantity;
        return _this;
    }
    Industry.prototype.getmMchinesQuantity = function () {
        return this.machinesQuantity;
    };
    return Industry;
}(Place));
exports.Industry = Industry;
var newResidence = new Residence(30, '3000');
var newCommerce = new Commerce(15, '4000');
var newIndustry = new Industry(60, '5000');
// EXERCÍCIO 4
var ResidentialClient = /** @class */ (function (_super) {
    __extends(ResidentialClient, _super);
    function ResidentialClient(cpf, name, registrationNumber, consumedEnergy, residentsQuantity, cep) {
        var _this = _super.call(this, residentsQuantity, cep) || this;
        _this.cpf = cpf;
        _this.name = name;
        _this.registrationNumber = registrationNumber;
        _this.consumedEnergy = consumedEnergy;
        return _this;
    }
    ResidentialClient.prototype.getCpf = function () {
        return this.cpf;
    };
    ResidentialClient.prototype.calculateBill = function () {
        return this.consumedEnergy * 0.75;
    };
    return ResidentialClient;
}(Residence));
// EXERCÍCIO 5
var CommercialClient = /** @class */ (function (_super) {
    __extends(CommercialClient, _super);
    function CommercialClient(cnpj, name, registrationNumber, consumedEnergy, floorsQuantity, cep) {
        var _this = _super.call(this, floorsQuantity, cep) || this;
        _this.cnpj = cnpj;
        _this.name = name;
        _this.registrationNumber = registrationNumber;
        _this.consumedEnergy = consumedEnergy;
        return _this;
    }
    CommercialClient.prototype.getCnpj = function () {
        return this.cnpj;
    };
    CommercialClient.prototype.calculateBill = function () {
        return this.consumedEnergy * 0.53;
    };
    return CommercialClient;
}(Commerce));
// EXERCÍCIO 6
var IndustrialClient = /** @class */ (function (_super) {
    __extends(IndustrialClient, _super);
    function IndustrialClient(regulation, name, registrationNumber, consumedEnergy, machinesQuantity, cep) {
        var _this = _super.call(this, machinesQuantity, cep) || this;
        _this.regulation = regulation;
        _this.name = name;
        _this.registrationNumber = registrationNumber;
        _this.consumedEnergy = consumedEnergy;
        if (registrationNumber === 5) {
            console.log('esse numero pode nao, meu');
        }
        return _this;
    }
    IndustrialClient.prototype.getRegulation = function () {
        return this.regulation;
    };
    IndustrialClient.prototype.calculateBill = function () {
        return this.consumedEnergy * 0.45;
    };
    return IndustrialClient;
}(Industry));
// b. Esta class deve ser filha da class Industry, por possuir as mesmas propriedades
// c. Esta class deve implementar a interface Client, por precisar dos mesmos atributos
// EXERCÍCIO 7
var ClientManager = /** @class */ (function () {
    function ClientManager() {
        this.clients = [];
    }
    ClientManager.prototype.getClientsQuantity = function () {
        return this.clients.length;
    };
    ClientManager.prototype.registerClient = function (client) {
        this.clients.push(client);
    };
    ClientManager.prototype.calculateBillOfClient = function (registrationNumber) {
        var clientBill;
        var findClient = this.clients.filter(function (client) {
            return client.registrationNumber === registrationNumber;
        });
        if (findClient) {
            clientBill = findClient[0].calculateBill();
        }
        return clientBill;
    };
    ClientManager.prototype.calculateTotalIncome = function () {
        var totalIncome = 0;
        var i;
        for (i = 0; i < this.clients.length; i++) {
            var clientRegistration = this.clients[i].registrationNumber;
            var eachBill = this.calculateBillOfClient(clientRegistration);
            totalIncome += eachBill;
        }
        return totalIncome;
    };
    ClientManager.prototype.deleteUser = function (registrationNumber) {
        var currentList = this.clients.filter(function (client) {
            return client.registrationNumber !== registrationNumber;
        });
        this.clients = currentList;
        return currentList;
    };
    ClientManager.prototype.printClients = function () {
        var i;
        var allClientsInfo = '';
        for (i = 0; i < this.clients.length; i++) {
            allClientsInfo +=
                this.clients[i].name.toUpperCase() + " - " + this.clients[i].registrationNumber + " - " + this.clients[i].consumedEnergy + " - " + this.clients[i].calculateBill() + " \n";
        }
        return allClientsInfo;
    };
    return ClientManager;
}());
// EXERCÍCIO 8
var clientManager = new ClientManager;
var newResidentialClient = new ResidentialClient(123, 'vinicius', 1, 40, 1, '300');
var newCommercialClient = new CommercialClient(1234, 'renner', 2, 4000, 2, '400');
var newIndustrialClient = new IndustrialClient(12345, 'ambev', 5, 400000, 10, '500');
clientManager.registerClient(newResidentialClient);
clientManager.registerClient(newCommercialClient);
clientManager.registerClient(newIndustrialClient);
// console.log(clientManager.getClientsQuantity())
// console.log(clientManager.calculateBillOfClient(1))
// console.log(clientManager.calculateBillOfClient(2))
// console.log(clientManager.calculateBillOfClient(3))
// console.log(clientManager.calculateTotalIncome())
// console.log(clientManager.deleteUser(3))
// DESAFIO 1
console.log(clientManager.printClients());
// DESAFIO 2
