import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

export interface IJobListing {
  uid?: string
  status?: string
  name?: string
  description?: string
  worker?: mongoose.Types.ObjectId
  pricing?: string
  type?: string
  tags?: string[]
}

const jobListingSchema = new mongoose.Schema<IJobListing>({
  uid: { type: String, default: () => nanoid() },
  status: { type: String, default: '' },
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  worker: { type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo' },
  pricing: { type: String, default: '' },
  type: { type: String, default: '' },
  tags: [ String ],
}, { timestamps: true })

export default mongoose.models.JobListing || mongoose.model('JobListing',jobListingSchema)
