const mongoose = require('mongoose');

// const db_url =MONGODB_KEY

const connectionDB = ()=>{
    mongoose.connect(process.env.MONGODB_KEY).then(()=>{
        console.log('...................connected to DB');
    }).catch((err)=>{
        console.log('database connection unsuccessful!',err);
    })
}


module.exports = connectionDB