"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jefe = exports.Trabajador = exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre} ${this.apellidos} y tengo ${this.edad} años`);
    }
}
exports.Persona = Persona;
class Trabajador extends Persona {
    constructor(nombre, apellidos, edad, salario) {
        super(nombre, apellidos, edad);
        this.salario = salario;
    }
    saludar() {
        super.saludar();
        console.log(`Y mi salario es de ${this.salario}€`);
    }
}
exports.Trabajador = Trabajador;
class Jefe extends Persona {
    constructor(nombre, apellidos, edad) {
        super(nombre, apellidos, edad);
        this.trabajadores = [];
    }
}
exports.Jefe = Jefe;
//# sourceMappingURL=Persona.js.map