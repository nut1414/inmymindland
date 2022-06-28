import Registrant from '../../models/Registrant.js'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import collectResponse from '../../lib/collectResponse.js'
import { NextApiRequest, NextApiResponse } from 'next'

const ajv = new Ajv({ allErrors:true })
addFormats(ajv)

const schema = {
  type: 'object',
  properties: {
    fname: { type: 'string', minLength: 2, maxLength: 32 },
    lname: { type: 'string', minLength: 2, maxLength: 32 },
    email: { type: 'string', format: 'email', minLength: 5 },
    detail: { type: 'string', default: '-', maxLength: 512 }
  },
  required: ['fname','lname','email','detail']
}
const validate = ajv.compile(schema)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const serv = {req, res}
  const newRegistrant = { 
    firstname:req.body.fname,
    lastname:req.body.lname,
    email:req.body.email,
    detail:req.body.detail  
  }
  await collectResponse(serv,validate,newRegistrant,Registrant,process.env.CLASSSHEET || '')
}
