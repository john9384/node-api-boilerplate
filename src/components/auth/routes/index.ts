import express from 'express'
import * as authController from '../controllers'
import catchErrors from '../../../library/utils/error-boundary'
import isAuthenticated from '../../../library/middlewares/authentication'

const router = express.Router()

router.post('/signup', catchErrors(authController.signup))
router.post('/login', catchErrors(authController.login))
router.get('/', isAuthenticated, catchErrors(authController.login))

export { router as authRoutes }
