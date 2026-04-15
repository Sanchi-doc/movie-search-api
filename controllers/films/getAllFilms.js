const { Film } = require('../../models/films')

const getAllFilms = async (req, res) => {
    const{_id} = req.user
    const {page = 1, limit = 20} = req.query
    const skip = (page-1) * limit
    const results = await Film.find({owner: _id}, "-createdAt -updatedAt", {skip, limit: +limit})
    const totalFilms = await Film.find({owner: _id})
    const total_pages = Math.ceil(totalFilms.length/limit)
    console.log('total',total_pages);
    
    
    res.status(200).json({
        response: 'success',
        status: 200,
        results,
        total_pages
    })
} 
module.exports = getAllFilms