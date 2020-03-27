const express = require('express');

const PacienteController = require('./controllers/PacienteController');
const SensorController = require('./controllers/SensorController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);


routes.get('/pacientes' , PacienteController.index);
routes.post('/pacientes', PacienteController.create);

routes.get('/profile', ProfileController.index);

routes.get('/sensores', SensorController.index);
routes.post('/sensores', SensorController.create);
routes.delete('/sensores/:id',SensorController.delete);

 module.exports = routes;