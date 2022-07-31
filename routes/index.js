const express = require('express');

const pqrsRouter = require('./pqrs.routes');
//const usersRouter = require('./users.routes');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/pqrs', pqrsRouter);
  //router.use('/users', usersRouter);

}

module.exports = routerApi;
