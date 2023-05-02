alert("hooolld");
const name="juanfra";

class Persona {
    constructor(nombre, apellidos, dni) {
      this._nombre = nombre;
      this._apellidos = apellidos;
      this._dni = dni;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    get apellidos() {
      return this._apellidos;
    }
  
    set apellidos(nuevosApellidos) {
      this._apellidos = nuevosApellidos;
    }
  
    get dni() {
      return this._dni;
    }
  
    set dni(nuevoDni) {
      this._dni = nuevoDni;
    }

    static mostrarMensaje() {
      console.log("Este es un mensaje estático de la clase Persona");
    }
    
  }
    const persona1 = new Persona('Juan', 'Pérez García', '12345678A');
    console.log(persona1.nombre); // 'Juan'
    console.log(persona1.apellidos);
    console.log(persona1.dni);