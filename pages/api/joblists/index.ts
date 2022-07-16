import { NextApiResponse } from 'next'
import { connectDb } from '../../../utils/middlewares/connectDb'
import { protectedApi } from '../../../utils/middlewares/protectedApi'
import { NextApiRequestWithMiddleware } from '../../../utils/middlewares'
import { HydratedSession } from '../auth/[...nextauth]'
import UserInfo from '../../../models/UserInfo'
import JobListing from '../../../models/JobListing'
import clamp from '../../../utils/clamp'
interface ListingDbQuery {
  name ?: { '$regex'?: string, '$options'?: string } | string
  tags ?: { '$in'?: string[], '$exists'?: boolean }
  price ?: { '$lte'?: number, '$gte'?: number }
  user ?: string
}

async function handler(req: NextApiRequestWithMiddleware, res: NextApiResponse) {
  const session = (req.session) ? req.session : {} as HydratedSession 
  const user = await UserInfo.findByUserId(session.id)
  const { page, tags, min, max, s, userid } = req.query
  const pagenum = parseInt(page as string) || 1
  const pricemin = parseInt(min as string)
  const pricemax = parseInt(max as string)
  try{
    if (req.method === 'GET'){
      let query: ListingDbQuery = {}
      if (typeof s === 'string') {
        query.name = { '$regex': s, '$options': 'i'}
      }
      if (typeof userid === 'string') {
        query.user = userid
      }
      if (tags instanceof Array){
        query.tags = tags.length ? { "$in": tags } : { "$exists": true }
      }
      if (!isNaN(pricemin) || !isNaN(pricemax)){
        query.price = {}
        query.price['$lte'] = clamp(pricemax, 0, 20000)
        query.price['$gte'] = clamp(pricemin, 0, 20000)
      }

      const joblist = await JobListing.find(query,{},{limit: 25, skip:clamp((pagenum-1)*25, 0, 2000)})
      const jobcount = await JobListing.find(query).countDocuments()
      res.status(200).json({
        result: joblist,
        total: jobcount
      })
    }else if (user.role === 'worker' || 
              user.role === 'admin'){
      if (req.method === 'POST'){
        const newlisting = await JobListing.create({
          status: req.body.status,
          image: req.body.image,
          name: req.body.name,
          description: req.body.description,
          user: session.id,
          price: req.body.price,
          tags: req.body.tags
        },)
        res.status(200).json({status:'ok', listing: newlisting})
      } else {
        res.status(405).json({status:'error', error: 'method not allowed'})
      }
    }else {
      res.status(405).json({status:'error', error: 'method not allowed'})
    }
  }catch (e: unknown){
    console.log(e)
    res.status(500).json({status:'error', error: 'internal server error'})
  }
}

export default connectDb(protectedApi(handler))
