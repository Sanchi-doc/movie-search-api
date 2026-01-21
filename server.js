const mongoose = require('mongoose')
const app = require(`./app`)

const{PORT, DB_HOST} = process.env
// mongoose.set('strictQuery', true)
mongoose.connect(DB_HOST).then(()=>{
    console.log('DB connectoin successfuly')
    app.listen(PORT)
}).catch(error => {
    console.log(error.message)
    process.exit(1)
})