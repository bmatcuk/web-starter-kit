const app = require('./lib/ExpressApp');

const server = app.listen(3000, function() {
  let address = server.address().address;
  const port = server.address().port;
  if (address == '::') address = 'localhost';

  // eslint-disable-next-line no-console
  console.log('App listening on http://%s:%s', address, port);
});
