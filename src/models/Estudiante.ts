import { Curso } from "./Curso";

export class Estudiante {

    // propiedades de la clase
    nombre: string;
    apellidos: string;
    edad: number;
    cursos: Curso[];

    private ID: string = "1234567890";

    // constructor de la clase

    constructor(nombre: string, apellidos: string, edad: number, cursos: Curso[]) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.cursos = cursos;
    }

    public mostrarDatos(): string {
        return `El estudiante ${this.nombre} ${this.apellidos} tiene ${this.edad} años y esta matriculado en ${this.cursos.length} cursos, los cuales son: ${this.cursos.map((curso) => curso.nombre).join(", ")}`;
    }

    get horasEstudiadas (): number  {  //va devolver un numero

        let horasEstudiadas = 0;

        this.cursos.forEach((curso:Curso) => {
            horasEstudiadas += curso.horas;
        })

        return horasEstudiadas;
    }

    get ID_Estudiante (): string {
        return this.ID;
    }

}