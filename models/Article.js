const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let NewArticle = new Schema ({
    headline: {
        type: String,
        required: false,
        unique: false
    },
    summary: {
        type: String,
        required: false,
    },
    url: {
        type: String,
        required: false,
        unique: false
    },
    saved: {
        type: Boolean
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
});

let Article = mongoose.model("Article", NewArticle);

module.exports = Article;