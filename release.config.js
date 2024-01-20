module.exports = {
  private: true,
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: [],
        message: "chore(release): [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
  release: {
    version: false,
    prepare: ["@semantic-release/npm"],
  },
};
