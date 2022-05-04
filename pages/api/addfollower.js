import dbConnect from '../../lib/db.js'
import Follower from '../../models/Follower.js'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
const ajv = new Ajv({ allErrors:true })
addFormats(ajv)

const schema = {
  type: 'object',
  properties: {
    fname: { type: 'string', minLength: 1 },
    lname: { type: 'string', minLength: 1 },
    email: { type: 'string', format: 'email', minLength: 1 },
    detail: { type: 'string', default: '' }
  },
  required: ['fname','lname','email']
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
        const newFollower = { 
          firstname:req.body.fname,
          lastname:req.body.lname,
          email:req.body.email,
          detail:req.body.detail  
        }

        const a = await Follower.create(newFollower)
        res.status(200).json({ success: true, data: newFollower })
      }
  
    }else{
      res.status(405).json({success: false, message:`Cannot ${req.method}`})
    }
  }catch(e){
    console.log(e)
    res.status(500).json({success: false, message:`Internal Server Error.`})
  }
  

}
