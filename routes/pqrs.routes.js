const express = require('express');

const pqrServices = require('./../services/pqr.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createPqrSchema, updatePqrSchema, getPqrSchema, queryPqrSchema } = require('./../schemas/pqr.schemas');

const router = express.Router();
const service = new pqrServices();

router.get('/my-pqrs',
  validatorHandler(queryPqrSchema, 'query'),
  async (req, res, next) => {
    try {
      const pqrs = await service.find(req.query);
      res.json(pqrs);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/',
  validatorHandler(queryPqrSchema, 'query'),
  async (req, res, next) => {
    try {
      const pqrs = await service.find(req.query);
      res.json(pqrs);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id',
  validatorHandler(getPqrSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const pqr = await service.findOne(id);
      res.json(pqr);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createPqrSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPqr = await service.create(body);
      res.status(201).json(newPqr);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getPqrSchema, 'params'),
  validatorHandler(updatePqrSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const pqr = await service.update(id, body);
      res.json(pqr);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getPqrSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.delete(id);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  });


module.exports = router;
