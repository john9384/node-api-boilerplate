import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const DatabaseConnection = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '@J1o2h3n4.,',
  database: 'test-database',
  synchronize: false,
  logging: true,
  cache: true,
  entities: ['src/db/entities/**/*.ts'],
  migrations: ['src/db/migrations/**/*.ts'],
  subscribers: ['src/db/subscribers/**/*.ts'],
  migrationsTableName: 'migrations'
})
