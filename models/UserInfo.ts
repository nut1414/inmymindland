import mongoose from 'mongoose'
import User, { IUser } from './User'

export interface IContact {
  name?: string
  email?: string
  address?: string
  phone?: string 
  birthdate?: Date
  education?: string,
}

export interface IWorkerProfile {
  name?:  string
  image?: string
  description?: string
}

export interface IUserInfo {
  user?: mongoose.Types.ObjectId
  contact?: IContact,
  worker_profile?: IWorkerProfile,
  role?: 'user' | 'worker' | 'admin',
  chat?: mongoose.Types.ObjectId[]
}

interface UserInfoModel extends mongoose.Model<IUserInfo> {
  findByUserId(userid: string): Promise<any>
}

const contactSchema = new mongoose.Schema<IContact>({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  address: { type: String, default: '' },
  phone: { type: String, default: '' },
  birthdate: { type: Date, default: new Date() },
  education: { type: String, default: '' },
})

const workerProfileSchema = new mongoose.Schema<IWorkerProfile>({
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
})

const userInfoSchema = new mongoose.Schema<IUserInfo>({
  user: { type:mongoose.Schema.Types.ObjectId, ref: 'User' },
  contact: contactSchema,
  worker_profile: workerProfileSchema,
  role: { type: String, enum: ['user','worker','admin'], default: 'user' },
  chat: [ { type:mongoose.Schema.Types.ObjectId, ref: 'Chatroom' } ]
}, { timestamps: true })



userInfoSchema.static('findByUserId',async function( userid: string ) {
  let userinfo = await this.findOne({user:userid}).populate('user')
  if (!userinfo){
    // will turn this into static later
      await User.findById(userid).then(async (user)=>{
      if (!user) return
      else {userinfo = await this.create(
        {
          user: new mongoose.Types.ObjectId(userid),
          contact:{ 
                    name: user.name, email: user.email 
                  },
          worker_profile: {
                    name: user.name, description: user.description, image: user.image
                  }
        }
      )
      userinfo.user = user
    }
    })
  }
  return userinfo
})

export default mongoose.models.UserInfo as UserInfoModel 
            || mongoose.model<IUserInfo,UserInfoModel>('UserInfo',userInfoSchema)