import { Router } from 'express';
const router = Router();

import userRouter from './userRouter';
import groupRouter from './groupRouter';
import betRouter from './betRouter';

router.use('/user', userRouter);
router.use('/group', groupRouter);
router.use('/bet', betRouter);


export default router;