import { NextApiResponse } from 'next'
import { connectDb } from '../../../utils/middlewares/connectDb'
import { protectedApi } from '../../../utils/middlewares/protectedApi'
import { NextApiRequestWithMiddleware } from '../../../utils/middlewares'
import { HydratedSession } from '../auth/[...nextauth]'
import JobListing from '../../../models/JobListing'

async function handler(req: NextApiRequestWithMiddleware, res: NextApiResponse) {
  const session = (req.session) ? req.session : {} as HydratedSession 
  const { id } = req.query 
  try{
    const listing = 0
  }catch (e: unknown){
    console.log(e)
    res.status(500).json({status:'error', error: 'internal server error'})
  }
}

export default connectDb(protectedApi(handler))
