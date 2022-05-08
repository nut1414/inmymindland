import Registrant from '../../models/Registrant.js'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import collectResponse from '../../lib/collectResponse.js'

const ajv = new Ajv({ allErrors:true })
ajv.addFormat('phonenumber', /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
addFormats(ajv)

const schema = {
  type: 'object',
  properties: {
    fname: { type: 'string', minLength: 1 },
    lname: { type: 'string', minLength: 1 },
    email: { type: 'string', format: 'email' },
    phone: { type: 'string', format: 'phonenumber', minLength: 9, maxLength: 13 }
  },
  required: ['fname','lname','email','phone']
}
const validate = ajv.compile(schema)

export default async function handler(req, res) {
  const serv = {req, res}
  req.body.phone = req.body.phone.split("-|(|)|+").join("")
  const newRegistrant = { 
    firstname:req.body.fname,
    lastname:req.body.lname,
    email:req.body.email,
    phone:req.body.phone  
  }

  await collectResponse(serv,validate,newRegistrant,Registrant,process.env.CLASSSHEET)
}
