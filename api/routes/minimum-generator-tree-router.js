'use strict';
module.exports = (app) => {
  const {
    generateTree
  } = require('../controllers/minimum-generator-tree-controller');

  // Routes
  app.route('/generator-tree').post(generateTree);
};