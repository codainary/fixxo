const { Strategy } = require('passport-local');

const AuthServices = require('../../../services/auth.service');
const service = new AuthServices();

const localStrategy = new Strategy({
  // if we need perfomance login credencial
  //usernameField: 'email',
  //passwordField: 'password',
},
  async (username, password, done) => {
    try {
      const user = await service.getUser(username, password);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = localStrategy;
