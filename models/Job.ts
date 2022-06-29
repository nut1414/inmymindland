import mongoose from 'mongoose'

const jobListingSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  status: { type: String },
  hirer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  worker: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom' },
  price: { type: String },
  type: { type: String }
}, { timestamps: true })

export default mongoose.models.Job || mongoose.model('Job',jobListingSchema)