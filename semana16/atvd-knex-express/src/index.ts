import dotenv from "dotenv"
dotenv.config()

import express from "express";
import { AddressInfo } from "net";
import knex from 'knex'

console.log(process.env.DB_HOST)

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME
    }
})

async function  getActorByName(name: string): Promise<any> {
    const result = await connection.raw(`
    SELECT * From Actor
    WHERE name = "${name}"
    `)
    console.log(result[0])
}

async function getSumOfGenders(gender: string): Promise<any>{
    const result = await connection.raw(`
    SELECT COUNT(*) From Actor
    WHERE gender = '${gender}'
    `)
    return result[0]
}


// getActorByName("Suzana Vieira")
// getSumOfGenders('male')

const updateSalary = async(salary: number, id: string):Promise<any> => {
    const result = await connection('Actor').where({id}).update({salary})
    return result
}

const deleteActor = async(id: string):Promise<any> => {
    await connection('Actor').where({id}).del()
}

const getAvgSalaryByGender = async( gender:string): Promise<any>=> {
    const result = await connection('Actor').avg('salary').groupBy({gender})
    return result
}

// const app = express()

// app.use(express.json());

// const server = app.listen(process.env.PORT || 3003, () => {
//     if (server) {
//       const address = server.address() as AddressInfo;
//       console.log(`Server is running in http://localhost:${address.port}`);
//     } else {
//       console.error(`Failure upon starting server.`);
//     }
//   });
