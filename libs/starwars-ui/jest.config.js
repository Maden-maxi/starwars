module.exports = {
  name: 'starwars-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/starwars-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
