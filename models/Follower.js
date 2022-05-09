import mongoose from 'mongoose'

const followerSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  detail: { type: String, default: '' }
}, { timestamps: true })

export default mongoose.models.Follower || mongoose.model('Follower',followerSchema)