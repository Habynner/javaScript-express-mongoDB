import express from 'express';
import fabricanteController from '../controllers/fabricanteController.js';

const fabricanteRoutes = express.Router();

fabricanteRoutes.get('/made', fabricanteController.getAllFabricantes);

fabricanteRoutes.get('/made/:id', fabricanteController.getOne);

fabricanteRoutes.put('/made/:id', fabricanteController.update);

fabricanteRoutes.post('/made', fabricanteController.createFabricante);

fabricanteRoutes.delete('/made/:id', fabricanteController.delete);

export default fabricanteRoutes;