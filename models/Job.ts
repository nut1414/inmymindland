import mongoose from 'mongoose'
import { nanoid } from 'nanoid'
interface IJob {
  uid?: string
  name?: string
  description?: string
  hirer?: mongoose.Types.ObjectId
  worker?: mongoose.Types.ObjectId
  chat?: mongoose.Types.ObjectId 
  status?: string
  price?: string
  type?: string
  tags?: string[]
}

const jobSchema = new mongoose.Schema<IJob>({
  uid: { type: String, default: () => nanoid() },
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  status: { type: String, default: '' },
  hirer: { type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo' },
  worker: { type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo' },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom' },
  price: { type: String, default: '' },
  type: { type: String, default: '' }
}, { timestamps: true })

export default mongoose.models.Job || mongoose.model('Job',jobSchema)