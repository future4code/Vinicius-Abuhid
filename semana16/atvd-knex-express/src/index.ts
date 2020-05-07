import dotenv from "dotenv"
dotenv.config()

import express, { Request, Response } from "express";
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

const app = express()

app.get("/actor/?gender=", async (req: Request, res: Response) => {
    try {
      const gender = req.query.gender as string;
      const result = await getSumOfGenders(gender);
  
      res.status(200).send({quantity: result})
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.post('/actor', async (req: Request, res:Response)=> {
      try{
        const salary = req.body.salary
        const id = req.body.id
        const result = await updateSalary(salary, id)
        res.status(200).send('salary updated')
      }
      catch(err){
        res.status(200).send({
            message: err.message
        })
      }
  })

  app.post("/actor", async (req: Request, res: Response) => {
    try {
      await updateSalary(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.use(express.json());

// const server = app.listen(process.env.PORT || 3003, () => {
//     if (server) {
//       const address = server.address() as AddressInfo;
//       console.log(`Server is running in http://localhost:${address.port}`);
//     } else {
//       console.error(`Failure upon starting server.`);
//     }
//   });
