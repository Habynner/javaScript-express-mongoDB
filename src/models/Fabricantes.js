import mongoose from "mongoose";

const fabricanteSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String , required: true },
    nacionallity: { type: String },
}, {versionKey: false});

const fabricante = mongoose.model('fabricantes', fabricanteSchema);

export { fabricante, fabricanteSchema };