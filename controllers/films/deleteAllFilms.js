const { Film } = require('../../models/films')
const customError = require('../../utils/customError')
const deleteFilm = async (req, res) => {
    const { id } = req.params
    const {_id} = req.user
    const filmToDalete = await Film.findOneAndDelete({ _id: id, owner: _id })
    console.log(filmToDalete);
    
    if(!filmToDalete) {
        throw customError(`Film with id: ${id} does not exist`)
    }

    res.json({
        response: 'success',
        status: 200,
        data: {filmToDalete}
    })
} 
module.exports = deleteFilm