import { NextApiResponse } from 'next'
import { connectDb } from '../../../utils/middlewares/connectDb'
import { protectedApi } from '../../../utils/middlewares/protectedApi'
import { NextApiRequestWithMiddleware } from '../../../utils/middlewares'
import { HydratedSession } from '../auth/[...nextauth]'
import UserInfo from '../../../models/UserInfo'
import JobListing from '../../../models/JobListing'


async function handler(req: NextApiRequestWithMiddleware, res: NextApiResponse) {
  const session = (req.session) ? req.session : {} as HydratedSession 
  const user = await UserInfo.findByUserId(session.id)
  const { page, tags, jobsearch } = req.query
  try{
    if (req.method === 'GET'){
      const query: any = { 
        "$text": jobsearch ? {"$search": jobsearch} : {},
        tags: tags ? { "$in": tags } : { "$exists": true }
      }
      const joblist = await JobListing.find(query,{},{limit: 25, skip:Math.min(Math.max((+page-1)*25, 0), 2000)})
      const jobcount = await JobListing.find(query).countDocuments()
      res.status(200).json({
        result: joblist,
        total: jobcount
      })
    }else {
      res.status(405).json({status:'error', error: 'method not allowed'})
    }
    if (user.type === 'worker' || 
        user.type === 'admin'){
          
      if (req.method === 'POST'){
        const newlisting = await JobListing.create({
          status: req.body.status,
          name: req.body.name,
          description: req.body.description,
          worker: user.id,
          price: req.body.price,
          tags: req.body.tags
        },)
        res.status(200).json({status:'ok', lists: newlisting})
      } else {
        res.status(405).json({status:'error', error: 'method not allowed'})
      }
    }else {
      res.status(401).json({status:'error', error: 'unauthorized'})
    }
  }catch (e: unknown){
    console.log(e)
    res.status(500).json({status:'error', error: 'internal server error'})
  }
}

export default connectDb(protectedApi(handler))
