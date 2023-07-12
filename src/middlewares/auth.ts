import { NextFunction, Request, Response } from 'express'

export const auth = (req: Request, res: Response, next: NextFunction) => {
    if(req.query.admin === 'true') {
        next();
    }
    res.json({
        message: 'you are not auth'
    })
}