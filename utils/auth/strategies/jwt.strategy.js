const { Strategy, ExtractJwt } = require('passport-jwt');
const { config } = require('../../../config/config');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
}

const jwtStrategy = new Strategy(opts, (jwt_payload, done) => {
  return done(null, jwt_payload);
});

module.exports = jwtStrategy;
