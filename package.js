Package.describe({
  name: 'ox2:layout',
  summary: 'TESTING_DO_NOT_USE App layout',
  version: '1.2.0',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  // Core
  api.use([
    'less'
    ]);
  api.addFiles('lib/oo-layout.less', C);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:layout');
  api.addFiles('tests/oo-layout-tests.js');
});
