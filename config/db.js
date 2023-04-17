const mongoose = require('mongoose');
const env = require('./envConfig');

const connect = async() => {
    try {
        const connection = await mongoose.connect(env.MONGO_URL);
        if(connection) {
            console.log('db_connected')
        }
    } catch (error) {
        console.log(error.message);
        process.exit;
    }
}

module.exports = connect;