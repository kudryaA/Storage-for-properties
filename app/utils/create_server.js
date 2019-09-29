const Hapi = require('@hapi/hapi');

exports.createServer = (configuration) => {
    const host = configuration.host;
    const port = configuration.port;
    return Hapi.server({
        port,
        host
    });
};