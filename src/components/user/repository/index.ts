import { User } from '../../../db/entities/User'
import { ICreateUser, IUpdateUser, IFetchUser } from '../types/dtos'
import { IUser } from '../types/model'

import BaseRepository from '../../../db/repository/BaseRepository'

class UserRepository extends BaseRepository {
	fetchOneUser = async (query: IFetchUser): Promise<IUser | null> => {
		const user = await this.fetchOne<IFetchUser, IUser>(query)

		return user
	}

	createUser = async (data: ICreateUser): Promise<IUser> => {
		const newUser = await this.create<ICreateUser, IUser>(data)
		return newUser
	}

	updateUser = async (
		query: IFetchUser,
		data: IUpdateUser,
	): Promise<IUser | null> => {
		const updatedUser = await this.update<IFetchUser, IUpdateUser, IUser>(
			query,
			data,
		)

		return updatedUser
	}
}

const userRepository = new UserRepository(User)

export default userRepository
