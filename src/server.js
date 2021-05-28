const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  // Run at localhost:5000
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        // CORS
        origin: ['*'],
      },
    },
  });

  server.route(routes);
  await server.start();
};

init();
