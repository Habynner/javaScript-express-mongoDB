import express from 'express';
import PecaController from '../controllers/pecaController.js';

const pecaRoutes = express.Router();

pecaRoutes.get('/products', PecaController.getAllPecas);

pecaRoutes.get('/products/find', PecaController.searchPeca);

pecaRoutes.get('/product/:id', PecaController.getOne);

pecaRoutes.put('/product/:id', PecaController.update);

pecaRoutes.post('/product', PecaController.createProduct);

pecaRoutes.delete('/product/:id', PecaController.delete);

export default pecaRoutes;