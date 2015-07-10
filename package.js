Package.describe({
  name: 'slack-client',
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('slack-client.js', 'server');
  api.export('Slack', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('slack-client');
  api.addFiles('slack-client-tests.js');
});

Npm.depends({
  'slack-client': '1.4.0'
});
