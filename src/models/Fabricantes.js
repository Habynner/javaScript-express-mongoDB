import mongoose from 'mongoose';

const fabricanteSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  name: {
    type: String,
    required: [true, 'The manufacturer name, is required'],
    enum: {
      values: ['Shell', 'Texaco', 'Ford', 'Mobil', 'Lubrax' ],
      message: 'The manufacturer {VALUE}, is not credentiated.'
    }
  },
  nacionallity: { type: String },
}, {versionKey: false});

const manufacturer = mongoose.model('fabricantes', fabricanteSchema);

export { manufacturer, fabricanteSchema };