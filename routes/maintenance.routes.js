const express = require('express');

const maintenanceServices  = require('./../services/maintenance.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createMaintenanceSchema, updateMaintenanceSchema, getMaintenanceSchema } = require('./../schemas/maintenance.schemas');

const router = express.Router();
const service = new maintenanceServices();

router.get('/', async (req, res, next) => {
  try {
    const maintenance = await service.find();
    res.json(maintenance);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getMaintenanceSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const maintenance = await service.findOne(id);
      res.json(maintenance);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createMaintenanceSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newMaintenance = await service.create(body);
      res.status(201).json(newMaintenance);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getMaintenanceSchema, 'params'),
  validatorHandler(updateMaintenanceSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const maintenance = await service.update(id, body);
      res.json(maintenance);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  validatorHandler(getMaintenanceSchema, 'params'),
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
