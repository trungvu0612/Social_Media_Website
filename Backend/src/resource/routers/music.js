const express = require("express");
const uploadMP3 = require("../middleware/uploadMp3File");
const uploadImgMp3 = require("../middleware/uploadImgMp3");
const router = express.Router();
const Music = require("../models/musics");
const uploadMp3Test = require("../middleware/MP3");

// @route PUT api/musics
// @desc input music to database
// @access Public

const middlewareMp3 = [
    // uploadImgMp3.single("musicImg"),
    // uploadMP3.single("musicFile"),
    uploadMp3Test.fields([{
            name: "musicFile",
            maxCount: 1,
        },
        {
            name: "musicImg",
            maxCount: 1,
        },
    ]),
];
router.post("/upload", middlewareMp3, async(req, res) => {
    const { musicName, musicAuthor, musicImg, musicFile } = req.body;

    // Simple validation
    if (!musicName || !musicAuthor)
        return res
            .status(400)
            .json({ success: false, message: "Missing musicName and/or password" });

    try {
        // const imgMP3 = req.file.path;
        const fileMP3 = req.files;
        console.log(fileMP3);

        // Save this user to the database if everything ok
        const newMusic = new Music({
            musicName,
            musicAuthor,
            musicImg: fileMP3,
            musicFile: fileMP3,
        });

        await newMusic.save();

        res.json({
            success: true,
            message: "User created successfully",
        });
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ success: false, message: "Internal server error !!!!" });
    }
});

module.exports = router;