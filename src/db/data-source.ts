import 'reflect-metadata'
import { DataSource } from 'typeorm'
import config from '../config/index'

const DatabaseConnection = new DataSource({
	type: 'mysql',
	host: config.DB_HOST,
	port: Number(config.DB_PORT),
	username: config.DB_USERNAME,
	password: config.DB_PASSWORD,
	database: config.DB_NAME,
	synchronize: false,
	logging: true,
	cache: true,
	entities: ['src/db/entities/**/*.ts'],
	migrations: ['src/db/migrations/**/*.ts'],
	subscribers: ['src/db/subscribers/**/*.ts'],
	migrationsTableName: 'migrations',
})

export default DatabaseConnection
config
