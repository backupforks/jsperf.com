exports.register = function (server, options, next) {
  server.route({
    method: 'GET',
    path: '/sponsor',
    handler: function (request, reply) {
      reply.view('sponsor/index', {
        headTitle: 'Sponsor'
      });
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'web/sponsor'
};
