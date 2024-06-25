const express = require('express')
const { getDiffCommit, getCommitById } = require('./controllers/commit.controllers')

const router = express.Router()

router.get("/repositories/:owner/:repository/commits/:oid/diff", getDiffCommit)
router.get('/repositories/:owner/:repository/commits/:oid', getCommitById)
module.exports = router