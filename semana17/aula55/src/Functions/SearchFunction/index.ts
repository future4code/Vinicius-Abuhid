import express, { Request, Response } from 'express'
import { GenerateId } from '../../services/GenerateId/index'
import { CreateUser } from '../../services/CreateUser/index'
import { GenerateToken } from '../../services/GenerateToken/index'
import { HashManager } from '../../services/HashManager/index'
import { BaseDataBase } from '../../services/BaseDataBase'

export const searchUserById = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string
        const getToken: GenerateToken = new GenerateToken
        const getMyToken = getToken.verifyToken(token)

        if (getMyToken.role !== 'normal') {
            throw new Error('Unauthorized')
        }
        const searchUser: CreateUser = new CreateUser
        const user = await searchUser.searchUserById(getMyToken.id)
        res.status(200).send({
            id: user.id,
            email: user.email,
        })
    }
    catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
    finally {
        await BaseDataBase.destroyConnection()
    }
}