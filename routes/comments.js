const express = require('express')
const auth = require('../middleware/auth')
const addComment = require('../controllers/comments/addComments')
const getComments = require('../controllers/comments/getComments')
const deleteComm = require('../controllers/comments/deleteComments')
const editComment = require('../controllers/comments/editComments')
const validation = require('../utils/validation')
const controlWrap = require('../utils/controlWrap')
const {JoiCommentsSchema} = require('../models/comments')
const commRouter = express.Router()

commRouter.post('/', auth, validation(JoiCommentsSchema), controlWrap(addComment))
commRouter.get('/:id', controlWrap(getComments))
commRouter.delete('/:id', auth, controlWrap(deleteComm))
commRouter.put('/:id', auth, controlWrap(editComment))

module.exports = commRouter 