import {Router} from 'express'
import {FileController} from './FileController'

export const sendFile = Router()

sendFile.put('/send', new FileController().sendFile)