const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MusicSchema = new Schema({
    musicName: {
        type: String,
        required: true,
    },
    musicAuthor: {
        type: String,
    },
    musicImg: {
        type: String,
        contentType: String,
    },
    //     [{
    //     fieldname: { type: String },
    //     originalname: { type: String },
    //     encoding: { type: String },
    //     mimetype: { type: String },
    //     destination: { type: String },
    //     filename: { type: String },
    //     path: { type: String },
    //     size: { type: Number },
    // }, ],
    musicFile: {
        type: String,
        contentType: String,
    },
    //     [{
    //     fieldname: { type: String },
    //     originalname: { type: String },
    //     encoding: { type: String },
    //     mimetype: { type: String },
    //     destination: { type: String },
    //     filename: { type: String },
    //     path: { type: String },
    //     size: { type: Number },
    // }, ],
    musicCategory: {
        type: Schema.Types.String,
        ref: "categories",
        // enum: [
        //     "accoustic",
        //     "cinematic",
        //     "edm",
        //     "electronic",
        //     "jazz",
        //     "pop",
        //     "rock",
        //     "urban",
        //     "order",
        // ],
    },
    musicLike: {
        type: Number,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        default: "61600aa78b331c8efe5a3d84",
    },
    musicCreationDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("musics", MusicSchema);