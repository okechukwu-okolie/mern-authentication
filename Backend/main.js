
const express = require('express')
const connectionDB = require('./Database/db')
const dotenv =require('dotenv')
dotenv.config()

const app = express()
const port = 6000

// database*****************************************
const startDB = async () => {
    try{
        await connectionDB()
        console.log('Database connected successfully')
        app.listen(port,console.log(`the server is running on port ${port}`))
    }
    catch(err) {console.log()}
    
}
startDB()






