const express = require('express')
const auth = require('../middleware/auth')
const addComment = require('../controllers/comments/addComments')
const validation = require('../utils/validation')
const controlWrap = require('../utils/controlWrap')
const {JoiCommentsSchema} = require('../models/comments')
const commRouter = express.Router()

commRouter.post('/', auth, validation(JoiCommentsSchema), controlWrap(addComment))

module.exports = commRouter