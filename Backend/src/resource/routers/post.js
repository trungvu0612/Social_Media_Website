const express = require("express");
const router = express.Router();
const Post = require("../models/posts");
const User = require("../models/users");
const Music = require("../models/musics");
const multer = require("multer");
const upload = multer();

// @route POST api/posts
// @desc POST posts
// @access Private
router.post("/", upload.array(), async(req, res) => {
    const { postContent } = req.body;

    // Simple validation
    if (!postContent)
        return res
            .status(400)
            .json({ success: false, message: "Missing information" });

    try {
        // get data user by id's user at collection users
        const userData = await User.findById(req.body.user);
        // get data music by id's music at collection musics
        const musicData = await Music.findById(req.body.music);

        const newPost = new Post({
            user: userData,
            postContent,
            music: musicData,
        });
        await newPost.save();

        res.json({
            success: true,
            message: "Post created successfully",
        });
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ success: false, message: "Internal server error !!!!" });
    }
});
module.exports = router;