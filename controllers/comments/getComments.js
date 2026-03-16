const {Comments} = require('../../models/comments')

const getComments = async (req, res) => {
    const{ id} = req.body
    const results = await Comments.find({id})

    res.status(200).json({
        response: 'success',
        status: 200,
        results
    })
}
module.exports = getComments