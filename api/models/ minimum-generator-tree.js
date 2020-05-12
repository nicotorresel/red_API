// arbol generador minimo (metodo kruskal), al constructor le paso un grafo completo que es la red que armamos
class MinimimGeneratorTree {
  constructor(net){
      //contiene un array de tramos 
      this.results = new Array;
  }
  
  //resuelvo el algoritmo
  // Walter -> Comparar tu implementacion, con la mia usando forEach
  // Walter -> Me parece que esto va a romper en algun momento, hay que probarlo
  // Walter -> Checkear el metodo sort de arrays de js, me parece que de la manera en que lo usas, no va a servir
  solve() {
    //creo un array trayendo todos los tramos de la red.
    // var all_conections = new Array;
    // for (i = 0; i < red.localidades.length; i++) {
    //   for (j=0;j<red.localidades[i].tramos.length;j++){
    //     if (!all_conections.includes(red.localidades[i].tramos[j])){
    //       all_conections.push(red.localidades[i].tramos[j]);
    //     }
    //   }
    // }
    //luego que tengo todos los tramos de la red los ordeno de menor costo a mayor (para ello hice el metodo compare en la clase Tramo)
    //all_conections.sort(tramo.compare_costo);
    //luego voy agregando tramos de menor costo pero chequeo que no se cierre el grafo ni se repitan los tramos
    //arbol generador minimo tiene que ser tipo arbol por lo que no se cierra el grafo y por eso marco las localidades que se van agregando 
    // var t = all_conections[0];
    // for (a=0; a<all_conections.length;a++){
    //   if (!this._result.includes(t) && (!t.origen.marcada() || !t.destino.marcada())){	
    //     this._result.push(t);
    //     all_conections.tramos[i].origen.marcada(true);
    //     all_conections.tramos[i].destino.marcada(true);
    //   }
    // }

    // Walter -> El index que uso en los forEach, es una de las 2 variables que te brinda el metodo, representa el indice donde esta parado(i)
    // Walter -> El index puede ser usado como no, es por eso que en algunos lados lo vas a ver y en otros no.
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
  //devuelve el arreglo de tramos, que contienen cada uno las localidades y costo del tramo
  get sections() {
    return this.results;
  }
  //recorro el los tramos y voy sumando cada costo individual de los tramos para dar el total de las conexiones
  // Walter -> Falta el return o soy yo? xD
  totalCost() {
    let cost = 0;
    this.results.forEach((value)=>{
      cost = cost + value.cost;
    });
    return cost;
  }

}
