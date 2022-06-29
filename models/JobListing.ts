import mongoose from 'mongoose'

export interface IJobListing {
  name?: string
  description?: string
  worker?: mongoose.Types.ObjectId
  pricing?: string
  type?: string
  tags?: string[]
}

const jobListingSchema = new mongoose.Schema<IJobListing>({
  name: { type: String },
  description: { type: String },
  worker: { type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo' },
  pricing: { type: String },
  type: { type: String },
  tags: [ String ],
}, { timestamps: true })

export default mongoose.models.JobListing || mongoose.model('JobListing',jobListingSchema)