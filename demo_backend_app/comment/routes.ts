
import { Request, Response } from 'express';
import { type } from 'os';


export const postCommentRoute = async (req: Request, res: Response) => {
    res.status(201).send('Comment created');
}
