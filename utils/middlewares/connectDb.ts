import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import mongooseConnect from '../database/mongooseConnect'
import { NextApiRequestWithMiddleware } from './index'

export const connectDb = (handler: NextApiHandler) => async ( req: NextApiRequestWithMiddleware, res: NextApiResponse ) =>{
  await mongooseConnect()
  return handler(req, res)
}
