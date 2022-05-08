import Follower from '../../models/Follower.js'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import collectResponse from '../../lib/collectResponse.js'

const ajv = new Ajv({ allErrors:true })
addFormats(ajv)

const schema = {
  type: 'object',
  properties: {
    fname: { type: 'string', minLength: 1 },
    lname: { type: 'string', minLength: 1 },
    email: { type: 'string', format: 'email', minLength: 1 },
    detail: { type: 'string', default: '-' }
  },
  required: ['fname','lname','email']
}
const validate = ajv.compile(schema)

export default async function handler(req, res) {
  const serv = {req, res}
  const newFollower = { 
    firstname:req.body.fname,
    lastname:req.body.lname,
    email:req.body.email,
    detail:req.body.detail  
  }

  await collectResponse(serv,validate,newFollower,Follower,process.env.FOLLOWSHEET)
}
