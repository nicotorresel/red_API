const assert = require('chai').assert;
const location = require('../../../api/models/location');  

let = loc1 = new Location('bv','caba', 23424,23424);
describe('net', function() {
  it('should return 2', function(){
    assert.equals(loc1.name, 'bv')
  });
});