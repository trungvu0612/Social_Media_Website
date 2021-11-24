require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const authRoute = require("./src/resource/routers/auth");
const cors = require("cors");
const connectDb = require("./src/resource/config/db.config");
const updateUser = require("./src/resource/routers/update");
const music = require("./src/resource/routers/music");
const posts = require("./src/resource/routers/post");

// HTTP loggers
app.use(morgan("combined"));

connectDb();

app.use(express.urlencoded());

app.use(express.json());
app.use(cors());

// load img with browser
app.use("/uploadFile", express.static("uploadFile"));

// api auth
app.use("/api/auth", authRoute);
// api update user
app.use("/api/update/user", updateUser);
// api push music to db
app.use("/api/music", music);
// api push posts to db
app.use("/api/posts", posts);

// address
const PORT = 5000;

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));