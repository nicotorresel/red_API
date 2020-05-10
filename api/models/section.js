//lo mas importante es el costo del tramo que es lo que necesitamos para armar kruskal o prim

class Section {
  constructor (origin, destiny) {
    this.origin = origin;
    this.destiny = destiny;
    //tramoKm se saca con una formula (haversine) que hice como metodo static.
    //haversine usa coordenadas lat y long de dos puntos para medir la distancia (es una formula ya standar)
    this.sectionKm = distanciaEnKm(origin, destiny);
    //costo variable por km (todavia nose como ponerlo porque deberia setearse en un comienzo para todo.
    //lo deberiamos poner static
    this.variableCost;
    //es costo fijo y se deberia poner igual que cv. el costo fijo se imputa cuando se agregan dos localidades de diferentes provincias
    this.fixedCost;
    //es un porcentaje de aumento que se pone cuando la conexion supera los 300 km y deberiamos ponerlo static tmb
    this.increase;
  }

  get destiny() {
    return this.destiny;
  }

  get origin() {
    return this.origin;
  }

  //calculo el costo del tramo con los cv, cf y aumento aunque todavia nose como setearlos al comienzo del programa
  cost() {
    let cost =  this.sectionKm * this.variableCost;
    if (this.sectionKm > 300) {
        cost = cost + (this.increase * cost / 100);
    if (!sameProvince)
        cost = cost + this.fixedCost;
    return cost;
    } 
  }

  // Walter -> Al querer retornar un boolean que cumpla una condicion, podes evitar usar el if - (Comparar con el metodo original)
  includes(location, anotherLocation) {
    return (location === this.origin && anotherLocation === this.destiny) ||
           (anotherLocation === this.origin && location === this.destiny);
  }

  //lo uso para comparar cuando un tramo tiene las mismas localidades pero las tiene invertidas, es decir
  // cuando tienen las localidades invertidas en origen, destino igualmente tome el tramo como igual.
  // Walter -> Acá habias repetido la comparacion solo cambiando el orden, eso es indiferente, con un solo checkeo alcanzaba
  // Walter -> Tambien al querer retornar un boolean que cumpla una condicion, podes evitar usar el if - (Comparar con el metodo original)
  equals(section) {
    return this.destiny == section.destiny && this.origin == section.origin
  }

  //se usa en agm.js para ordenar el array de tramos de menor a mayor teniendo en cuenta el costo
  // Walter -> Evita usar parametros del tipo param1, param2. Intenta usar nombres distintos
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

  // Walter -> Al querer retornar un boolean que cumpla una condicion, podes evitar usar el if - (Comparar con el metodo original)
  // Walter -> Tambien antes nunca retornaba false, por la condicion - (Comparar con el metodo original)
  sameProvince(origin, destiny) {
    return origin.province === destiny.province;
  }

  //formula de haversine
  // Walter -> Porque metodo static ??
  static distanciaEnKm (origin, destiny) {
    const lat1 = origin.lat;
    const lon1 = origin.lon;
    const lat2 = destiny.lat;
    const lon2 = destiny.lon;
    const radius = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);  // deg2rad below
    const dLon = deg2rad(lon2 - lon1); 
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
    const distance = radius * c; // Distance in km
    return distance;
  }
}