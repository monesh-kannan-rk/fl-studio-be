const mongoose = require('mongoose');
const Commit = require('./models/commit.Model');
const Diff = require('./models/diff.Model');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fleet');

// Sample commit data
const sampleCommitData = {
    oid: "a1bf367b3af680b1182cc52bb77ba095764a11f9",
    message: "Remove some wrappers from a previous abstraction (#14142)",
    author: {
        name: "Ryan Slade",
        date: "2020-10-22T16:45:31+02:00",
        email: "ryanslade@gmail.com"
    },
    committer: {
        name: "GitHub",
        date: "2020-10-22T16:45:31+02:00",
        email: "noreply@github.com"
    },
    parents: [
        { oid: "89600bf602242ef66a741589b5bf784e378e5ead" }
    ]
};

// Sample diff data
const sampleDiffData = {
    oid: "a1bf367b3af680b1182cc52bb77ba095764a11f9",
    changeKind: "MODIFIED",
    headFile: { path: "cmd/repo-updater/repos/syncer.go" },
    baseFile: { path: "cmd/repo-updater/repos/syncer.go" },
    hunks: [
        {
            header: "@@ -63,7 +63,7 @@ type Syncer struct {",
            lines: [
                { baseLineNumber: 63, headLineNumber: 63, content: " type RunOptions struct {" },
                { baseLineNumber: 64, headLineNumber: 64, content: " \tEnqueueInterval func() time.Duration // Defaults to 1 minute" },
                { baseLineNumber: 65, headLineNumber: 65, content: " \tIsCloud         bool                 // Defaults to false" },
                { baseLineNumber: 69, headLineNumber: 68, content: " }" },
                { baseLineNumber: 70, headLineNumber: 69, content: " " }
            ]
        },
        {
            header: "@@ -134,7 +134,7 @@ func (s *syncHandler) Handle(ctx context.Context, tx dbworkerstore.Store, record",
            lines: [
                { baseLineNumber: 134, headLineNumber: 134, content: " \t\tstore = ws.With(tx.Handle().DB())" },
                { baseLineNumber: 135, headLineNumber: 135, content: " \t}" },
                { baseLineNumber: 136, headLineNumber: 136, content: " " },
                { baseLineNumber: 137, headLineNumber: 136, content: "-\treturn s.syncer.SyncExternalService(ctx, store, sj.ExternalServiceID, s.minSyncInterval)" }
            ]
        }
    ]
};

async function seedData() {
    try {
        // Save commit data
        const commit = new Commit(sampleCommitData);
        await commit.save();

        // Save diff data
        const diff = new Diff(sampleDiffData);
        await diff.save();

        console.log('Seed data inserted successfully');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        mongoose.disconnect();
    }
}

seedData();
