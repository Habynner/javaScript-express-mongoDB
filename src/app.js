import express from 'express';
import connectDatabase from './config/dbConnect.js';
import routes from './routes/index.js';

const connect = await connectDatabase();

connect.on('error', (err) => {
    console.error('connection error', err);
});

connect.once('open', () => {
    console.log('connection with mongoDb was successfully.');
});

const app = express();
routes(app);

// function getProduct(id){
//     return products.findIndex(product => {
//         return product.id === Number(id);
//     });
// }

// app.put('/product/up', async (req, res) => {
//     const upPeca = await peca.updateOne(req.body);
//     res.status(200).json(upPeca);
// })

export default app;
