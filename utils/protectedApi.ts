import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-auth'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../pages/api/auth/[...nextauth]'

export type NextApiRequestWithSession = NextApiRequest & {
  session?: Session | null
} 

export const protectedApi = (handler: NextApiHandler) => async (req: NextApiRequestWithSession, res: NextApiResponse) => {
  req.session = await getServerSession({req,res}, authOptions)
  if (req.session){
    return handler(req, res)
  }else {
    res.status(401).json({error: 'unauthorized'})
  }
}

export default protectedApi

