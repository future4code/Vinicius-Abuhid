import { GenerateToken } from "../../services/GenerateToken"
import express, { Response, Request } from 'express'
import { CreateUser } from "../../services/CreateUser"
import { BaseDataBase } from "../../services/BaseDataBase"

export const deleteUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const token = req.headers.authorization as string
        const tokenHandler = new GenerateToken
        const getRoleByToken = tokenHandler.verifyToken(token)
        if (getRoleByToken.role === 'admin') {
            const user = new CreateUser
            const deleteUser = await user.deleteUserId(req.params.id)
            res.sendStatus(200)
        }
        else {
            throw new Error('Unauthorized')
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