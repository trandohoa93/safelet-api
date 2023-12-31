import { Request, Response, Router } from 'express';
import { logger } from '../../middlewares/logger';
import { auth } from '../../middlewares/auth';
import { UserSchema } from './schema';

export const router: Router = Router();

router.get('/', logger, async(_req: Request, res: Response) => {
  const users = await UserSchema.find();
  res.status(200).json({users});
});

router.get('/:id', logger, auth, (req: Request, res: Response) => {
  res.send('Hello this is API Route:' + req.params.id);
});