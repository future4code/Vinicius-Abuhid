import express from 'express'
import { MusicController } from '../controller/MusicController'

export const musicRouter = express.Router()

musicRouter.put('/add', new MusicController().addMusic)