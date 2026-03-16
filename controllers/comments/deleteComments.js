const {Comments} = require('../../models/comments')
const customError = require('../../utils/customError')
const deleteComm = async (req,res) => {
    const {id} = req.params
    const { _id } = req.user
    const commToDelete = await Comments.findOneAndDelete({_id: id, owner: _id})
    console.log('comm', commToDelete);
    

    if(!commToDelete) {
        throw customError(`Commets with id:${id} does not exist`)
    }

    res.status(200).json({
        response: 'success',
        status: 200,
        commToDelete
    })
}
module.exports = deleteComm