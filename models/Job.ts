import mongoose from 'mongoose'
import { nanoid } from 'nanoid'
interface IJob {
  uid?: string
  name?: string
  listing?: mongoose.Types.ObjectId
  hirerinfo?: mongoose.Types.ObjectId
  workerinfo?: mongoose.Types.ObjectId
  chat?: mongoose.Types.ObjectId 
  status?: string
  price?: number
}

const jobSchema = new mongoose.Schema<IJob>({
  uid: { type: String, default: () => nanoid() },
  name: { type: String, default: '' },
  status: { type: String, enum: ['unconfirmed','confirmed','paid','done'], default: 'unconfirmed' },
  listing:  { type: mongoose.Schema.Types.ObjectId, ref: 'JobListing' },
  hirerinfo: { type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo' },
  workerinfo: { type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo' },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom' },
  price: { type: Number, default: 0 },
}, { timestamps: true })

export default mongoose.models.Job || mongoose.model('Job',jobSchema)