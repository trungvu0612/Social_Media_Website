const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const User = require("../models/users");

// @route POST api/auth/register
// Register user
// @access public
router.post("/register", async(req, res) => {
    const { userEmail, userPassword, userName, userAvatar } = req.body;

    // Simple validation
    if (!userEmail || !userPassword || !userName || !userAvatar)
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
            userAvatar,
        });
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
        res.status(500).json({ success: false, message: "Internal server error" });
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
        // check if this user is registered in the database
        const user = await User.findOne({ userEmail: userEmail });
        if (!user)
            return res
                .status(400)
                .json({ success: false, message: "Incorrect username" });

        // Check user's password
        const passwordValid = await argon2.verify(user.userPassword, userPassword);
        if (!passwordValid)
            return res
                .status(400)
                .json({ success: false, message: "Incorrect password" });

        // All good
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
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

module.exports = router;