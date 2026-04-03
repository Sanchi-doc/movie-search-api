const { Comments } = require('../../models/comments')

const addComment = async (req, res) => {
   const {body} = req
   const {_id, email} = req.user
   
   const commentToAdd = await Comments.create({...body, owner: _id, email})

   res.status(201).json({
    response: 'success',
    status: 201,
    commentToAdd
   })
}
module.exports = addComment