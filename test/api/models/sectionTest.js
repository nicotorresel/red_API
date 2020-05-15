const assert = require('chai').assert;
const Section = require('../../../api/models/section');
const Location = require('../../../api/models/location');

const sanMiguel = new Location('San Miguel','Buenos Aires', 5, 6);
const munis = new Location('Muñis','Buenos Aires', 7, 8);

describe('Section - Test', () => {

  it('Checking if exist Section', () => {
    const section1 = new Section(sanMiguel, munis);

    const contains = section1.includes(munis,sanMiguel);
    assert.equal(contains, true);

  });

  it('Checking if is the same Section', () => {
    const section1 = new Section (sanMiguel, munis);
    const section2 = new Section(munis, sanMiguel);

    const same = section1.equals(section2);
    assert.equal(same, true);
  });

  it('Checking if two sections are from the same province', () => {
    const section1 = new Section (sanMiguel, munis);

    const sameProvince = section1.sameProvince(section1.origin, section1.destiny);
    assert.equal(sameProvince, true);
  });
});