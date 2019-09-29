const { mkdirSync, existsSync } = require('fs');


/**
 * Mkdir if folder is not exists
 * @param path
 */
exports.mkdir = (path) => {
  if (!existsSync(path)) {
    mkdirSync(path);
  }
}