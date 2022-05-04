import dbConnect from '../../lib/db.js'
import Registrant from '../../models/Registrant.js'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
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
  try{
    if (req.method == 'POST'){
      await dbConnect()
      const valid = validate(req.body)

      if (!valid){
        res.status(400).json({success: false, message:'Invalid request.', errors: validate.errors})
      }else{
        req.body.phone = req.body.phone.split("-|(|)|+").join("")

        const newRegistrant = { 
          firstname:req.body.fname,
          lastname:req.body.lname,
          email:req.body.email,
          phone:req.body.phone  
        }
        
        const a = await Registrant.create( newRegistrant )
        res.status(200).json({ success: true, data: newRegistrant })
      }

    }else{
      res.status(405).json({success: false, message:`Cannot ${req.method}`})
    }
  }catch(e){
    console.log(e)
    res.status(500).json({success: false, message:`Internal Server Error.`})
  }
  

}
