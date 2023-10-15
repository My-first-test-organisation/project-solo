const express = require('express');

const Home = require('../../view/components/MainPage');

const route = express.Router();

route.get('/', (req, res) => {
  res.send(res.renderComponent(Home, {}, true, res));
});

module.exports = route;
