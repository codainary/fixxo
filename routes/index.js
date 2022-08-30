const express = require('express');

const pqrsRouter = require('./pqrs.routes');
const usersRouter = require('./users.routes');
const authRouter = require('./auth.routes');
// const maintenancesRouter = require('./maintenance.routes');
// const officialsRouter = require('./official.routes');
// const ordersRouter = require('./orders.routes');
// const elementsRouter = require('./elements.routes');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/pqrs', pqrsRouter);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
  // router.use('/maintenances', maintenancesRouter);
  // router.use('/officials', officialsRouter);
  // router.use('/orders', ordersRouter);
  // router.use('/elements', elementsRouter);


}

module.exports = routerApi;
