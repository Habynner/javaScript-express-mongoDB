import express from 'express';
import PecaController from '../controllers/pecaController.js';
import paginated from '../middlewares/paginated.js';

const pecaRoutes = express.Router();

pecaRoutes.get('/products', PecaController.getAllPecas, paginated);

pecaRoutes.get('/products/find', PecaController.searchPeca, paginated);

pecaRoutes.get('/product/:id', PecaController.getOne);

pecaRoutes.put('/product/:id', PecaController.update);

pecaRoutes.post('/product', PecaController.createProduct);

pecaRoutes.delete('/product/:id', PecaController.delete);

export default pecaRoutes;