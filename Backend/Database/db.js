const mongoose = require('mongoose');

// const db_url =MONGODB_KEY

const connectionDB = ()=>{
    mongoose.connect(process.env.MONGODB_KEY)
}


module.exports = connectionDB