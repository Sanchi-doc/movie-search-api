const { response } = require('../../app')
const { Film } = require('../../models/films')

const addFilm =  async (req, res) => {
   const {_id} = req.user
   const {body} = req
   console.log(body);
   const filmToAdd = await Film.create({...body, owner: _id})

   res.status(201).json({
    response: 'success',
    status: 201,
    data: {filmToAdd}
   })
}
module.exports = addFilm