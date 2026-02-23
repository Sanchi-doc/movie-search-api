const express = require('express')
const auth = require('../middleware/auth')
const validation = require('../utils/validation')
const controlWrap = require('../utils/controlWrap')
const getAllFilms = require('../controllers/films/getAllFilms')
const { JoiFilmSchema } = require('../models/films')
const filmRouter = express.Router()
const addFilm = require('../controllers/films/addFilm')

filmRouter.get('/', auth, controlWrap(getAllFilms))
filmRouter.post('/', auth, validation(JoiFilmSchema), controlWrap(addFilm))

module.exports = filmRouter