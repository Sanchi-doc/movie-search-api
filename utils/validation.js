const validation = (schema) => {
    return (reg, res, next) => {
       const {body} = reg
       const {error} = schema.validate(body)
       if (error) {
         error.status = 400
         next(error)
       }
       next()
    }
}
module.exports = validation 