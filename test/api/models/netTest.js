const assert = require('chai').assert;
const Net = require('../../../api/models/net');  
const Location = require('../../../api/models/location'); 

const bellaVista = new Location('Bella Vista','Buenos Aires', 1, 2);
const joseCPaz   = new Location('Jose C. Paz','Buenos Aires', 3, 4);
const sanMiguel  = new Location('San Miguel','Buenos Aires', 5, 6);
const munis      = new Location('Muñis','Buenos Aires', 7, 8);


describe ('Test - Net', () => {
  it('Checking if a net contains the Location recently added', () => {
    const web = new Net();
    web.addLocation(bellaVista);

    const existLocation = web.existLocation(bellaVista);
    assert.equal(existLocation, true);
  });

  it('Checking if the number of location in the net is right', () => {
    const web1 = new Net();
    web1.addLocation(munis);
    web1.addLocation(sanMiguel);
    web1.addLocation(joseCPaz);

    assert.equal(web1.locations.length, 3);

  });
});
