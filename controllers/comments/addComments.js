const { Comments } = require('../../models/comments')

const addComment = async (req, res) => {
   const{body} = req

   const commentToAdd = await Comments.create({...body})

   res.status(201).json({
    response: 'success',
    status: 201,
    commentToAdd
   })
}
module.export = addComment