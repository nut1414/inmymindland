import mongoose from 'mongoose'
interface IJob {
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
  name: { type: String },
  description: { type: String },
  status: { type: String },
  hirer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  worker: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom' },
  price: { type: String },
  type: { type: String }
}, { timestamps: true })

export default mongoose.models.Job || mongoose.model('Job',jobSchema)