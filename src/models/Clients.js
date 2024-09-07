import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: [true, 'The client name is required']},
  email: { type: String, required: [true, 'The client email is required']},
  phone: { type: Number, required: [true, 'The client phone number is required'] },
});

const client = mongoose.model('clientList', clientSchema);

export default client;