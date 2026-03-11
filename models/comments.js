const {Schema, model } = require('mongoose')
const Joi = require('joi')

const commentsDbSchema = Schema({
    id: {
        type: Number,
        require: [true, 'id is required']
    },
    author: {
        type: String,
        require: [true, 'author is required']
    },
    comments: {
        type: String,
        require: [true, 'comments is required']
    },
    rating: {
        type: Number,
        require: [true, 'rating is required'],
        min: 1,
        max: 10
    }
},
{
    versionKey: false,
    timestamp: true
}
)
const Comments = model('Comments', commentsDbSchema)
const JoiCommentsSchema = Joi.object({
    id: Joi.number().required(),
    author: Joi.string().required(),
    comments: Joi.string().required(),
    rating: Joi.number().min(1).max(10).required()
})

module.exports = {Comments, JoiCommentsSchema}