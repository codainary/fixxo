// const express = require('express');
// const passport = require('passport');
// const maintenanceServices = require('./../services/maintenance.service');
// const validatorHandler = require('./../middlewares/validator.handler');
// const { checkRoles } = require('./../middlewares/auth.handler');
// const { createMaintenanceSchema,
//   updateMaintenanceSchema,
//   getMaintenanceSchema } = require('./../schemas/maintenance.schemas');

// const router = express.Router();
// const service = new maintenanceServices();


// router.get('/own',
//   passport.authenticate('jwt', { session: false }),
//   checkRoles('admin'),
//   async (req, res, next) => {
//     try {
//       const user = req.user;
//       const maintenances = await service.findByUser(user.sub);
//       res.json(maintenances);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.get('/',
//   passport.authenticate('jwt', { session: false }),
//   checkRoles('admin'),
//   async (req, res, next) => {
//     try {
//       const maintenance = await service.find();
//       //console.log(maintenance.);
//       //delete maintenance.dataValues.pqr.dataValues.user.dataValues.password;
//       res.json(maintenance);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.get('/:id',
//   passport.authenticate('jwt', { session: false }),
//   checkRoles('admin'),
//   validatorHandler(getMaintenanceSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const maintenance = await service.findOne(id);
//       res.json(maintenance);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.post('/',
//   passport.authenticate('jwt', { session: false }),
//   checkRoles('admin'),
//   validatorHandler(createMaintenanceSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const body = req.body;
//       const newMaintenance = await service.create(body);
//       res.status(201).json(newMaintenance);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.patch('/:id',
//   passport.authenticate('jwt', { session: false }),
//   checkRoles('admin'),
//   validatorHandler(getMaintenanceSchema, 'params'),
//   validatorHandler(updateMaintenanceSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const body = req.body;
//       const maintenance = await service.update(id, body);
//       res.json(maintenance);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.delete('/:id',
//   passport.authenticate('jwt', { session: false }),
//   checkRoles('admin'),
//   validatorHandler(getMaintenanceSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const rta = await service.delete(id);
//       res.json(rta);
//     } catch (error) {
//       next(error);
//     }
//   }
// );


// module.exports = router;
