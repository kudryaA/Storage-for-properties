/**
 * Method for create autorization action
 * @param {object} configuration configuration with security info
 * @param logger
 * @param {string} password password for authorization
 */
exports.authorization = (configuration, logger, password = undefined) => {
  return new Promise((resolve, reject) => {
    if (!configuration.security) {
      resolve();
    } else if (configuration.password === password) {
      resolve();
    } else {
      logger.warn('Error in authorization');
      reject();
    }
  });
};