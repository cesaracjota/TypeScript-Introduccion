import { Curso } from "./Curso";

export class Profesor {
    nombre: string;
    cursos: Curso[];

    constructor(nombre: string, cursos: Curso[]){
        this.nombre = nombre;
        this.cursos = cursos;
    }

    get cursosImpartidos(): Curso[] {

        let cursosImpartidos: Curso[] = [];

        this.cursos.forEach((curso: Curso) => {
            cursosImpartidos.push(curso);
        });

        return cursosImpartidos;

    }
}