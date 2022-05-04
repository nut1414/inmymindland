import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI
const opts = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}


if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

// Global is used to prevent connections from growing exponentially during API Route usage in development.
global.mongoose = global.mongoose || { conn: null }
const cached = global.mongoose


export default async function dbConnect() {
  try {
    if (!cached.conn) {
        console.log('Connecting to MongoDb..')
        const conn = await mongoose.connect(MONGODB_URI,opts)
        cached.conn = conn
      } 
  }catch (e) {
    throw new Error(e)
  } 
  
  return cached.conn
}