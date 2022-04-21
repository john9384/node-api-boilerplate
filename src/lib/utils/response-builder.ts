interface IBuildResponse {
	success: boolean
	message: string
	data: any
}
export const buildResponse = ({ success, message, data }: IBuildResponse) => {
	return {
		success,
		message,
		data,
	}
}
