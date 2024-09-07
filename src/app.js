import express from 'express';
import connectDatabase from './config/dbConnect.js';
import routes from './routes/index.js';
import manipulation404 from './middlewares/manipulation404.js';
import errosManipulation from './middlewares/errosManipulation.js';

const connect = await connectDatabase();

connect.on('error', (err) => {
  console.error('connection error', err);
});

connect.once('open', () => {
  console.log('connection with mongoDb was successfully.');
});

const app = express();
routes(app);

app.use(manipulation404);

app.use(errosManipulation);

export default app;
