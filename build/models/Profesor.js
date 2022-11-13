"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
class Profesor {
    constructor(nombre, cursos) {
        this.nombre = nombre;
        this.cursos = cursos;
    }
    get cursosImpartidos() {
        let cursosImpartidos = [];
        this.cursos.forEach((curso) => {
            cursosImpartidos.push(curso);
        });
        return cursosImpartidos;
    }
}
exports.Profesor = Profesor;
//# sourceMappingURL=Profesor.js.map