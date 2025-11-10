import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  condition: { type: String },
  location: { type: String },
  status: { type: String, enum: ['available','exchanged'], default: 'available' },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Item', itemSchema);
