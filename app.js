const express = require('express')
const cors = require('cors')
const authRouter = require('./routes/auth')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
// app.use(express.static('public')) - for image
app.use('/api/auth', authRouter)


app.use((req, res) => {
    res.status(404).json({
        message: "Not found"
    })
})

app.use((er, req, res, next) =>{
    const{status = 500, message = 'server error'} = er
    res.status(status).json({message})
})

module.exports = app