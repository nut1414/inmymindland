import mongoose from 'mongoose'

const registrantSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  detail: { type: String, default: '' }
}, { timestamps: true })

export default mongoose.models.Registrant || mongoose.model('Registrant',registrantSchema)