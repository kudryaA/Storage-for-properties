const bunyan = require('bunyan');

/**
 * Method for crate logger
 */
exports.createLogger = () => {
  return bunyan.createLogger({
    src: true,
    name: 'Storage for properties',
    streams: [
      {
        level: 'info',
        stream: process.stdout
      },
      {
        level: 'info',
        path: 'storage_properties.log'
      }
    ]
  });
};