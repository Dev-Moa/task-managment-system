const mongoose = require('mongoose');
const URI = "mongodb://127.0.0.1:27017/";

const connectDB = async (database)=>{
    mongoose.connect(URI+database)
    .then(()=>{console.log("database connected")})
    .catch((err)=>{console.log(err)})
}

module.exports = connectDB;
