import { NextApiResponse } from 'next'
import { connectDb } from '../../../utils/middlewares/connectDb'
import { protectedApi } from '../../../utils/middlewares/protectedApi'
import { NextApiRequestWithMiddleware } from '../../../utils/middlewares'
import { HydratedSession } from '../auth/[...nextauth]'
import JobListing, { IJobListing } from '../../../models/JobListing'
import UserInfo from '../../../models/UserInfo'

interface IRecommendation {
  listing?: IJobListing[]
  total?: number
}

async function handler(req: NextApiRequestWithMiddleware, res: NextApiResponse) {
  const session = (req.session) ? req.session : {} as HydratedSession 
  const usersInfo = await UserInfo.findByUserId(session.id)
  const { uid, recommend } = req.query 
  const findrecommend = (recommend === 'false') ? false : true 
  try{
    if(req.method === 'GET'){
      const listing = await JobListing.findOne({uid}).populate('userinfo',[
        'worker_profile', 'user'
      ])
      let recommendation: IRecommendation | undefined = undefined
      if (findrecommend === true) {
        const reclist = await JobListing.find({tags: {$in: [...listing.tags]}},{},{limit:10})
        recommendation = {
          listing: reclist,
          total: reclist.length
        }
      }
      if (listing){
        res.status(200).json({status:'ok', listing, recommendation})
      }else{
        res.status(404).json({status:'error', error: 'not found'})
      }

    }else if (usersInfo.role === 'worker' || 
              usersInfo.role === 'admin'){
      if (req.method === 'PATCH'){
        const changes = {
          status: req.body.status,
          name: req.body.name,
          image: req.body.image,
          additionalImage: req.body.additionalImage,
          description: req.body.description,
          price: req.body.price,
          tags: req.body.tags
        }
        const query: {uid:string, user?:string} = {uid} as { uid: string }
        if(usersInfo.role === 'worker'){
          query.user = session.id
        }
        const listing = await JobListing.findOneAndUpdate(query,changes,{new:true})
        if (listing){
          res.status(200).json({status:'ok', listing})
        }else{
          res.status(404).json({status:'error', error: 'not found'})
        }

      }else if (req.method === 'DELETE'){
        const query: {uid:string, user?:string} = {uid} as { uid: string }
        if(usersInfo.role === 'worker'){
          query.user = session.id
        }
        const listing = await JobListing.findOneAndDelete(query)
        if (listing){
          res.status(200).json({status:'ok', listing})
        }else{
          res.status(404).json({status:'error', error: 'not found'})
        }

      }else{
        res.status(405).json({status:'error', error: 'method not allowed'})
      }
    }else{
      res.status(401).json({status:'error', error: 'unauthorized'})
    }
  }catch (e: unknown){
    console.log(e)
    res.status(500).json({status:'error', error: 'internal server error'})
  }
}

export default connectDb(protectedApi(handler))
