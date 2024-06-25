// models/diff.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diffSchema = new Schema({
    oid: String,
    changeKind: String,
    headFile: {
        path: String
    },
    baseFile: {
        path: String
    },
    hunks: [{
        header: String,
        lines: [{
            baseLineNumber: Number,
            headLineNumber: Number,
            content: String
        }]
    }]
});

module.exports = mongoose.model('Diff', diffSchema);
