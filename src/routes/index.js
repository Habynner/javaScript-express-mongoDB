import express from 'express';
import pecas from './pecasRoutes.js';
import fabricante from './fabricantesRoutes.js';

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send('Garage Sistem - Node.js'));

    app.use(express.json(), pecas, fabricante);
}

export default routes;