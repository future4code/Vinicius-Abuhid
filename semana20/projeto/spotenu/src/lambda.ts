import { createLambdaHandler } from 'lbn-lambda-express'
import { app } from './index'

export const handler = createLambdaHandler(app)