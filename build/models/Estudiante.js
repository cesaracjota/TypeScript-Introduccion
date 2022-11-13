"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    // constructor de la clase
    constructor(nombre, apellidos, edad, cursos) {
        this.ID = "1234567890";
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.cursos = cursos;
    }
    mostrarDatos() {
        return `El estudiante ${this.nombre} ${this.apellidos} tiene ${this.edad} años y esta matriculado en ${this.cursos.length} cursos, los cuales son: ${this.cursos.map((curso) => curso.nombre).join(", ")}`;
    }
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }
    get ID_Estudiante() {
        return this.ID;
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=Estudiante.js.map