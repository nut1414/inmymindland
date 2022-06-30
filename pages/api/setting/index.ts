import { NextApiResponse } from 'next'
import UserInfo from '../../../models/UserInfo'
import { connectDb } from '../../../utils/middlewares/connectDb'
import { protectedApi } from '../../../utils/middlewares/protectedApi'
import { NextApiRequestWithMiddleware } from '../../../utils/middlewares'

async function handler(req: NextApiRequestWithMiddleware, res: NextApiResponse) {
  if (req.method == 'GET' && req.session){
      let userinfo = await UserInfo.findByUserId(req.session.id)
      res.status(200).json({status: 'success', userinfo, id: req.session.id})
  }else {
    res.status(405).json({status:'error', error: 'method not allowed'})
  }
}


export default connectDb(protectedApi(handler))
