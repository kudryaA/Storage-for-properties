const { readFileSync } = require('fs');
const { getPropertyInfo } = require('./property_info');

/**
 * Method for get properties
 * @param {object} configuration
 * @param {string} key property
 * @returns value of propery
 */
exports.getProperties = (configuration, key) => {
  const { path, exists } = getPropertyInfo(configuration.propertiesPath, key);
  if (exists) {
    return readFileSync(path, 'utf-8');
  } else {
    return undefined;
  }
};