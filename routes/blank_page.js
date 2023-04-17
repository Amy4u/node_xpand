const express = require('express');
const blank_page = express.Router();
const { getBlankPage } = require('../controllers/BlankPageController')

blank_page.get('/', getBlankPage)   

module.exports = blank_page;