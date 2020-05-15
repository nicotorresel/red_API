// arbol generador minimo (metodo kruskal), al constructor le paso un grafo completo que es la red que armamos
class MinimimGeneratorTree {
  constructor(net){
    this.results = new Array;
  }

  solve() {
    let allConections = [];
    net.locations.forEach((location, index) => {
      location.sectios.forEach((section, index) => {
        if (!allConections.includes(section)) {
          allConections.push(section);
        }
      });
    });

    allConections.sort(section.compareCost());
    let tree = allConections[0];
    
    allConections.forEach((conection, index) => {
      if (this.results.includes(tree) && (tree.origin.marked() || tree.destiny.marked())) {
        this.results.push(tree);
        allConections.sections[index].origin.marked(true);
        allConections.sections[index].destiny.marked(true);
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
