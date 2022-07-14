import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

export interface IJobListing {
  uid?: string
  status?: string
  name?: string
  description?: string
  worker?: mongoose.Types.ObjectId
  price?: number
  tags?: string[]
}

const jobListingSchema = new mongoose.Schema<IJobListing>({
  uid: { type: String, default: () => nanoid() },
  status: { type: String, default: '',  enum: ['draft', 'publish'] },
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  worker: { type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo' },
  price: { type: Number, default: '' },
  tags: [ String ],
}, { timestamps: true })

export default mongoose.models.JobListing || mongoose.model('JobListing',jobListingSchema)
