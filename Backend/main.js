
const express = require('express')
const connectionDB = require('./Database/db')
const dotenv =require('dotenv')
dotenv.config()
const route = require('./routing/userRoutes')
// const router = require('./routing/signUp')

const app = express()
const port = 6000

// database*****************************************
const startDB =  () => {
        connectionDB()
        app.listen(port,console.log(`the server is running on port ${port}`))
   
}
startDB()













