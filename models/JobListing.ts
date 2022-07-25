import mongoose from 'mongoose'
import { nanoid } from 'nanoid'
import { IImage, ImageSchema } from './schemas/Image'



export interface IJobListing {
  uid: string
  status: string
  image: IImage
  additionalImage: IImage[]
  name: string
  description: string
  userinfo: mongoose.Types.ObjectId
  price: number
  tags: string[]
}

const jobListingSchema = new mongoose.Schema<IJobListing>({
  uid: { type: String, default: () => nanoid() },
  status: { type: String, default: 'published', enum: ['draft', 'published'] },
  image: { type: ImageSchema, default: { url:'/temp.jpg'} },
  additionalImage: [ ImageSchema ],
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  userinfo: { type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo' },
  price: { type: Number, default: 0 },
  tags: [ String ],
}, { timestamps: true })

export default mongoose.models.JobListing || mongoose.model('JobListing',jobListingSchema)
