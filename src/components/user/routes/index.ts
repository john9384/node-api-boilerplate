import { Router } from 'express'
import catchErrors from '../../../library/utils/error-boundary'
import * as userController from '../controllers'

const router = Router()

router.get('/', catchErrors(userController.getCurrentUser))

export { router as userRoutes }
