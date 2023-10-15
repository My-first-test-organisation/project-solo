const express = require('express');

const route = express.Router();
const Login = require('../../view/components/LoginForm');

route.get('/', (req, res) => res.send(res.renderComponent(Login, {}, true, res)));

module.exports = route;
