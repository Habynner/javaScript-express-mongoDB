import express from 'express';
import fabricanteController from '../controllers/fabricanteController.js';
import paginated from '../middlewares/paginated.js';

const fabricanteRoutes = express.Router();

fabricanteRoutes.get('/made', fabricanteController.getAllFabricantes, paginated);

fabricanteRoutes.get('/made/:id', fabricanteController.getOne);

fabricanteRoutes.put('/made/:id', fabricanteController.update);

fabricanteRoutes.post('/made', fabricanteController.createFabricante);

fabricanteRoutes.delete('/made/:id', fabricanteController.delete);

fabricanteRoutes.get('/mades/find', fabricanteController.searchFabricante, paginated);

export default fabricanteRoutes;