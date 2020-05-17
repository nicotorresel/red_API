const {
  kmDistance,
} = require('../helper');

class Section {
  constructor (origin, destiny, variableCost, fixedCost, increase) {
    this.origin = origin;
    this.destiny = destiny;
    this.sectionKm = kmDistance(origin, destiny);
    this.variableCost = variableCost;
    this.fixedCost = fixedCost;
    this.increase = increase;
  }
  
  cost() {
    let cost =  this.sectionKm * this.variableCost;
    if (this.sectionKm > 300) {
        cost = cost + (this.increase * cost / 100);
    if (!sameProvince)
        cost = cost + this.fixedCost;
    return cost;
    } 
  }

  includeLocation(location) {
    return (location === this.origin  || location === this.destiny);
  }

  equals(section) {
    return (this.destiny == section.destiny && this.origin == section.origin) ||
           (this.destiny == section.origin && this.origin == section.destiny);
  }

  compareCost(section, anotherSection) {
    if (section.cost < anotherSection.cost) {
      return -1;
    } 
    else if (section.cost > anotherSection.cost) {
      return 1
    } 
    else {
      return 0;
    }
  }

  sameProvince(origin, destiny) {
    return origin.province === destiny.province;
  }

}

module.exports = Section;