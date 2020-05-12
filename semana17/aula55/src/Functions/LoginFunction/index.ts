import express, { Request, Response } from 'express'
import { CreateUser } from '../../services/CreateUser/index'
import { GenerateToken } from '../../services/GenerateToken/index'
import { HashManager } from '../../services/HashManager/index'
import { BaseDataBase } from '../../services/BaseDataBase'

export const login = async (req: Request, res: Response) => {
  const userData = {
    email: req.body.email,
    password: req.body.password
  }
  if (userData.email && userData.email.indexOf('@') !== -1) {
    try {
      const validateUser: CreateUser = new CreateUser
      const user = await validateUser.searchUser(userData.email)

      const newHashManager = new HashManager
      const passwordChecker = await newHashManager.compareHash(req.body.password, user.password)

      if (passwordChecker) {
        const newToken: GenerateToken = new GenerateToken
        const userToken = newToken.generateToken({ id: user.id, role: user.role })
        res.status(200).send({
          token: userToken
        })
      }
      else {
        res.status(400).send('senha inválida')
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
  else {
    res.status(400).send({
      message: 'Email inválido'
    })
  }
}