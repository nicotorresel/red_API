'use strict';
module.exports = (app) => {
  const {
    methodWithParams,
    methodWithoutParams
  } = require('../controllers/first-controller');

  // Routes
  app.route('/endpoint/:params')
    .get(methodWithParams)
    .post(methodWithParams)
    .put(methodWithParams)
    .delete(methodWithParams);

  app.route('/endpoint')
    .get(methodWithoutParams)
    .post(methodWithoutParams)
    .put(methodWithoutParams)
    .post(methodWithoutParams);
};