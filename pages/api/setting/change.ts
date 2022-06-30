import { NextApiResponse } from 'next'
import { connectDb } from '../../../utils/middlewares/connectDb'
import { NextApiRequestWithMiddleware } from '../../../utils/middlewares'
import { protectedApi } from '../../../utils/middlewares/protectedApi'

async function handler(req: NextApiRequestWithMiddleware, res: NextApiResponse) {
  res.status(200).json({status: 'success'})
}


export default connectDb(protectedApi(handler))
