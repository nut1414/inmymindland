import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import mongooseConnect from '../database/mongooseConnect'


export const connectDb = (handler: NextApiHandler) => async ( req: NextApiRequest, res: NextApiResponse ) =>{
  await mongooseConnect()
  handler(req, res)
}
