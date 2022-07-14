import { NextApiResponse } from 'next'
import { connectDb } from '../../../utils/middlewares/connectDb'
import { protectedApi } from '../../../utils/middlewares/protectedApi'
import { NextApiRequestWithMiddleware } from '../../../utils/middlewares'
import { HydratedSession } from '../auth/[...nextauth]'
import JobListing from '../../../models/JobListing'

async function handler(req: NextApiRequestWithMiddleware, res: NextApiResponse) {
  const { uid } = req.query 
  try{
    if(req.method === 'GET'){
      const listing = await JobListing.findOne({uid}).populate('user','worker')
      if (listing){
        res.status(200).json({status:'ok', listing})
      }else{
        res.status(404).json({status:'error', error: 'not found'})
      }
    }
  }catch (e: unknown){
    console.log(e)
    res.status(500).json({status:'error', error: 'internal server error'})
  }
}

export default connectDb(handler)
