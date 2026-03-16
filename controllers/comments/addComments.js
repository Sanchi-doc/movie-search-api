const { Comments } = require('../../models/comments')

const addComment = async (req, res) => {
   const {body} = req
   const {_id} = req.user
   console.log(body,"2222212");
   
   const commentToAdd = await Comments.create({...body, owner: _id})

   res.status(201).json({
    response: 'success',
    status: 201,
    commentToAdd
   })
}
module.exports = addComment