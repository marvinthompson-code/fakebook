const express = require("express")
const cors = require("cors")
require('dotenv').config()
const bodyParser = require("body-parser")

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Routers
const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')

app.listen(process.env.PORT, (err) => {
    if (err) console.log(`Error: ${err.message}`)
    console.log(`APP is listening on PORT: ${process.env.PORT}`)
})