const express = require('express');
const loginRoute = express.Router();
const { getLogin } = require('../controllers/LoginController');

loginRoute.get('', getLogin)

module.exports = loginRoute;