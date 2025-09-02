const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()
const mongoDB_url = process.env.MONGODB_PORT

mongoose.connect(`${mongoDB_url}/portfolio`)
.then(()=>{
    console.log('mongoDB is connected...');
})
.catch(()=>{
    console.log('mongoDB connect error');
});

module.exports = mongoose.connection;