var loopback = require('loopback');
var app = loopback();
var explorer = require('loopback-explorer');

app.use('/api', loopback.rest());
app.use('/explorer', explorer(app, { basePath: '/api' }));

app.listen(3000);