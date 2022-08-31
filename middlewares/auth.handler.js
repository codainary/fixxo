const { config } = require('./../config/config');
const boom = require('@hapi/boom');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

// function checkAdminRole(req, res, next) {
//   console.log(req.user);
//   const user = req.user;
//   if (user.role === 'admin') {
//     next();
//   } else {
//     next(boom.forbidden('not admin'));
//   }
// }

function checkRoles(...roles) {
  return (req, res, next) => {
    const user = req.user;
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.forbidden('insufficient permissions'));
    }
  }
}

module.exports = { checkApiKey, checkRoles }
