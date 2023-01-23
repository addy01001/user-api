import winston from 'winston'
import appConfig from '../config/index'

const { timestamp, label, printf, colorize } = winston.format
const myFormat = printf(({ level, message, label, timestamp }: any) => {
  return `${timestamp} [${label}] ${level}: ${message}`
})

/**
 * @param options?:{name:string, version :string}
 */
export default class Logger {
  public getLogger() {
    const options = appConfig.app

    return winston.createLogger({
      transports: [
        new winston.transports.Console({
          level: 'silly',
          format: winston.format.combine(
            label({ label: options.name + '@' + options.version }),
            timestamp(),
            colorize(),
            myFormat
          )
        })
      ],
      levels: {
        emerg: 0,
        alert: 1,
        crit: 2,
        error: 3,
        warning: 4,
        notice: 5,
        info: 6,
        debug: 7,
        silly: 8
      }
    })
  }
}
