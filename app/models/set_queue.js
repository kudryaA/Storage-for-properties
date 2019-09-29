const { setProperties } = require('./set_properties');

/**
 * Class for controlling writting conflict
 */
exports.SetQueue = class {
  /**
   * Constuctor
   * @param {object} configuration service configuration
   */
  constructor(configuration) {
    this.configuration = configuration;
    this.queue = [];
  }

  /**
   * Method for add data
   * @param {string} key 
   * @param {object} value 
   */
  add(key, value) {
    this.queue.push({
      key,
      value
    });
  }

  /**
   * Resolve queue
   */
  resolve() {
    this.queue.forEach(property => {
      setProperties(this.configuration, property.key, property.value);
    });
  }
};