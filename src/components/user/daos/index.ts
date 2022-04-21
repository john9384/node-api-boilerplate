import { User } from '../../../db/entities/User'
import { FindOptionsWhere } from 'typeorm'
import { ICreateUser, IUpdateUser, IFetchUser } from '../types/dtos'
import { IUser } from '../types/model'

export const create = async (data: ICreateUser): Promise<IUser> => {
	const newUser = User.create(data)
	await newUser.save()

	return newUser
}

export const update = async (
	query: IFetchUser,
	data: IUpdateUser,
): Promise<IUser | null> => {
	const user = await User.findOneBy(query)
	await user?.save(data)

	return user
}

export const fetchOne = async (query: IFetchUser): Promise<IUser | null> => {
	const user = await User.findOneBy(query)

	return user
}
