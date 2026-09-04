Package.describe({
  name: 'leaonline:speech-corpus',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'lightweight utilities to build tts speech corpus from given data',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['3.0']);
  api.use(['ecmascript', 'sha'], 'server');
  api.mainModule('speech-corpus.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('leaonline:speech-corpus');
  api.mainModule('speech-corpus-tests.js');
});
