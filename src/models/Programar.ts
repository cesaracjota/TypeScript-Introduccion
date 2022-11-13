import { ITarea, Nivel } from "./interfaces/ITarea";

export class Programar implements ITarea {
    titulo: string;
    descripcion?: string;
    completado: boolean;
    urgencia?: Nivel;
    
    constructor(titulo:string, descripcion:string, completado:boolean, urgencia:Nivel){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completado = completado;
        this.urgencia = urgencia;
    }

    resumen = () => {
        return `Tarea de programación: ${this.titulo} - ${this.completado}`;
    };

}