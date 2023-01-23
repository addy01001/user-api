import express, { RequestHandler } from 'express'
import { Application } from 'express'
// import excludeRoutes from '../middleware/exclude'
import Logger from './logger'
import appConfig from '../config'
import appRootPath from 'app-root-path'
// import RootPath from 'app-root-path'
import winston from 'winston'

declare global {
  var logger: winston.Logger
  var appConfig: any
  var rootPath: any
}

class App {
  private app: Application
  private port: number

  constructor(appInit: { port: number; defaults: Function[]; middleWares: Function[]; routes: any; errorHandlers: RequestHandler[] }) {
    this.setGlobals()
    global.logger.info('Application Initialization Started')
    this.app = express()
    this.port = appInit.port
    this.setDefaults(appInit.defaults)
    // excludeRoutes(this.app)
    this.middlewares(appInit.middleWares)

    this.routes(appInit.routes)
    this.assets()
    this.template()
    this.errorHandlers(appInit.errorHandlers)
  }
  private setGlobals() {
    global.appConfig = appConfig
    global.logger = new Logger().getLogger()
    global.rootPath = appRootPath
  }
  private setDefaults(middleWares: { forEach: (arg: (middleWare: any) => void) => void }) {
    global.logger.info('Application Setting Defaults')
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare)
    })
  }
  private middlewares(middleWares: { forEach: (arg: (middleWare: any) => void) => void }) {
    global.logger.info('Application Setting Middlewares')
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare)
    })
  }

  private routes(controllers: { forEach: (arg: (controller: any) => void) => void }) {
    global.logger.info('Application Setting Routes')
    controllers.forEach((controller) => {
      this.app.use('/', controller.router)
    })
  }

  private errorHandlers(middleWares:RequestHandler[]) {
    global.logger.info('Application Setting Error Handlers')
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare)
    })
  }

  private assets() {
    global.logger.info('Application Setting Static Assets')
    this.app.use(express.static('public'))
    this.app.use(express.static('views'))
  }

  private template() {
    global.logger.info('Application Setting View Template')
    this.app.set('view engine', 'jade')
  }

  public listen() {
    this.app.listen(this.port, () => {
      global.logger.info(`Application listening on the port :${this.port}`)
    })
  }
}
export default App
