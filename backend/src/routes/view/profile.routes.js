const express = require('express');

const Profile = require('../../view/components/Profile');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(res.renderComponent(Profile, {}, true, res));
});

module.exports = router;
