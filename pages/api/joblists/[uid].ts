import { NextApiResponse } from 'next'
import { connectDb } from '../../../utils/middlewares/connectDb'
import { protectedApi } from '../../../utils/middlewares/protectedApi'
import { NextApiRequestWithMiddleware } from '../../../utils/middlewares'
import { HydratedSession } from '../auth/[...nextauth]'
import JobListing from '../../../models/JobListing'
import UserInfo from '../../../models/UserInfo'


async function handler(req: NextApiRequestWithMiddleware, res: NextApiResponse) {
  const session = (req.session) ? req.session : {} as HydratedSession 
  const user = await UserInfo.findByUserId(session.id)
  const { uid } = req.query 
  
  try{
    if(req.method === 'GET'){
      const listing = await JobListing.findOne({uid}).populate('user','worker')
      if (listing){
        res.status(200).json({status:'ok', listing})
      }else{
        res.status(404).json({status:'error', error: 'not found'})
      }

    }else if (user.role === 'worker' || 
              user.role === 'admin'){
      if (req.method === 'PATCH'){
        const changes = {
          status: req.body.status,
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          tags: req.body.tags
        }
        const listing = await JobListing.findOneAndUpdate({uid, user: user._id},changes,{new:true})
        if (listing){
          res.status(200).json({status:'ok', listing})
        }else{
          res.status(404).json({status:'error', error: 'not found'})
        }

      }else if (req.method === 'DELETE'){
        const listing = await JobListing.findOneAndDelete({uid, user: user._id})
        if (listing){
          res.status(200).json({status:'ok', listing})
        }else{
          res.status(404).json({status:'error', error: 'not found'})
        }

      }else{
        res.status(405).json({status:'error', error: 'method not allowed'})
      }
    }else{
      res.status(405).json({status:'error', error: 'method not allowed'})
    }
  }catch (e: unknown){
    console.log(e)
    res.status(500).json({status:'error', error: 'internal server error'})
  }
}

export default connectDb(protectedApi(handler))
