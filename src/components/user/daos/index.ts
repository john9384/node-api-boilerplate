import { User } from '../../../db/entities/User'
import { ICreate, IUpdate } from '../types/dtos'
import { IUser } from '../types/model'

export const create = async (data: ICreate): Promise<IUser> => {
	const newUser = User.create(data)
	await newUser.save()

	return newUser
}

export const update = async (query: any, data: IUpdate) => {
	const user = await User.findOneBy(query)
	await user?.save(data)

	return user
}
