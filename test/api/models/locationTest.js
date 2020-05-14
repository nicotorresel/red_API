const assert = require('chai').assert;
const Location = require('../../../api/models/location');  

const bellaVista = new Location('Bella Vista','Buenos Aires', 1, 2);
const joseCPaz   = new Location('Jose C. Paz','Buenos Aires', 3, 4);
const sanMiguel  = new Location('San Miguel','Buenos Aires', 5, 6);
const munis      = new Location('Muñis','Buenos Aires', 7, 8);
const locations  = [bellaVista, joseCPaz, sanMiguel, munis]; 

describe('TEST - Location', () => {
  it('All lacation must have name', () => {
    let locationNoName = 0;
    let locationWithName = 0;
    locations.forEach((location) => {
      if (!location.name) {
        locationNoName ++;
      }
      else {
        locationWithName ++
      }
    })

    assert.equal(locationNoName, 0);
    assert.equal(locationWithName, 4);
  });

  it ('Add one section to location', () => {
    bellaVista.addSection(munis);

    assert.equal(bellaVista.sections.length, 1);
  });
  
  it ('Checking a section with an existing location', () => {
    bellaVista.addSection(munis);
    const existLocation = bellaVista.existSection(munis);

    assert.equal(existLocation, true);
  });
  

  it ('Checking a section with a not existing location', () => {
    bellaVista.addSection(munis);
    const existLocation = bellaVista.existSection(joseCPaz);

    assert.equal(existLocation, false);
  });
});