import { Request, Response, NextFunction } from 'express'

interface User {
	id: string | number
	email: string
}
export interface IRequest extends Request {
	user?: User
}

export interface IResponse extends Response {}

export interface INext extends NextFunction {}
