const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:3000', 'https://mydomain.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    }else{
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

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


// app.get('/kinds/:kindId/pqrs/:pqrId', (req, res) => {
//   const { kindId, pqrId } = req.params;
//   res.json({
//     kindId,
//     pqrId
//   });
// })


app.listen(port, () => {
  console.log('The magic is in the port' + port);
});
