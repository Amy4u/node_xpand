const express = require('express');
const profileRoute = express.Router();
const { getProfile } = require('../controllers/ProfileController');

profileRoute.get('/', getProfile)   

module.exports = profileRoute;