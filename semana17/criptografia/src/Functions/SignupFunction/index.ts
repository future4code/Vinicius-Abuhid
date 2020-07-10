import express, { Request, Response } from 'express'
import { GenerateId } from '../../services/GenerateId/index'
import { CreateUser } from '../../services/CreateUser/index'
import { GenerateToken } from '../../services/GenerateToken/index'
import { HashManager } from '../../services/HashManager/index'
import { BaseDataBase } from '../../services/BaseDataBase'

export const signUp = async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    }
    if (req.body.email && req.body.email.indexOf('@') !== -1) {
      const newId: GenerateId = new GenerateId
      const usersId = newId.generateId()

      const newHashManager = new HashManager
      const criptoPassword = await newHashManager.hash(req.body.password)

      const newUser2: CreateUser = new CreateUser
      await newUser2.createUser(userData.email, criptoPassword, usersId, userData.role)

      const newToken: GenerateToken = new GenerateToken
      const userToken = newToken.generateToken({ id: usersId, role: req.body.role })

      res.status(200).send({ 'token': userToken })
    }
    else {
      res.status(400).send({
        message: 'Email inválido'
      })
    }
  }
  catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
  finally {
    await BaseDataBase.destroyConnection()
  }
}