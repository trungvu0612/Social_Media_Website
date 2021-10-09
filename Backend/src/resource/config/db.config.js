// connect mongoDB
// connect to mongodb
const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWD}@cluster0.dd2yf.mongodb.net/social-media-web?retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("MongoDB Connected");
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = connectDB;