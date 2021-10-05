const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
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
        type: Buffer,
        contentType: String,
        required: true,
    },
    roleType: {
        type: Schema.Types.ObjectId,
        ref: "role",
        default: "615aba567b19409446d0128e",
    },
});

module.exports = mongoose.model("admin", AdminSchema);