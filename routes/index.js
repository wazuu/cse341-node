const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Wendy Smith');
});

module.exports = routes;