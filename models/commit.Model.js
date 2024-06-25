// models/commit.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commitSchema = new Schema({
    oid: String,
    message: String,
    author: {
        name: String,
        date: Date,
        email: String
    },
    committer: {
        name: String,
        date: Date,
        email: String
    },
    parents: [{
        oid: String
    }]
});

module.exports = mongoose.model('Commit', commitSchema);
