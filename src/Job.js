import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String },
  isFeatured: { type: Boolean, default: false },
  isNew: { type: Boolean, default: false },
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
