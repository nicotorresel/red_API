'use strict';

const Location = require('../models/location');
const Net = require('../models/net');
const Section = require('../models/section');
const MinimumGeneratorTree = require('../models/minimum-generator-tree');

const generateTree = (req, res, next) => {
  try {
    const locationModelList = req.body.locations.map(location =>
      new Location(location.name, location.province, parseFloat(location.lat), parseFloat(location.lon))
    );

    let net = new Net();
    locationModelList.forEach(element => {
      net.addLocation(element);
    });

    const tree = new MinimumGeneratorTree(net);
    tree.solve();

    const someCost = 0;
    const response = {
      finalCost: someCost,
      tree: JSON.parse(JSON.stringify(tree.results)),
    };
    res.json(response)
  } catch(err) {
    res.json(err);
  }
} 

module.exports = {
  generateTree,
};