'use strict';

const methodWithoutParams = (req, res, next) => {
  try {
    res.json(req);
  } catch(err) {
    res.json(err);
  }
} 

const methodWithParams = (req, res, next) => {
  try {
    res.json(req.params);
  } catch(err) {
    res.json(err);
  }
} 

module.exports = {
  methodWithoutParams,
  methodWithParams,
};