import { userService } from '../../user'
import { ISignup, ILogin } from '../types/forms'
import { VSignup, VLogin } from '../utils/validators'
import { validateFormData } from '../../../library/utils/validate-form-data'
import { jwtEncode } from '../../../library/helpers/jwt'
import { bcryptCompare, bcryptEncode } from '../../../library/helpers/bcrypt'
import { ValidationError } from '../../../library/helpers/error'
import { BAD_REQUEST } from '../../../library/constants/http-status'

export const signup = async (formData: ISignup) => {
	validateFormData(VSignup, formData)
	formData.password = await bcryptEncode(formData.password)

	const newUser = await userService.createUser(formData)

	return { email: newUser.email }
}

export const login = async (formData: ILogin) => {
	validateFormData(VLogin, formData)

	const user = await userService.fetchUser({ email: formData.email })

	const passwordValid = await bcryptCompare(
		formData.password,
		user?.password || '',
	)
	if (!passwordValid) {
		throw new ValidationError({
			message: 'Invalid password',
			status: BAD_REQUEST,
		})
	}

	const encodedData = jwtEncode({ userId: user?.id, email: user?.email })

	return {
		email: user?.email,
		token: encodedData,
	}
}
