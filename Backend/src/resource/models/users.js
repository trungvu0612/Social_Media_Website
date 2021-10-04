const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// user colection in mongoDb atlas
const UserSchema = new Schema({
    userEmail: {
        type: String,
        required: true,
        unique: true,
    },
    userPassword: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },

    userAvatar: {
        type: String,
        required: true,
    },
    userCreationDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("users", UserSchema);

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         sparse: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

// module.exports = mongoose.model("users", UserSchema);