const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

// HTTP loggers
app.use(morgan("combined"));

// Template engine
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resource/views")); // sử dụng npm handlebars để kết nối đúng đường dẫn đến đúng file home.js

// connect mongoDB
const connecDB = async() => {
    try {
        await mongoose.connect(
            "mongodb+srv://trungvu0612:trungdev29.@cluster0.dd2yf.mongodb.net/social-media-web?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("MongoDB Connected");
    } catch (e) {
        console.log(e.message);
    }
};

connecDB();

// route
app.get("/", (req, res) => {
    res.render("home");
});

// address
const PORT = 5000;

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));