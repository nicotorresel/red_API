
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
    this.sections.forEach((value) => {
      if (value.includes(this,location)) {
        return true;
      }
    }); 
    return false;   
  }

  addSection(location) {
    if (!this.existSection(localidad)) {
      this.sections.push(new Section(this, localidad));
    }
  }
}

module.exports = Location;