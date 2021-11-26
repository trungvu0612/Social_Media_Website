const express = require("express");
const router = express.Router();
const Music = require("../models/musics");
const uploadMp3Test = require("../middleware/MP3");

// @route GET api/musics
// @desc Get musics
// @access Private
router.get("/", async(req, res) => {
    try {
        const musics = await Music.find(req);
        res.json({ success: true, musics });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

// @route PUT api/musics
// @desc input music to database
// @access Public

// use middleware of multer to get multiple files for multiple fields
const middlewareMp3 = uploadMp3Test.fields([{
        name: "musicFile",
        maxCount: 10,
    },
    {
        name: "musicImg",
        maxCount: 10,
    },
]);

router.post("/upload", middlewareMp3, async(req, res) => {
    const { musicName, musicAuthor, musicImg, musicFile, musicCategory } =
    req.body;

    // Simple validation
    if (!musicName || !musicAuthor || !musicCategory)
        return res
            .status(400)
            .json({ success: false, message: "Missing information" });

    try {
        // const imgMP3 = req.file.path;
        const imgMp3 = req.files.musicImg.map((element) => element.path);
        console.log(imgMp3);
        const fileMp3 = req.files.musicFile.map((element) => {
            return element.path;
        });
        console.log(fileMp3.toString());

        // Save this user to the database if everything ok
        const newMusic = new Music({
            musicName,
            musicAuthor,
            musicImg: imgMp3.toString().replace("uploadFile\\ImgMp3\\", ""),
            musicFile: fileMp3.toString().replace("uploadFile\\Mp3\\", ""),
            musicCategory,
        });

        await newMusic.save();

        res.json({
            success: true,
            message: "Music created successfully",
        });
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ success: false, message: "Internal server error !!!!" });
    }
});

module.exports = router;