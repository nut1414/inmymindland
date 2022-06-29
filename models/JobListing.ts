import mongoose from 'mongoose'

const jobListingSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  worker: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  pricing: { type: String },
  type: { type: String },
  tags: [ String ],
}, { timestamps: true })

export default mongoose.models.JobListing || mongoose.model('JobListing',jobListingSchema)