import { ValidateFunction } from 'ajv'
import mongoose from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'
import mongooseConnect from './database/mongooseConnect'
import { appendToSheet } from './sheet'


export default async function handler(serv:{ req: NextApiRequest ,res: NextApiResponse } ,validate: ValidateFunction, data: any, Model: typeof mongoose.Model,sheet: string) {
  try{
    let body = serv.req.body
    if (serv.req.method == 'POST'){
      await mongooseConnect()
      const valid = validate(body)

      if (!valid){
        serv.res.status(400).json({ success: false, message:'Invalid request.', errors: validate.errors })
      }else{
        const a = await Model.create(data)
        data.createdAt = a.createdAt
        data.id = a._id
        const sheetarr: string[] = Object.values(data)
        await appendToSheet(process.env.SHEETID || '',`${sheet}!A2:${sheetarr.length}`,Object.values(sheetarr))
        serv.res.status(200).json({ success: true, data })
      }
  
    }else{
      serv.res.status(405).json({ success: false, message:`Cannot ${serv.req.method}` })
    }
  }catch(e){
    console.error(e)
    serv.res.status(500).json({ success: false, message:`Internal Server Error.` })
  }
  

}
