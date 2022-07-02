import { NextApiResponse } from 'next'
import UserInfo from '../../models/UserInfo'
import { connectDb } from '../../utils/middlewares/connectDb'
import { protectedApi } from '../../utils/middlewares/protectedApi'
import { NextApiRequestWithMiddleware } from '../../utils/middlewares'
import { HydratedSession } from './auth/[...nextauth]'


async function handler(req: NextApiRequestWithMiddleware, res: NextApiResponse) {
  const session = (req.session) ? req.session : {} as HydratedSession 
  try{
    if (req.method === 'GET'){
      let userinfo = await UserInfo.findByUserId(session.id)
      res.status(200).json({status: 'success', userinfo})
    }else if (req.method === 'POST'){
      let userinfo = await UserInfo.findOneAndUpdate({user:session.id},
        {
          contact: req.body.contact || {},
          worker: req.body.worker || {}
        },
        { new:true }).projection([
          (req.body.contact) ? 'contact' : '',
          (req.body.worker)  ? 'worker'  : ''
        ]).lean()
      res.status(200).json({status: 'success', userinfo})
    } else {
      res.status(405).json({status:'error', error: 'method not allowed'})
    }
  }catch (e: unknown){
    console.log(e)
    res.status(500).json({status:'error', error: 'internal server error'})
  }
  
}


export default connectDb(protectedApi(handler))
