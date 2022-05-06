import mongoose from 'mongoose'

const tutortaskSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  subjects: { type: String, required: true },
  gender: { type: String, required: true },
  level: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  purpose: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true },
  way: { type: String, required: true },
  price: { type: String, required: true },
  detail: { type: String, required: true },
  status: { type: String, enum: ['found','finding','waiting'], default: 'waiting'},
  tutor: { type: String, default: '' }
}, { timestamps: true })

export default mongoose.models.TutorTask || mongoose.model('TutorTask',tutortaskSchema)