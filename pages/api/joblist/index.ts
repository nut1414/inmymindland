import { NextApiResponse } from 'next'
import { connectDb } from '../../../utils/middlewares/connectDb'
import { protectedApi } from '../../../utils/middlewares/protectedApi'
import { NextApiRequestWithMiddleware } from '../../../utils/middlewares'
import { HydratedSession } from './../auth/[...nextauth]'
import UserInfo from '../../../models/UserInfo'

async function handler(req: NextApiRequestWithMiddleware, res: NextApiResponse) {
  const session = (req.session) ? req.session : {} as HydratedSession 
  const user = await UserInfo.findByUserId(session.id)
  try{
    if (user.type === 'worker' || 
        user.type === 'admin'){
      if (req.method === 'GET'){

      } else if (req.method === 'POST'){

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
