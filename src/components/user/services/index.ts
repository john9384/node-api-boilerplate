import { IUser } from '../types/model'
import { ICreateUser, IFetchUser, IUpdateUser } from '../types/dtos'
import { CustomError } from '../../../lib/helpers/error'
import { BAD_REQUEST } from '../../../lib/constants/http-status'
import * as userDao from '../daos'

export const createUser = async (data: ICreateUser): Promise<IUser> => {
	const user = await userDao.fetchOne({ email: data.email })
	if (user) {
		throw new CustomError({
			message: 'User with email exits',
			status: BAD_REQUEST,
		})
	}

	const newUser = await userDao.create(data)

	return newUser
}

export const updateUser = async (
	query: IFetchUser,
	data: IUpdateUser,
): Promise<IUser | null> => {
	const user = await userDao.update(query, data)

	return user
}

export const fetchUser = async (query: IFetchUser): Promise<IUser | null> => {
	const user = await userDao.fetchOne(query)

	return user
}
