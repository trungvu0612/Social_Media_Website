// // // initializes Multer GridFs Storage engine (including MongoDB)
// // // and defines middleware function.
// // const util = require("util");
// // const multer = require("multer");
// // const { GridFsStorage } = require("multer-gridfs-storage");
// // require("dotenv").config();

// // var storage = new GridFsStorage({
// //     url: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWD}@cluster0.dd2yf.mongodb.net/social-media-web?authSource=admin&replicaSet=atlas-1dawsu-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`,
// //     options: { useNewUrlParser: true, useUnifiedTopology: true },
// //     file: (req, file) => {
// //         const match = ["image/png", "image/jpeg"];

// //         if (match.indexOf(file.mimetype) === -1) {
// //             const filename = `${Date.now()}-bezkoder-${file.originalname}`;
// //             return filename;
// //         }

// //         return {
// //             bucketName: "photos",
// //             filename: `${Date.now()}-bezkoder-${file.originalname}`,
// //         };
// //     },
// // });

// // var uploadFile = multer({ storage });

// // module.exports = uploadFile;

// const multer = require("multer");
// const upload = multer({ dest: "./public/data/uploads/" });
// app.post("/stats", upload.single("uploaded_file"), function(req, res) {
//     // req.file is the name of your file in the form above, here 'uploaded_file'
//     // req.body will hold the text fields, if there were any
//     console.log(req.file, req.body);
// });