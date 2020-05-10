//es la clase principal con la que se forma el grafo completo de todas las localidades que vamos agregando.
//tiene un array de localidades
//primero vamos creando localidades a medida que necesitamos y luego las agregamos al grafo
//automaticamente al agregar una localidad crea el tramo de esa localidad con las demas que ya tiene el grafo
//el grafo red es un grafo completo a partir del cual luego generamos el arbol generador minimo (agm.js)
class Net {
  constructor(){
      this.locations = new Array;
  }

  //le pasamos objeto localidad de parametro
  //valida si esta en la red y si no esta crea el tramo con las demas localidades y luego la agrega
  addLocation(location) {
    if (!this.existLocation(location)) {
      this.locations.forEach((includedLocation)=> {
        addSection(includedLocation, location);
      });
      this.locations.push(location);
    }
  }

  // Walter -> Mejorar logica de este metodo, si location es un objeto y en esas casualidades no matchea alguna key, pero se encuentra dentro de las locations, va a tirar false cuando deberia ser true
  existLocation(location){
    return this.locations.includes(location);
  }

  //metodo auxiliar que se usa dentro de agregarLocalidad para agregar los tramos
  addSection(location, anotherLocation){
    location.addSection(anotherLocation);
    anotherLocation.addSection(location);
  }

  get locations(){
    return this.locations;
  }
}