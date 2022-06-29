import mongoose from 'mongoose'

export interface IUser {
  name?:  string
  email?: string
  image?: string
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true })

export default mongoose.models.User || mongoose.model('User',userSchema)