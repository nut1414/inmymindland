import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { NextApiRequestWithMiddleware } from './index'
import { getServerSession } from 'next-auth/next'
import { authOptions, HydratedSession } from '../../pages/api/auth/[...nextauth]'



export const protectedApi = (handler: NextApiHandler) => async (req: NextApiRequestWithMiddleware, res: NextApiResponse) => {
  req.session = await getServerSession({req,res}, authOptions) as HydratedSession || {} as HydratedSession
  if (req.session.id){
    return handler(req, res)
  }else {
    res.status(401).json({status:'error', error: 'unauthorized'})
  }
}
