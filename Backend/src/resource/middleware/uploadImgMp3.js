// middleware use to save image MP3

const multer = require("multer");
const fs = require("fs-extra");

const storage = multer.diskStorage({
    destination: function(req, fileImgMP3, cb) {
        cb(null, "./uploadFile/ImgMp3/");
    },
    filename: function(req, fileImgMP3, cb) {
        cb(
            null,
            new Date().toISOString().replace(/:/g, "-") + fileImgMP3.originalname
        );
    },
});

const fileFilter = (req, fileImgMP3, cb) => {
    // reject a fileImgMP3
    if (
        fileImgMP3.mimetype === "image/jpeg" ||
        fileImgMP3.mimetype === "image/png"
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const uploadImgMp3 = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
});

module.exports = uploadImgMp3;