import { Decimal128 } from "mongodb";
import mongoose from "mongoose";
import { fabricanteSchema } from './Fabricantes.js'

const preco = new mongoose.Schema({
    $numberDecimal: { type: String }
});

const pecaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    tipo: { type: mongoose.Schema.Types.String, required: true },
    medida: { type: String },
    preco: { type: Number },
    fabricante: fabricanteSchema
}, {versionKey: false});

const peca = mongoose.model('oleos', pecaSchema);

export default peca;