const errorStatus = ({name, code}) => code === 11000  &&  name === "MongoServerError"
const handleDbSchema = (error, data, next ) => {
    error.status = errorStatus(error)?409 :400
    next()
}
module.exports = handleDbSchema 