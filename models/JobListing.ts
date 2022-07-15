import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

export interface IJobListing {
  uid?: string
  status?: string
  image?: string
  name?: string
  description?: string
  user?: mongoose.Types.ObjectId
  price?: number
  tags?: string[]
}

const jobListingSchema = new mongoose.Schema<IJobListing>({
  uid: { type: String, default: () => nanoid() },
  status: { type: String, default: '',  enum: ['draft', 'publish'] },
  image: { type: String, default: '/temp.jpg' },
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo' },
  price: { type: Number, default: '' },
  tags: [ String ],
}, { timestamps: true })

export default mongoose.models.JobListing || mongoose.model('JobListing',jobListingSchema)
