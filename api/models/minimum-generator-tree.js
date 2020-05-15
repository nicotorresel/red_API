// arbol generador minimo (metodo kruskal), al constructor le paso un grafo completo que es la red que armamos
class MinimumGeneratorTree {
  constructor(net){
    this.results = [];
    this.net = net;
  }

  solve() {
    let allConections = [];
    this.net.locations.forEach((location, index) => {
      location.sections.forEach((section, index) => {
        if (!allConections.includes(section)) {
          allConections.push(section);
        }
      });
    });

    allConections.sort((sectionA, sectionB) => (sectionA.cost > sectionB.cost) ? 1 : -1);

    
    allConections.forEach((conection, index) => {
      let tree = allConections[index];
      if (!this.results.includes(conection) && (!conection.origin.marked || !conection.destiny.marked)) {
        this.results.push(conection);
        conection.origin.marked=true;
        conection.destiny.marked= true;
      }
    })
  }

  totalCost() {
    let cost = 0;
    this.results.forEach((value)=>{
      cost = cost + value.cost;
    });
    return cost;
  }
}

module.exports = MinimumGeneratorTree;
