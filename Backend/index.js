require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const authRoute = require("./src/resource/routers/auth");
const cors = require("cors");
const connectDb = require("./src/resource/config/db.config");
const updateUser = require("./src/resource/routers/update");
const music = require("./src/resource/routers/music");

// HTTP loggers
app.use(morgan("combined"));

connectDb();

app.use(express.urlencoded());

app.use(express.json());
app.use(cors());

// load img with browser
app.use("/uploadFile", express.static("uploadFile"));

app.use("/api/auth", authRoute);
app.use("/api/update/user", updateUser);
app.use("/api/music", music);

// address
const PORT = 5000;

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));