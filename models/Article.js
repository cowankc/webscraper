const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let NewArticle = new Schema ({
    headline: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    save: {
        type: Boolean
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
});

let Article = mongoose.model("Article", NewArticle);

module.exports = Article;