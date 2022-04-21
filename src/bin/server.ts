import 'reflect-metadata'
import http from 'http'
import cluster from 'cluster'
import os from 'os'
import Logger from '../lib/helpers/loggers'
import config from '../config'
import app from '../app'
import { DatabaseConnection } from '../db/data-source'

const PORT = config.PORT || 4000

try {
  if (cluster.isPrimary) {
    const cpuCoreCount = os.cpus().length

    for (let index = 0; index < cpuCoreCount; index++) {
      cluster.fork()
    }
    cluster.on('exit', function (worker) {
      Logger.warn(`Worker ${worker.id} died'`)
      Logger.warn('Starting a new one ...')
      cluster.fork()
    })
  } else {
    DatabaseConnection.initialize()
      .then(() => {
        Logger.info('------- Database Connected -------')
      })
      .catch(error => {
        Logger.error('------ Database Connection Failed -------')
        console.log(error)
      })

    new http.Server(app).listen(PORT, () => {
      Logger.info(`
  -------------------------------------------
    ${config.APP_NAME?.toUpperCase()} Server listening on port ${PORT}
  -------------------------------------------
  `)
    })
  }
} catch (error) {
  console.log(error)
}
