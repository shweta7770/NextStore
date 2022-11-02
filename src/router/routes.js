const express = require('express');
const routes = express.Router();
const controller = require('../controller/index.controller')
const signUpValidation = require('../validation/signUp.validation')


routes.post('/signUp', controller.signUp)

routes.post('/login', signUpValidation, controller.login)

module.exports = routes;