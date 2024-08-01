import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true},
    email: { type: String, required: true},
    phone: { type: Number, required: true },
});

const client = mongoose.model('clientList', clientSchema);

export default client;