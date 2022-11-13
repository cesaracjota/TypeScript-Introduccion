export class Persona {
    nombre: string;
    apellidos: string;
    edad: number;

    constructor(nombre: string, apellidos: string, edad: number) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }

    saludar(): void{
        console.log(`Hola, soy ${this.nombre} ${this.apellidos} y tengo ${this.edad} años`);
    }
}

export class Trabajador extends Persona{

    salario: number;

    constructor(nombre: string, apellidos: string, edad: number, salario: number) {
        super(nombre, apellidos, edad);
        this.salario = salario;
    }

    saludar(): void{
        super.saludar();
        console.log(`Y mi salario es de ${this.salario}€`);
    }

}

export class Jefe extends Persona{

    trabajadores: Trabajador[] = [];

    constructor(nombre: string, apellidos: string, edad: number) {
        super(nombre, apellidos, edad);
    }
}