import { IRequest, IResponse } from '../../../app/types/http'
import { buildResponse } from '../../../lib/utils/response-builder'
import { OK } from '../../../lib/constants/http-status'

export const getCurrentUser = async (req: IRequest, res: IResponse) => {
	const userId = req.user?.id
	if (!userId) {
		throw new Error('Hello there')
	}

	const responseData = {}
	return res.status(OK).send(
		buildResponse({
			success: true,
			message: 'User fetched',
			data: responseData,
		}),
	)
}
