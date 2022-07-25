import mongoose from 'mongoose'
import { nanoid } from 'nanoid'
import Chatroom from './Chatroom'
import { IJobListing } from './JobListing'
interface IJob {
  uid?: string
  name?: string
  listing?: mongoose.Types.ObjectId
  hirerinfo?: mongoose.Types.ObjectId
  workerinfo?: mongoose.Types.ObjectId
  chatroom?: mongoose.Types.ObjectId 
  status?: string
  price?: number
}

interface JobModel extends mongoose.Model<IJob> {
  createWithChat(listing: IJobListing, userid: string): Promise<IJob>
}

const jobSchema = new mongoose.Schema<IJob>({
  uid: { type: String, default: () => nanoid() },
  name: { type: String, default: '' },
  status: { type: String, enum: ['unconfirmed','confirmed','paid','done'], default: 'unconfirmed' },
  listing:  { type: mongoose.Schema.Types.ObjectId, ref: 'JobListing' },
  hirerinfo: { type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo' },
  workerinfo: { type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo' },
  chatroom: { type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom' },
  price: { type: Number, default: 0 },
}, { timestamps: true })

jobSchema.static('createWithChat', async function(listing, userid){
  let newjob = new this({
    name: listing.name,
    status: 'unconfirmed',
    listing: listing._id,
    hirerinfo: userid,
    workerinfo: listing.userinfo,
    price: listing.price
  })
  let newchatroom = await Chatroom.create({
    name: `${newjob._id}`,
    messages: []
  })
  if (newchatroom){
    newjob.chatroom = newchatroom._id
  }else {
    throw Error('Failed to create chatroom')
  }
  await newjob.save()
})

export default mongoose.models.Job as JobModel || mongoose.model<IJob,JobModel>('Job',jobSchema)