import { User } from '../../../db/entities/User'
import { ICreateUser, IUpdateUser, IFetchUser } from '../types/dtos'
import { IUser } from '../types/model'

import BaseRepository from '../../../db/repository/BaseRepository'

const userRepository = new BaseRepository(User)

export const fetchOne = async (query: IFetchUser): Promise<IUser | null> => {
	const user = await User.findOneBy(query)

	return user
}

export const create = async (data: ICreateUser): Promise<IUser> => {
	const newUser = await userRepository.create<ICreateUser, IUser>(data)
	return newUser
}

export const update = async (
	query: IFetchUser,
	data: IUpdateUser,
): Promise<IUser | null> => {
	const updatedUser = await userRepository.update<
		IFetchUser,
		IUpdateUser,
		IUser
	>(query, data)

	return updatedUser
}
