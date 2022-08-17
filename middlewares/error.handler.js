const { ValidationError, ForeignKeyConstraintError } = require('sequelize');
const multer = require("multer");

function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError || err instanceof ForeignKeyConstraintError) {
    const errors = err.errors;
    delete err.errors[0].instance;
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors,
    });
  }
  next(err);
}

function uploadErrorHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    res.status(409).json({
      statusCode: 409,
      message: err.message,
      errors: err.name
    });
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler, uploadErrorHandler }
