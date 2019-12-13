const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let NewComment = new Schema ({
    title: String,
    body: String
});

let Comment = mongoose.model('Comment', NewComment);

module.exports = Comment;