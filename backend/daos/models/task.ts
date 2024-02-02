import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  columnId: { type: String, required: true, default: 'todo' },
  description: { type: String },
});

export default mongoose.model('Task', taskSchema);
