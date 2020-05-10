//objeto localidad que creamos antes de agregarlo a la red
//la variable de instancia mas importante es el array de tramos
class Location {
  constructor(name, province, lat, lon){
    this.name = name;
    this.province = province;
    this.lat = lat;
    this.lon = lon;
    //el array tramos son los todos los tramos que tiene esta localidad hacia los vecinos.
    // serian las aristas que tiene el vertice
    this.sections = new Array;
    this.marked = false;
  }

  get name() {
      return this.name;
  }
  get province() {
      return this.province;
  }
  get sections() {
      return this.sections;
  }
  get marked() {
      return this.marked;
  }
  set marcada(x) {
      this.marked = x;
  }

  // Walter -> Revisar la logica de este metodo - No lo entiendo del todo
  // Walter -> No es necesario usar una variable para el return, si no entra en el return dentro del ciclo, entrara en el de afuera (Comparar con metodo original)
  existSection(location){
    this.sections.forEach((value) => {
      if (value.existSection(this,location)) {
        return true;
      }
    }); 
    return false;   
  }

  //este metodo lo usamos en la clase Red cuando agregamos una nueva localidad a la red
  //agregamos el tramo creandolo con la localidad correspondiente 
  addSection(location) {
    if (!this.existSection(localidad)) {
      this.sections.push(new Section(this, localidad));
    }
  }
}