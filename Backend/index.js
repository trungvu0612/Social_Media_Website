require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const authRoute = require("./src/resource/routers/auth");
const cors = require("cors");
const connectDb = require("./src/resource/config/db.config");
const uploadFile = require("./src/resource/middleware/upload");
const gfs = require("multer-gridfs-storage");
const updateUser = require("./src/resource/routers/update");

// HTTP loggers
app.use(morgan("combined"));

connectDb();

// route
// app.get("/", (req, res) => {
//     res.send("home");
// });
app.use(express.json());
app.use(cors());

app.use("/uploadFile", express.static("uploadFile"));

app.use("/api/auth", authRoute);
app.use("/api/update/user", updateUser);

// address
const PORT = 5000;

app.listen(PORT, () => console.log(`Sever started on port ${PORT}`));