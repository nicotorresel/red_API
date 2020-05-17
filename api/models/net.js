const Location = require ('./location');

class Net {
  constructor() {
    this.locations = [];
  }

  addLocation(location,variableCost, fixedCost, increase) {
    if (!this.existLocation(location)) {
      this.locations.forEach((includedLocation)=> {
        this.addSection(includedLocation, location, variableCost, fixedCost, increase);
      });
      this.locations.push(location);
    }
  }

  existLocation(location){
    return this.locations.includes(location);
  }

  addSection(location, anotherLocation, variableCost, fixedCost, increase){
    location.addSection(anotherLocation, variableCost, fixedCost, increase);
    anotherLocation.addSection(location, variableCost, fixedCost, increase);
  }

}

module.exports = Net;