import { NextApiResponse } from 'next'
import UserInfo from '../../models/UserInfo'
import { connectDb } from '../../utils/middlewares/connectDb'
import { protectedApi } from '../../utils/middlewares/protectedApi'
import { NextApiRequestWithMiddleware } from '../../utils/middlewares'
import { HydratedSession } from './auth/[...nextauth]'


async function handler(req: NextApiRequestWithMiddleware, res: NextApiResponse) {
  const session = (req.session) ? req.session : {} as HydratedSession 
  try{
    if(session.id)
      if (req.method === 'GET'){
        let userinfo = await UserInfo.findByUserId(session.id)
        res.status(200).json({status: 'success', userinfo})
      }else if (req.method === 'PATCH'){
        let userinfo = await UserInfo.findOneAndUpdate({user:session.id},
          {
            contact: req.body.contact || {},
            worker_profile: req.body.worker_profile || {}
          },
          { new:true }).projection([
            (req.body.contact) ? 'contact' : '',
            (req.body.worker.worker_profile)  ? 'worker_profile'  : ''
          ]).lean()
        if (userinfo)
          res.status(200).json({status: 'success', userinfo})
        else
          throw Error('unknown user')
      } else {
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
