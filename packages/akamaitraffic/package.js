Package.describe({
  name: 'akamaitraffic',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  api.use(['mongo', 'widget', 'momentjs:moment', 'underscore',
      'country-info', 'aldeed:collection2', 'fourseven:scss']);
  api.use(['http'], 'server');
  api.use(['templating', 'epoch', 'd3js:d3'], 'client');

  api.addFiles('akamaitraffic.js');
  api.addFiles(['server.js'], 'server');
  api.addFiles([
    'client/lib/d3-legend.js',
    'client/info.html',
    'client/widget.html',
    'client/widget.js',
    'client/widget.css',
    'client/epoch_colors.css.scss',
    ], 'client');

  api.export('AkamaiTraffic');
});

Npm.depends({
  'xml2js': '0.4.6'
});
