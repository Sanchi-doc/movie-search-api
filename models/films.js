const { Schema, model } = require('mongoose')
const Joi = require('joi')

const filmsDbSchema = Schema(
    {
        id: {
            type: Number,
            require: [true, 'id is required']
        },
        title: {
           type: String,
           require: [true, 'title is required']
        },
        image: {
            type: String,
            require: [true, 'image is required']
        },
        release_date: {
            type: String,
            require: [true, 'data is required']
        },
        vote_average: {
            type: Number,
            require: [true, 'vote is required']
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            require: true
        }
    },
    {
        versionKey: false,
        timestamp: true
    }
)
const Film = model('film', filmsDbSchema)
const JoiFilmSchema = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().required(),
    image: Joi.string().required(),
    release_date: Joi.string().required(),
    vote_average: Joi.number().required()
})

module.exports = {Film, JoiFilmSchema}