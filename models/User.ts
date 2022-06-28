import mongoose from 'mongoose'

const registrantSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true },
  image: { type: String, required: true },
  phone: { type: String, default: '' },
  birthdate: { type: Date },
  sex: { type: String, enum: ['male','female','unspecified','other'], default: 'unspecified'},
  education: { type: String },
  address: { type: String },
  type: { type: String, enum: ['user','worker','admin'], default: 'user' }
}, { timestamps: true })

export default mongoose.models.User || mongoose.model('User',registrantSchema)