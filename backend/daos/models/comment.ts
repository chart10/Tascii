import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  taskId: { type: String, required: true },
});

export default mongoose.model('Comment', commentSchema);
