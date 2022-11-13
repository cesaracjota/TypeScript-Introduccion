import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils';
import { LISTA_CURSOS } from './mock/cursos.mock';
import { Curso } from './models/Curso';
import { Estudiante } from './models/Estudiante';
import { ITarea, Nivel } from './models/interfaces/ITarea';
import { Trabajador, Jefe } from './models/Persona';
import { Profesor } from './models/Profesor';
import { Programar } from './models/Programar';
import { Singelton } from './patterns/creacionales/Singelton';


// console.log("hello welcome to in TS");
// console.log("hello welcome to in TS 2");


// Declarar variables en TS

var nombre:string = "Juan";

// console.log(nombre);
// console.log(`Hola bienvenido ${nombre}`);	// Template String

// Instanciacion de multiples variables

let a:string,b:number,c:boolean; // Declaracion de multiples variables

a = "Hola";
b = 10;
c = true;

let listaTareas:string[] = ["Tarea 1","Tarea 2","Tarea 3"]; // Declaracion de un arreglo de strings


let miTarea = {
    titulo: "Tarea 1",
    descripcion: "Esta es la tarea 1",
    estado: true
}

// Declaracion de 1 a 1

let miNombre = miTarea.titulo;
let miDescripcion = miTarea.descripcion;
let miEstado = miTarea.estado;

// Declaracion con factor de propagacion

// en asignacion de variables

let {titulo,descripcion,estado} = miTarea;

//En listas

let listaCompraLunes: string[] = ["Leche","Pan","Huevos"];

let listaCompraMartes: string[] = [...listaCompraLunes,"Arroz","Frijoles"];

let listaCompraMiercoles: string[] = ["Cereal",...listaCompraMartes];

let listaCompraSemana: string[] = [...listaCompraLunes,...listaCompraMartes, ...listaCompraMiercoles];

// En objetos

let estados = {
    usuario: "Juan",
    estado: "Activo",
    fecha: "2020-01-01",
    jwt: "123456789"
}

// cambiar un valor por propagacion

let nuevoEstado = {
    ...estados,
    estado: "Inactivo"
}

// console.log(estados);
// console.log(nuevoEstado);


// Convinar tipos de datos

let valores: (string|number)[] = ["Hola",1,2,3,4,5,6,7,8,9,10];

// Enumeraciones

enum Colores {Rojo,Verde,Azul};

let colorFavorito:Colores = Colores.Rojo;


interface Tarea {
    id:number;
    nombre:string;
    estado:boolean;
    valor:number;
}

let tarea1:Tarea = {
    id:1,
    nombre:"Tarea 1",
    estado:true,
    valor:100
}

// Types de TS - conjunto de datos

type Producto = {
    precio: number,
    nombre: string,
}

let carro: Producto = {
    precio: 100,
    nombre: "Carro"
}

// Operadores ternarios ? : 

let listaTareasPendientes: Tarea[] = [
    {
        id: 1,
        nombre: "Tarea 1",
        estado: true,
        valor: 100
    },
    {
        id: 2,
        nombre: "Tarea 2",
        estado: true,
        valor: 100
    },
    {
        id: 3,
        nombre: "Tarea 3",
        estado: true,
        valor: 300
    },
    {
        id: 4,
        nombre: "Tarea 4",
        estado: true,
        valor: 400
    },
    {
        id: 5,
        nombre: "Tarea 5",
        estado: true,
        valor: 500
    },
    {
        id: 6,
        nombre: "Tarea 6",
        estado: true,
        valor: 600
    },
    {
        id: 7,
        nombre: "Tarea 7",
        estado: true,
        valor: 700
    },
]

// foreach

listaTareasPendientes.forEach(
    (tarea:Tarea, index: number) => {
       // console.log(`La tarea ${tarea.nombre} tiene un valor de ${tarea.valor}`);
    }
)

// For Normal

for (let index = 0; index < listaTareasPendientes.length; index++) {
    const element = listaTareasPendientes[index];
    // console.log(`La tarea ${element.nombre} tiene un valor de ${element.valor}`);
}


// While

while (tarea1.estado !== true) {
    // console.log("La tarea 1 no esta completada");
}




/**
 * Funciones en TS
 */

function saludar(){
    let saludo = "Hola";
    console.log(saludo);
}

// invocacion de la funcion
saludar();

/**
 * Funcion que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a saludar
 */

function saludar2(nombre:string){
    console.log(`Hola ${nombre}`);
}

saludar2("Juan");


function despedirPersona(nombre:string = "Pepe"):void{
    console.log(`Adios ${nombre}`);
}

function despedirPersona2(nombre?: string){
    if(nombre){
        console.log(`Adios ${nombre}`);
    }else{
        console.log(`Adios`);
    }
}

despedirPersona();
despedirPersona2();

function variosParams(nombre: string, edad?: number, estado: boolean = true){
    console.log(`Hola ${nombre} tienes ${edad} años y tu estado es ${estado}`);
}

variosParams("Juan", 20, false);

function ejemploVariosTipos(a: string|number){
    if(typeof(a) === 'string'){
        console.log("Es un string");
    }else if (typeof(a) === 'number'){
        console.log("Es un numero");
    }else{
        console.log(a);
    }
}

ejemploVariosTipos("true");

/**
 * Funciones anonimas
 */

let saludarAnonima = function(){
    console.log("Hola");
}

// saludarAnonima();

function ejemploReturn(a:number, b:number):number{
    return a + b;
}

let resultado = ejemploReturn(1,20.5);

// console.log(resultado);

/**
 * Funciones
 * @param params es un parametro que va recibir varios parametros de tipo numero
**/

function ejemploMultipleParams(...params: number[]){
    console.log(params);
}

// ARROW FUNCTIONS

type Empleado = {
    nombre: string,
    apellidos: string,
    edad: number,
}

let empleadoJuan:Empleado = {
    nombre: "Juan",
    apellidos: "Perez",
    edad: 16,
}

const mostrarEmpleado = (empleado : Empleado) => {
    console.log(`El empleado ${empleado.nombre} ${empleado.apellidos} tiene ${empleado.edad} años`);
}

// mostrarEmpleado(empleadoJuan);

const datosEmpleado = (empleado: Empleado): string => {
    if(empleado.edad > 18){
        return `El empleado ${empleado.nombre} ${empleado.apellidos} es mayor de edad`;
    }else{
        return `El empleado ${empleado.nombre} ${empleado.apellidos} es menor de edad`;
    }
}

// console.log(datosEmpleado(empleadoJuan));

const obtenerSalario = (empleado: Empleado, cobrar:() => string) => {
    if(empleado.edad > 18){
        return cobrar();
    }else{
        return "No se puede cobrar";
    }
}

const cobrarEmpleado = (empleado: Empleado) => {
    return `El empleado ${empleado.nombre} ${empleado.apellidos} ha cobrado`;
}

// obtenerSalario(empleadoJuan, () => 'Cobrar Juan');

// Async functions

// async function ejemploAsync () : Promise<string> {
//     await console.log("Tarea a completar antes de segur con la secuencia de instrucciones");
//     console.log("Segunda tarea a completar");

//     return "completado";
// }

// ejemploAsync().then((resultado) => {
//     console.log(resultado);
// }).catch((error) => {
//     throw new Error(error);
// }).finally(() => {
//     console.log("Finalizado");
// });

// Generatos -> emitir valores de forma secuencial

function* ejemploGenerator() {

    // yield -> para emitir valores

    let index = 0;

    while(index < 5){
        yield index++;
    }

}

// Guardamos la funcion generadora en una variable

let generadora = ejemploGenerator();

// Accedemos a los valores emitidos

// console.log(generadora.next().value);

// Worker

function* watcher(valor: number) {

    yield valor; // valor unicial
    yield* worker(valor); // valor incrementado
    yield valor + 4;

}

function* worker(valor: number) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}

let generatorSaga = watcher(0);

// console.log(generatorSaga.next().value);
// console.log(generatorSaga.next().value);
// console.log(generatorSaga.next().value);
// console.log(generatorSaga.next().value);
// console.log(generatorSaga.next().value);


// Sobrecarga de funciones --> solucionar mediane el uso de difentes tipos de parametros

function mostrarError(error: string | number): void {
    console.log(`Error: ${error}`);
} 

// Persistencia de datos
/**
 * 1. LocalStorage --> almacena los datos en el navegador del cliente (no se eliminan automaticamente)
 * 2. SessionStorage --> La diferencia con el localStorage es que los datos se eliminan cuando se cierra | cambia el navegador
 * 3. Cookies --> Tienen una fecha de caducidad y tambien tienen un ambito de URL
 */

// LocalStorage

// function guardarLocalStorage() {
//     localStorage.setItem("nombre", "Juan");
// }

// function leer() {
//     let nombre = localStorage.getItem("nombre");
// }

// function eliminar() {
//     localStorage.removeItem("nombre");
// }


/**
 * COKKIES
 */

// const cookieOptions = {
//     name: "usuario",
//     value: "Martin",
//     maxAge: 10 * 60,
//     expires: new Date(Date.now() + 10 * 60 * 1000),
//     path: "/",
// }

// //seteamos la cookie
// setCookie(cookieOptions);

// //leemos la cookie
// let cookieLeids = getCookieValue("usuario");

// //Eliminar cookie

// deleteCookie("usuario");

// //Eliminar toda las cookies

// deleteAllCookies();

/**
 * SESSION STORAGE
 */


// Clase Temporizador

class Temporizador {

    public terminar?: (tiempo:number) => void;

    public empezar(): void {
        setTimeout(() => {

            if(!this.terminar) return;

            //cuando haya pasado el tiempo, sejecutará la funcion terminar

            this.terminar(Date.now());

        }, 5000);
    }

}

const minTemporizador : Temporizador = new Temporizador();

// Definimos la funcion del callBack a ejecutar cuando se cumpla el tiempo

// minTemporizador.terminar = (tiempo: number) => {
//     console.log("Evento Terminado en " + tiempo);
// }

// Lanzamos el temporizador

// minTemporizador.empezar(); // Se inicia el timeout

// se ejecuta la cada cierto tiempo

// setInterval(() => console.log("TIk"), 1000);

// Eliminar la ejecucion de la funcion
delete minTemporizador.terminar;

// Extender de eventTarget

class Temporizador2 extends EventTarget {

    public empezar(): void {
        setTimeout(() => {

            //cuando haya pasado el tiempo, sejecutará la funcion terminar

            this.dispatchEvent(new Event("terminar"));

        }, 5000);
    }

}

const minTemporizador2 : Temporizador2 = new Temporizador2();

/**
 * CLASES EN TYPESCRIPT
 */

// usamos el mock

const listaCursos: Curso[] = LISTA_CURSOS;

// Creamos un nuevo estudiante

const juan: Estudiante = new Estudiante("Juan", "Perez", 20, listaCursos);
const profeCesar: Profesor = new Profesor("Cesar Acjota", listaCursos.filter(curso => curso.nombre === "Angular") )

const cursoAngular:Curso = new Curso("Angular", 30);

// juan.cursos.push(cursoAngular);

// console.log(juan.mostrarDatos());

// console.log(juan.horasEstudiadas);
// console.log(profeCesar.nombre + " y enseña el curso de " + profeCesar.cursosImpartidos);


if(juan instanceof Estudiante){
    console.log("Es un estudiante");
}

/**
 * HERENCIA Y POLIMORFISMO EN TS
 */

let empleado1: Trabajador = new Trabajador("Juan", "Perez", 20, 1000);
let empleado2: Trabajador = new Trabajador("Pepe", "Florez", 20, 3000);

let jefe1 : Jefe = new Jefe("Cesar", "Acosta", 30);

jefe1.trabajadores.push(empleado1, empleado2);

// empleado1.saludar();

// jefe1.saludar();

jefe1.trabajadores.forEach((trabajador: Trabajador) => {
    trabajador.saludar();
});

//  Uso de interfaces

let programar: ITarea = {
    titulo: "Programar",
    descripcion: "Programar en Angular",
    completado: false,
    urgencia: Nivel.AVANZADO,
    resumen: function (): string {
        return `${this.titulo} - ${this.completado} - Nivel: ${this.urgencia}`;
    }

}

// console.log(programar.resumen());

//  tarea de programacion (implementa de tarea)

let programarTS = new Programar("Programar en TS", "Programar en Angular", false, Nivel.AVANZADO);

// console.log(programarTS.resumen());

/**
 * DECORADORES
 */

// Decoradores experimentares --> @
// -Clases
// -Parametros
// - Metodos
// - Propiedades

function Override(label:string){
    return function(target: any, key: string){
        Object.defineProperty(target, key, {
            get: function(){
                return label;
            }
        })
    }
}


class PruebaDecorador {

    @Override('prueba') // llamar a la funcion Override

    nombre: string = "Juan";
}

// let prueba = new PruebaDecorador();

// console.log(prueba.nombre);

/**
 * PATRONES DE DISEÑO
 * 1 - Patrones Creacionales .- Mecanismos de creacion de objetos, reutilizacion de codigo y ofrecer flexibilidad al codigo
 * 2 - Patrones Estructurales .- Eficiencia y flexibilidad de la estructura a la hora de definir clases y objetos.
 * 3 - Patrones Comportamiento .- Centrados en la asignacion efectiva de responsabilidad entre objetos, comunicacion efectiva entre objetos
 */


/**
 * PATRONES CREACIONALES
*/

const miPrimeSingelton = Singelton.getInstance();

const miSegundoSingelton = Singelton.getInstance();

if(miPrimeSingelton === miSegundoSingelton){
    console.log("Son la misma instancia");
    miPrimeSingelton.doSomething();
}else{
    console.log("Son diferentes instancias");
}
