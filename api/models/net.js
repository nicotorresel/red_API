class Net {
  constructor(){
      this.locations = new Array;
  }

  addLocation(location) {
    if (!this.existLocation(location)) {
      this.locations.forEach((includedLocation)=> {
        addSection(includedLocation, location);
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

  get locations(){
    return this.locations;
  }
}

module.exports = Net;