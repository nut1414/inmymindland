import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { NextApiRequestWithMiddleware } from './index'
import { getServerSession } from 'next-auth/next'
import { authOptions, HydratedSession } from '../../pages/api/auth/[...nextauth]'



export const protectedApi = (handler: NextApiHandler) => async (req: NextApiRequestWithMiddleware, res: NextApiResponse) => {
  req.session = await getServerSession({req,res}, authOptions) as HydratedSession || {} as HydratedSession
  return handler(req, res)
}
