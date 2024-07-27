import { Request, Response } from 'express';

export const getPrograms = (req: Request, res: Response) => {
    res.send('Hello, this is the programs!');
};
