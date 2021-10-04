const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    adminId: {
        type: Number,
        required: true,
        unique: true,
    },
    adminUsername: {
        type: String,
        required: true,
    },
    adminPassword: {
        type: String,
        required: true,
    },
    adminName: {
        type: String,
        required: true,
    },
    adminAvatar: {
        type: String,
    },
});

module.exports = mongoose.model("admin", AdminSchema);