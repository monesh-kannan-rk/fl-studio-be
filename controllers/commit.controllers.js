const Commit = require('../models/commit.Model')
const Diff = require("../models/diff.Model")

const getDiffCommit = async(req, res) => {
    try {
        const { owner, repository, oid } = req.params;

        // Find diff by oid in Diff collection
        const diff = await Diff.findOne({ oid });

        if (!diff) {
            return res.status(404).json({ message: 'Diff not found' });
        }

        res.status(200).json(diff);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getCommitById = async(req, res) => {
    try {
        const { owner, repository, oid } = req.params;

        // Find commit by oid in Commit collection
        const commit = await Commit.findOne({ oid });

        if (!commit) {
            return res.status(404).json({ message: 'Commit not found' });
        }

        res.status(200).json(commit);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getDiffCommit,
    getCommitById
}