module.exports = {
  name: "starwars",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/starwars/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
