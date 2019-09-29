const { authorization } = require('./../models/authorization');
const { CronJob } = require('cron');
const { SetQueue } = require('./../models/set_queue');

/**
 * Create crontroller
 * @param server hapijs server
 * @param logger
 * @param {object} configuration all configuration
 */
exports.createController = (server, logger, configuration) => {
  const setQueue = new SetQueue(configuration);
  server.route({
    method: 'POST',
    path: '/set',
    handler: (request, h) => {
      logger.info(`Request to /set`);
      return authorization(configuration, logger).then(() => {
        const key = request.payload.key;
        const value = request.payload.value;
        setQueue.add(key, value);
        return {
          status: true
        };
      }, () => {
        return {
          status: false,
          comment: 'Autorization error'
        };
      });
    }
  });
  new CronJob('* * * * * *', () => {
    setQueue.resolve();
    logger.info('Queue of setting properties is resolved!');
  }, null, true, 'America/Los_Angeles');
};