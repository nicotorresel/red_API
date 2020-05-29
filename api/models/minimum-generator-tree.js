const Section = require ('./section');
const Location = require('./location');
const Net = require('./net');

class MinimumGeneratorTree {
  constructor(net){
    this.net = net;
    this.allConections = [];
    this.results = [];
  }

  solve() {
    this.net.locations.forEach((location, index) => {
      location.sections.forEach((section, index) => {
        if (!this.allConections.includes(section)) {
          this.allConections.push(section);
        }
      });
    });

    // first sort the array by cost
    this.allConections.sort((sectionA, sectionB) => (sectionA.cost > sectionB.cost) ? 1 : -1);
    // then filter the array by deleting duplicates.
    let filteredConnections = this.filterConnections();
    

    filteredConnections.forEach((conection, index) => {
      if (!this.results.includes(conection) && 
         (this.originAvailable(conection, this.results) || this.destinyAvailable(conection, this.results))) {
             this.results.push(conection);
      }
    });
    return this.results;
  }

  totalCost() {
    let cost = 0;
    this.results.forEach((value)=>{
      cost = cost + value.cost;
    });
    return cost;
  }

  // this method delete duplicates of section Object.
  filterConnections() {
    let ret = [];
    this.allConections.forEach((section) => {
      let control = false;
      ret.forEach((anotherSection) => {
        if(section.equals(anotherSection)){
          control = true;
        }
      });
      if(!control){
        ret.push(section);
        control = false;
      }
    });
    return ret;
  } 

  originAvailable(section, list){
    let ret = true;
    list.forEach((connection) => {
      if (connection.includeLocation(section.origin)){
        ret = false;
      }
    });
    return ret;
  }

  destinyAvailable(section, list){
    let ret = true;
    list.forEach((connection) => {
      if (connection.includeLocation(section.destiny)){
        ret = false;
      }
    });
    return ret;
  }


}

module.exports = MinimumGeneratorTree;
