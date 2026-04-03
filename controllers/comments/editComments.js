const {Comments} = require('../../models/comments')
const customError = require('../../utils/customError')
const editComment = async (req, res) => {
    const { body } = req
    const { id } = req.params
    const {_id} = req.user
    
    const commentToUpdate = await Comments.findOneAndUpdate({_id: id, owner: _id}, body,{new: true, runValidators: true})
     
    if(!commentToUpdate) {
        throw customError(`Comments with ${id} not found`, 404)
    }

    res.status(200).json({
      response: 'success',
      status: 200,
      commentToUpdate
    })
}
module.exports = editComment