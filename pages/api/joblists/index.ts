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
  tags ?: { '$in'?: string[], '$exists'?: boolean } | string[]
  price ?: { '$lte'?: number, '$gte'?: number }
  user ?: string
}

async function handler(req: NextApiRequestWithMiddleware, res: NextApiResponse) {
  const session = (req.session) ? req.session : {} as HydratedSession 
  const usersInfo = await UserInfo.findByUserId(session.id)
  const { page, tags, pmin, pmax, psort, s, lim, userid } = req.query
  const pagenum = parseInt(page as string) || 1
  const limit = parseInt(lim as string) || 25
  const pricemin = parseInt(pmin as string)
  const pricemax = parseInt(pmax as string)
  const pricesort = (psort as string === 'DESC') ? {price: -1} : {price: 1}
  try{
    if (req.method === 'GET'){
      let query: ListingDbQuery = {}
      if (typeof s === 'string' && s.length) {
        query.name = { '$regex': s, '$options': 'i'}
      }
      if (typeof userid === 'string') {
        query.user = userid
      }
      if (tags instanceof Array){
        const filteredtags = tags.filter((s)=>s.length)
        if (filteredtags.length)
          query.tags = {$in: [...filteredtags]}
      }else if (typeof tags === 'string'){
        if (tags.length){
          query.tags = {$in: [tags]}
        }
        
      }
      if (!isNaN(pricemin) || !isNaN(pricemax)){
        query.price = {}
        query.price['$lte'] = clamp(pricemax, 0, 20000)
        query.price['$gte'] = clamp(pricemin, 0, 20000)
      }
      const joblist = await JobListing.find(query,{},{limit:clamp(limit,1,100), skip:clamp((pagenum-1)*limit, 0, 2000)}).populate('userinfo',[
        'worker_profile', 'user'
      ]).sort(pricesort)
      const jobcount = await JobListing.find(query).countDocuments()
      res.status(200).json({
        status:'ok',
        result: joblist,
        total: jobcount,
        page: pagenum,
        total_pages: Math.ceil(jobcount / limit),
        limit: limit,
        query:{
          string: s,
          tags: query.tags,
          price_min: pmin,
          price_max: pmax,
          userid,
          price_sort: (psort === 'DESC') ? 'DESC' : 'ASC'
        }
      })
    }else if (usersInfo.role === 'worker' || 
              usersInfo.role === 'admin'){
      if (req.method === 'POST'){
        console.log(usersInfo)
        const newlisting = await JobListing.create({
          status: req.body.status,
          image: req.body.image,
          name: req.body.name,
          description: req.body.description,
          userinfo: usersInfo.id,
          price: req.body.price,
          tags: req.body.tags
        },)
        res.status(201).json({status:'ok', listing: newlisting})
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
