const express = require('express');

const morgan = require('morgan');

const path = require('path');

const session = require('express-session');

const FileStore = require('session-file-store')(session);

const sessionConfig = {
  store: new FileStore(),
  name: 'ssid',
  secret: process.env.SESSION_SECRETT ?? 'test',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
  },
};

const serverConfig = (app) => {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(process.cwd(), 'public')));
  app.use(session(sessionConfig));
};

module.exports = serverConfig;
