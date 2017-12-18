import { Router } from 'express'

import bittrex from './bittrex'

const router = Router()

// Add USERS Routes
router.use('/bittrex', bittrex)

export default router
