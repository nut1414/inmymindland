import { NextApiResponse } from 'next'
import { protectedApi, NextApiRequestWithSession } from '../../../../utils/protectedApi'

async function handler(req: NextApiRequestWithSession, res: NextApiResponse) {
  res.status(200).json({status: 'success'})
}


export default protectedApi(handler)
