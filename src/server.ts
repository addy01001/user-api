import App from './helper/app'
import config from './config/index'
/**Middleware */
import express from 'express'
import cors from 'cors'

/**Routes */
import { establishConnection } from './helper/database'
import { authenticate } from './middleware/auth'
import DefaultRoute from './routes/default'
import UserRoute from './routes/user'

/**Error Handlers */

// import ClientErrors from './middleware/clientErrors'

const app = new App({
  port: config.app.port,
  defaults: [],
  middleWares: [
    express.json(),
    express.urlencoded({ extended: true }),
    cors(),
    authenticate
  ],
  routes: [
    new DefaultRoute(),
    new UserRoute()
  ],
  errorHandlers: []
})

establishConnection()
app.listen()
