interface IError {
	message: string
	type?: string
	status?: number
}

class BaseError extends Error {
	type: string
	status: number
}

export class CustomError extends BaseError {
	constructor({ message, type, status }: IError) {
		super()
		this.message = message
		this.type = type || 'CustomError'
		this.status = status || 500
	}
}

export class ValidationError extends BaseError {
	constructor({ message, status }: IError) {
		super()
		this.message = message
		this.type = 'Validation Error'
		this.status = status || 500
	}
}

export class DatabaseError extends BaseError {
	constructor({ message, type, status }: IError) {
		super()
		this.message = message
		this.type = 'Database Error'
		this.status = status || 500
	}
}
