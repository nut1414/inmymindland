import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  address: { type: String, default: '' },
  phone: { type: String, default: '' },
  birthdate: { type: Date },
  education: { type: String, default: '' },
})

const workerSchema = new mongoose.Schema({
  verified: { type: Boolean, default: false },
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  image: { type: String, default: '' },
  description: { type: String, default: '' },
  phone: { type: String, default: '' }
})

const userSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true },
  image: { type: String, required: true },
  contact: contactSchema,
  worker: workerSchema,
  type: { type: String, enum: ['user','worker','admin'], default: 'user' },
  chat: [ { type:mongoose.Schema.Types.ObjectId, ref: 'User' } ]
}, { timestamps: true })

export default mongoose.models.User || mongoose.model('User',userSchema)