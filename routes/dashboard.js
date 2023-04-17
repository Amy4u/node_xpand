const express = require('express');
const dashboard = express.Router();
const { getDashboard } = require('../controllers/DashboardController');

dashboard.get('/', getDashboard)

module.exports = dashboard;