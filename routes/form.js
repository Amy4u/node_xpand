const express = require('express');
const formDashboard = express.Router();
const { getForm } = require('../controllers/FormController');

formDashboard.get('/', getForm)

module.exports = formDashboard;