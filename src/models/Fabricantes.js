import mongoose from 'mongoose';

const fabricanteSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String , required: [true, 'The manufacturer name, is required'] },
  nacionallity: { type: String, required: [true, 'The nacionallity name, is required'] },
}, {versionKey: false});

const fabricante = mongoose.model('fabricantes', fabricanteSchema);

export { fabricante, fabricanteSchema };