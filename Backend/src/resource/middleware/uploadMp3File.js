// middleware use to save mp3 file

const multer = require("multer");
const fs = require("fs-extra");

const storage = multer.diskStorage({
    destination: function(req, fileMP3, cb) {
        cb(null, "./uploadFile/Mp3/");
    },
    filename: function(req, fileMP3, cb) {
        cb(
            null,
            new Date().toISOString().replace(/:/g, "-") + fileMP3.originalname
        );
    },
});

const fileFilter = (req, fileMP3, cb) => {
    // reject a file
    if (fileMP3.mimetype === "audio/mpeg") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const uploadMP3 = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
});

module.exports = uploadMP3;