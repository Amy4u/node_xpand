require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    jwt_secret: process.env.jwt_secret,
    TZ: process.env.TIME_ZONE
}