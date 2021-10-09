const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
// const fs = require("fs-extra");
const User = require("../models/users");
const verifyToken = require("../middleware/verifyAuth");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploadFile");
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
});

// @route GET api/auth
// @desc Check if user is logged in
// @access Public
router.get("/", verifyToken, async(req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        if (!user)
            return res
                .status(400)
                .json({ success: false, message: "User not found" });
        res.json({ success: true, user });
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ success: false, message: "Internal server error!!!!" });
    }
});

// @route POST api/auth/register
// Register user
// @access public
router.post("/register", upload.single("userAvatar"), async(req, res) => {
    const { userEmail, userPassword, userName, userAvatar, roleId } = req.body;

    // Simple validation
    if (!userEmail || !userPassword || !userName)
        return res
            .status(400)
            .json({ success: false, message: "Missing userEmail and/or password" });

    try {
        // Check for existing user
        const user = await User.findOne({ userEmail });

        if (user)
            return res
                .status(400)
                .json({ success: false, message: "Username already taken" });

        // Hash password with argon2
        const hashedPassword = await argon2.hash(userPassword);
        // Save this user to the database if everything ok
        const newUser = new User({
            userEmail,
            userPassword: hashedPassword,
            userName,
            userAvatar: req.file.path,
            roleId,
        });
        // newUser.userAvatar.data = fs.readFileSync(req.files.userPhoto.path);
        // newUser.userAvatar.contentType = "image/png";
        await newUser.save();

        // Return token
        const accessToken = jwt.sign({ userId: newUser._id },
            process.env.ACCESS_TOKEN_SECRET
        );

        res.json({
            success: true,
            message: "User created successfully",
            accessToken,
        });
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .json({ success: false, message: "Internal server error !!!!" });
    }
});
// @route POST api/auth/login
// Login user
// @access public

router.post("/login", async(req, res) => {
    const { userEmail, userPassword } = req.body;

    // Simple validation
    if (!userEmail || !userPassword)
        return res
            .status(400)
            .json({ success: false, message: "Missing userEmail and/or password" });

    try {
        // All good
        // check role

        // check if this user is registered in the database
        const user = await User.findOne({ userEmail: userEmail });
        if (user.roleId == "615aba567b19409446d0128e") {
            if (!user)
                return res
                    .status(400)
                    .json({ success: false, message: "Incorrect username or password" });

            // Check user's password
            const passwordValid = await argon2.verify(
                user.userPassword,
                userPassword
            );
            if (!passwordValid)
                return res
                    .status(400)
                    .json({ success: false, message: "Incorrect username or password" });

            // Return token
            const accessToken = jwt.sign({ userId: user._id },
                process.env.ACCESS_TOKEN_SECRET
            );

            res.json({
                success: true,
                message: "Admin logged in successfully",
                accessToken,
            });
        }
        if (!user)
            return res
                .status(400)
                .json({ success: false, message: "Incorrect username or password" });

        // Check user's password
        const passwordValid = await argon2.verify(user.userPassword, userPassword);
        if (!passwordValid)
            return res
                .status(400)
                .json({ success: false, message: "Incorrect  username or password" });

        // Return token
        const accessToken = jwt.sign({ userId: user._id },
            process.env.ACCESS_TOKEN_SECRET
        );

        res.json({
            success: true,
            message: "User logged in successfully",
            accessToken,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "You do not have an account, please register an account to log in!",
        });
    }
});

module.exports = router;