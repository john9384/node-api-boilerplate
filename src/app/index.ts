import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import morganMiddleware from '../lib/middlewares/morgan'
import routes from './routes'
import Logger from '../lib/helpers/loggers'

const app = express()

app.use(cors())
app.use(express.raw())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', express.static(__dirname + '/public'))
app.use(morganMiddleware)

app.get('/', (req, res) => {
  res.send({
    app: process.env.APP_NAME,
    message: `${process.env.APP_NAME} is running`,
    status: 200
  })
})
app.use('/', routes)

app.get('*', (_, res) => res.send('Invalid route'))

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  Logger.error(error.stack)
  res.status(error.status || 500).send({
    success: false,
    message: error.message || 'Failed',
    error
  })
})

export default app
