import mongoose from 'mongoose'

export interface IContact {
  name?: string
  email?: string
  address?: string
  phone?: string 
  birthdate?: Date
  education?: string,
}

export interface IWorker {
  verified?: boolean
  name?:  string
  email?: string
  image?: string
  description?: string
  phone?: string
}

export interface IUserInfo {
  userid?: mongoose.Types.ObjectId
  contact?: IContact,
  worker?: IWorker,
  type?: 'user' | 'worker' | 'admin',
  chat?: mongoose.Types.ObjectId[]
}

const contactSchema = new mongoose.Schema<IContact>({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  address: { type: String, default: '' },
  phone: { type: String, default: '' },
  birthdate: { type: Date, default: new Date() },
  education: { type: String, default: '' },
})

const workerSchema = new mongoose.Schema<IWorker>({
  verified: { type: Boolean, default: false },
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  image: { type: String, default: '' },
  description: { type: String, default: '' },
  phone: { type: String, default: '' }
})

const userInfoSchema = new mongoose.Schema<IUserInfo>({
  userid: { type:mongoose.Schema.Types.ObjectId, ref: 'User' },
  contact: contactSchema,
  worker: workerSchema,
  type: { type: String, enum: ['user','worker','admin'], default: 'user' },
  chat: [ { type:mongoose.Schema.Types.ObjectId, ref: 'Chatroom' } ]
}, { timestamps: true })

export default mongoose.models.UserInfo || mongoose.model('UserInfo',userInfoSchema)