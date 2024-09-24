import express from 'express';
import connectDatabase from './config/dbConnect.js';
import manipulador404 from './middlewares/manipulation404.js';
import manipuladorDeErros from './middlewares/errosManipulation.js';
import routes from './routes/index.js';

const connect = await connectDatabase();

connect.on('error', (err) => {
  console.error('connection error', err);
});

connect.once('open', () => {
  console.log('connection with mongoDb was successfully.');
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipulador404);

 
app.use(manipuladorDeErros);

export default app;