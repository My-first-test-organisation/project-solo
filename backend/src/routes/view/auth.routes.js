const express = require('express');

const AuthForm = require('../../view/components/RegistrationForm');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(res.renderComponent(AuthForm, {}, { htmlOnly: true }, res));
});

module.exports = router;
