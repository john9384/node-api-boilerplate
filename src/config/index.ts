import path from 'path'
import dotenv from 'dotenv'
import fs from 'fs'
import Logger from '../lib/helpers/loggers'

if (process.env.ENVIRONMENT == 'development' && !fs.existsSync('.env')) {
  Logger.error('.env file not found')
}

dotenv.config({
  path: path.join(__dirname, '../../.env')
})

export default {
  API_PREFIX: process.env.API_PREFIX,
  APP_NAME: process.env.APP_NAME,
  ENVIRONMENT: process.env.NODE_ENV,
  CRYPTO_ENCRYPTION_METHOD: process.env.CRYPTO_ENCRYPTION_METHOD,
  CRYPTO_SECRET_IV: process.env.CRYPTO_SECRET_IV,
  CRYPTO_SECRET_KEY: process.env.CRYPTO_SECRET_KEY,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_TOKEN_TYPE: process.env.JWT_TOKEN_TYPE,
  PORT: process.env.PORT
}
