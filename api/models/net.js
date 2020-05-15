class Net {
  constructor() {
      this.locations = [];
  }

  addLocation(location) {
    if (!this.existLocation(location)) {
      this.locations.forEach((includedLocation)=> {
        this.addSection(includedLocation, location);
      });
      this.locations.push(location);
    }
  }

  existLocation(location){
    return this.locations.includes(location);
  }

  addSection(location, anotherLocation){
    location.addSection(anotherLocation);
    anotherLocation.addSection(location);
  }

}

module.exports = Net;