import { FindOptionsWhere } from 'typeorm'
import { User } from '../../../databases/sqldb/entities/User'

export interface ICreateUser {
	fullName: string
	email: string
	password: string
}

export interface IUpdateUser {}

export interface IFetchUser extends FindOptionsWhere<User> {
	id?: string
	email?: string
}
