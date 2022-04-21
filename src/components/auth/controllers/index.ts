import { IRequest, IResponse } from '../../../app/types/http'
import { VSignup, VLogin } from '../utils/validators'
import { validateFormData } from '../../../lib/utils/validate-form-data'
import { CREATED, OK } from '../../../lib/constants/http-status'
import { buildResponse } from '../../../lib/utils/response-builder'
import * as authService from '../services'

export const signup = async (req: IRequest, res: IResponse) => {
	const formData = req.body
	validateFormData(VSignup, formData)
	const responseData = await authService.signup(formData)

	return res.status(CREATED).send(
		buildResponse({
			success: true,
			message: 'User signup',
			data: responseData,
		}),
	)
}

export const login = async (req: IRequest, res: IResponse) => {
	const formData = req.body
	validateFormData(VLogin, formData)
	const responseData = await authService.login(formData)

	return res.status(OK).send(
		buildResponse({
			success: true,
			message: 'User logged in',
			data: responseData,
		}),
	)
}
