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
    musicFile: {},
    cateId: {
        type: Schema.Types.ObjectId,
        ref: "categories",
    },
    musicLike: {
        type: number,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
});