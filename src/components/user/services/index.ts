import { IUser } from '../types/model'
import { ICreateUser, IFetchUser, IUpdateUser } from '../types/dtos'
import { CustomError } from '../../../lib/helpers/error'
import { BAD_REQUEST } from '../../../lib/constants/http-status'
import userRepository from '../repository'

export const createUser = async (data: ICreateUser): Promise<IUser> => {
	const user = await userRepository.fetchOneUser({ email: data.email })
	if (user) {
		throw new CustomError({
			message: 'User with email exits',
			status: BAD_REQUEST,
		})
	}

	const newUser = await userRepository.createUser(data)

	return newUser
}

export const updateUser = async (
	query: IFetchUser,
	data: IUpdateUser,
): Promise<IUser | null> => {
	const user = await userRepository.updateUser(query, data)

	return user
}

export const fetchUser = async (query: IFetchUser): Promise<IUser | null> => {
	const user = await userRepository.fetchOneUser(query)

	return user
}
