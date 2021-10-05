require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const authRoute = require("./src/resource/routers/auth");
const mongoose = require("mongoose");
const cors = require("cors");

// HTTP loggers
app.use(morgan("combined"));

// connect to mongodb
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
connectDB();

// route
// app.get("/", (req, res) => {
//     res.send("home");
// });
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);

// address
const PORT = 5000;

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));