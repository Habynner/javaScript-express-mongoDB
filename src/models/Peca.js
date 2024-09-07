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
  fabricante: fabricanteSchema
}, {versionKey: false});

const peca = mongoose.model('oleos', pecaSchema);

export default peca;