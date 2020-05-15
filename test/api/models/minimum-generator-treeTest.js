const assert = require('chai').assert;
const Net = require('../../../api/models/net');  
const Location = require('../../../api/models/location'); 
const Section = require('../../../api/models/section');
const MinimunGeneratorTree = require('../../../api/models/minimum-generator-tree');

const bellaVista = new Location('Bella Vista','Buenos Aires', 1, 2);
const joseCPaz   = new Location('Jose C. Paz','Buenos Aires', 3, 4);
const sanMiguel  = new Location('San Miguel','Buenos Aires', 5, 6);
const munis      = new Location('Muñis','Buenos Aires', 7, 8);
const locations  = [bellaVista, joseCPaz, sanMiguel, munis]; 

const web = new Net();

locations.forEach((element) => {
    web.addLocation(element);
});

describe('minimun generator tree - TEST', () => {

    it ('Checking same number of location in web and minimun generator tree', () => {
        const tree = new MinimunGeneratorTree(web);
        const ret = tree.solve();
        let finalLocations = [];
        tree.results.forEach( (element) => {
            if (!finalLocations.includes(element.origin))
                finalLocations.push(element.origin);
            if (!finalLocations.includes(element.destiny))
                finalLocations.push(element.destiny);     
        });

        assert.equal(finalLocations.length, 4);
    });

});