const { Film } = require('../../models/films')

const getAllFilms = async (req, res) => {
    const{_id} = req.user
    const {page = 1, limit = 20} = req.query
    const skip = (page-1) * limit
    const filmsAllFilms = await Film.find({owner: _id}, "-createdAt -updatedAt", {skip, limit: +limit})
    
    
    res.status(200).json({
        response: 'success',
        status: 200,
        data: {filmsAllFilms}
    })
} 
module.exports = getAllFilms