import { string } from 'joi'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../../config'
import { IPayload } from '../../app/types/jwt-types'

const JWT_SECRET: string = config.JWT_SECRET || ''

export const encode = (payload: IPayload) =>
	jwt.sign({ payload }, JWT_SECRET, { expiresIn: '1h' })

export const decode = (token: string) => jwt.verify(token, JWT_SECRET)
