import { NextApiResponse } from 'next'
import { connectDb } from '../../../../utils/middlewares/connectDb'
import { protectedApi, NextApiRequestWithSession } from '../../../../utils/middlewares/protectedApi'

async function handler(req: NextApiRequestWithSession, res: NextApiResponse) {
  res.status(200).json({status: 'success'})
}


export default connectDb(protectedApi(handler))
