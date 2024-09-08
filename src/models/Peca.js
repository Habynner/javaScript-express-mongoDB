import { Decimal128 } from 'mongodb';
import mongoose from 'mongoose';
import { fabricanteSchema } from './Fabricantes.js';

const preco = new mongoose.Schema({
  $numberDecimal: { type: Decimal128 }
});

const pecaSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  tipo: { type: mongoose.Schema.Types.String, required: [true, 'The type of product is required'] },
  medida: { type: String, required: [true, 'The type of measure is required']},
  preco: { preco },
  quantidade: {
    type: Number,
    min: [0, 'The minimo quantity is 0.'],
    max: [200, 'The maximum quantity is 200.']
  },
  fabricante: fabricanteSchema
}, {versionKey: false});

const peca = mongoose.model('oleos', pecaSchema);

export default peca;