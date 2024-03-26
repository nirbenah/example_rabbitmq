
import { Request, Response } from 'express';
import { type } from 'os';
import {produceMessage} from './utils.js'

export const postOrdersRoute = async (req: Request, res: Response) => {

    try{
        await produceMessage("to_comment", "FORTH MESSAGE")
    }
    catch(e){
        console.log(e, "ERROR")
    }
    res.status(201).send('Orderrr created');
}






