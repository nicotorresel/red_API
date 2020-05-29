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

    const result = new MinimumGeneratorTree(net);

    const tree = result.solve();
    const someCost = 0;
    const response = {};
    response.finalCost = someCost;
    response.tree = tree;
    
    console.log(JSON.stringify(req.body));
    console.log(tree);

    res.json(response);
  } catch(err) {
    res.json(err);
  }
} 

module.exports = {
  generateTree,
};