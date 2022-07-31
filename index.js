const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Cors settings
const whitelist = ['http://localhost:3000', 'https://mydomain.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Invalid origin: ' + origin));
    }
  }
}
app.use(cors(options));

app.get('/', (req, res) => {
  res.json({
    server: 'On',
    saying: 'What the program is?'
  });
});

// Routing
routerApi(app);

// General middleware
// Error middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('magic in the port ' + port);
});
