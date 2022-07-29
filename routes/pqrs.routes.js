const express = require('express');

const pqrServices = require('./../services/pqr.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createPqrSchema, updatePqrSchema, getPqrSchema } = require('./../schemas/pqr.schemas');

const router = express.Router();
const service = new pqrServices();

router.get('/', async (req, res) => {
  const pqrs = await service.find();
  res.json(pqrs);
});

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
  async (req, res) => {
    const body = req.body;
    const newPqr = await service.create(body);
    res.status(201).json(newPqr);
  }
);

router.patch('/:id',
  validatorHandler(getPqrSchema, 'params'),
  validatorHandler(updatePqrSchema, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const pqr = await service.update(id, body);
      res.json(pqr);
    } catch (error) {
      res.status(404).json({
        message: error.message
      });
    }
  });

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});


module.exports = router;
