import { userService } from '../../user'
import { ISignup, ILogin } from '../types/forms'

export const signup = async (formData: ISignup) => {
	const newUser = await userService.createUser(formData)
	return newUser
}

export const login = async (formData: ILogin) => {
	return {}
}
