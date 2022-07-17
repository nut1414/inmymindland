import { NextApiResponse } from 'next'
import { connectDb } from '../../../utils/middlewares/connectDb'
import { protectedApi } from '../../../utils/middlewares/protectedApi'
import { NextApiRequestWithMiddleware } from '../../../utils/middlewares'
import { HydratedSession } from '../auth/[...nextauth]'
import UserInfo from '../../../models/UserInfo'
import Job from '../../../models/Job'
import JobListing from '../../../models/JobListing'

interface JobDbQuery {
  workerinfo?: string,
  hirerinfo?: string,
}

async function handler(req: NextApiRequestWithMiddleware, res: NextApiResponse) {
  const session = (req.session) ? req.session : {} as HydratedSession 
  const user = await UserInfo.findByUserId(session.id)
  const { asworker } = req.query
  try{
    if(session.id)
      if (req.method === 'GET'){
        let query: JobDbQuery = {}
        if (asworker === 'true'){
          query.workerinfo = user._id
        }else {
          query.hirerinfo = user._id
        }
        const jobs = await Job.find(query)
        const jobcount = await Job.find(query).countDocuments()
        res.status(200).json({
          result: jobs,
          total: jobcount
        })
      }else if (req.method === 'POST'){
        if (typeof req.body.listinguid === 'string'){
          let listing = await JobListing.findOne(req.body.listinguid)
          if (listing){
            let newjob = await Job.create({
              name: listing.name,
              status: 'unconfirmed',
              listing: listing._id,
              hirerinfo: user._id,
              workerinfo: listing.userinfo,
              price: listing.price
            })
            res.status(200).json({
              status:'ok',
              job: newjob
            })
          }else {
            throw Error('invalid listing')
          }
        }else{
          throw Error('no listing uid')
        }
      }else {
        res.status(405).json({status:'error', error: 'method not allowed'})
      }
    else
      res.status(401).json({status:'error', error: 'unauthorized'})
  }catch (e: unknown){
    console.log(e)
    res.status(500).json({status:'error', error: 'internal server error'})
  }
}

export default connectDb(protectedApi(handler))
