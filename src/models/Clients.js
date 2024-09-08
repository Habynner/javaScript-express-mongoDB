import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: [true, 'The client name is required']},
  email: { type: String, required: [true, 'The client email is required']},
  phone: {
    type: Number,
    required: [true, 'The client phone number is required'],
    validate: {
      validator: (valor) => {
        return /\d{3}-\d{3}-\d{4}/.test(valor);
      },
      message: '{VALUE} is not a phone number.'
    }
  },
});

const client = mongoose.model('clientList', clientSchema);

export default client;