import { HydratedSession } from '../../pages/api/auth/[...nextauth]'
import { NextApiRequest } from 'next'

export interface NextApiRequestWithMiddleware extends NextApiRequest  {
  session?: HydratedSession
} 