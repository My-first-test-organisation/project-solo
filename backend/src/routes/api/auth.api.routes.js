const express = require('express');

const { User } = require('../../../db/models');

const router = express.Router();

const bcrypt = require('bcrypt');

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(400).json({ error: err.message, msg: 'Not Logout' });
    }
    res.clearCookie('ssid');
    return res.status(205).redirect('/');
  });
});

router.post('/login', async (req, res) => {
  try {
    const {
      email, password,
    } = req.body;
    console.log(req.body);
    const auth = await User.findOne({ where: { email } });

    if (!(await bcrypt.compare(password, auth.password))) {
      return res.status(401).json({ message: 'Неверный E-mail или Password' });
    }

    req.session.userId = auth.id;
    return res.json({ message: 'ok', auth });
  } catch (err) {
    console.log(err);
  }
});

router.post('/register', async (req, res) => {
  try {
    const {
      firstName, lastName, email, password, cpassword,
    } = req.body;
    console.log(req.body);

    if (password !== cpassword) {
      res.status(405).json({ message: 'Пароли не совпадают' });
      return;
    }

    if (!firstName || !lastName || !email || !password) {
      res.status(410).json({ message: 'Заполнены не все поля!' });
      return;
    }

    let user = await User.findOne({ where: { email } });

    if (user) {
      res.json({ message: 'Такой пользователь уже существует' });
      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);

    user = await User.create({
      firstName, lastName, email, password: hashPassword, role: 'client',
    });

    req.session.userId = user.id;
    res.json({ message: 'ok', user });
  } catch (err) {
    res.sendStatus(401);
  }
});

module.exports = router;
