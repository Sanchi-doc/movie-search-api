const {Schema, model} = require('mongoose')
const Joi = require('joi')
const bcrypt = require('bcrypt')

const userDbSchema = Schema(
    {
        name: {
            type: String,
            required: [true, 'name is required']
        },
        email: {
            type: String,
            required: [true, 'email is required'],
            unique: [true, 'email has unique']
        },
        password: {
            type: String,
            required: [true, 'password is required'],
            minlength: 6
        },
        token: {
            type: String,
            default: '',
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
)
userDbSchema.methods.setPassword = async function(password){
    this.password = await bcrypt.hash(password, 10)
}
    
userDbSchema.methods.verifyPassword = async function(password){
    return bcrypt.compare(password, this.password)
}

const User = model('user', userDbSchema)
const JoiRegisterSchema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().min(6).required(),
    email:Joi.string().email().required()
})
const JoiLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

module.exports = { User, JoiRegisterSchema, JoiLoginSchema }