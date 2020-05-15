const Section = require ('./section');
class Location {
  constructor(name, province, lat, lon){
    this.name = name;
    this.province = province;
    this.lat = lat;
    this.lon = lon;
    this.sections = new Array;
    this.marked = false;
  }

  existSection(location){
    let exist = false;
    this.sections.forEach((section) => {
      if (section.origin.isEquals(location) || section.destiny.isEquals(location)) {
        exist = true;
      }
    }); 
    return exist;
  }

  addSection(location, variableCost, fixedCost, increase) {
    if (!this.existSection(location)) {
      this.sections.push(new Section(this, location, variableCost, fixedCost, increase));
    }
  }

  isEquals(location) {
    return this.name === location.name && 
           this.province === location.province &&
           this.lat === location.lat &&
           this.lon === location.lon;
  }

}

module.exports = Location;