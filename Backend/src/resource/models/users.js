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
        // data: Buffer,
        type: String,
        contentType: String,
    },
    userCreationDate: {
        type: Date,
        default: Date.now,
    },
    roleId: {
        type: Schema.Types.ObjectId,
        ref: "role",
        default: "615aba747b19409446d0128f",
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