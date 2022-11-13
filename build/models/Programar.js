"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programar = void 0;
class Programar {
    constructor(titulo, descripcion, completado, urgencia) {
        this.resumen = () => {
            return `Tarea de programación: ${this.titulo} - ${this.completado}`;
        };
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completado = completado;
        this.urgencia = urgencia;
    }
}
exports.Programar = Programar;
//# sourceMappingURL=Programar.js.map