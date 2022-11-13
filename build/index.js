"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const cursos_mock_1 = require("./mock/cursos.mock");
const Curso_1 = require("./models/Curso");
const Estudiante_1 = require("./models/Estudiante");
const ITarea_1 = require("./models/interfaces/ITarea");
const Persona_1 = require("./models/Persona");
const Profesor_1 = require("./models/Profesor");
const Programar_1 = require("./models/Programar");
const Singelton_1 = require("./patterns/creacionales/Singelton");
// console.log("hello welcome to in TS");
// console.log("hello welcome to in TS 2");
// Declarar variables en TS
var nombre = "Juan";
// console.log(nombre);
// console.log(`Hola bienvenido ${nombre}`);	// Template String
// Instanciacion de multiples variables
let a, b, c; // Declaracion de multiples variables
a = "Hola";
b = 10;
c = true;
let listaTareas = ["Tarea 1", "Tarea 2", "Tarea 3"]; // Declaracion de un arreglo de strings
let miTarea = {
    titulo: "Tarea 1",
    descripcion: "Esta es la tarea 1",
    estado: true
};
// Declaracion de 1 a 1
let miNombre = miTarea.titulo;
let miDescripcion = miTarea.descripcion;
let miEstado = miTarea.estado;
// Declaracion con factor de propagacion
// en asignacion de variables
let { titulo, descripcion, estado } = miTarea;
//En listas
let listaCompraLunes = ["Leche", "Pan", "Huevos"];
let listaCompraMartes = [...listaCompraLunes, "Arroz", "Frijoles"];
let listaCompraMiercoles = ["Cereal", ...listaCompraMartes];
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMartes, ...listaCompraMiercoles];
// En objetos
let estados = {
    usuario: "Juan",
    estado: "Activo",
    fecha: "2020-01-01",
    jwt: "123456789"
};
// cambiar un valor por propagacion
let nuevoEstado = Object.assign(Object.assign({}, estados), { estado: "Inactivo" });
// console.log(estados);
// console.log(nuevoEstado);
// Convinar tipos de datos
let valores = ["Hola", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Enumeraciones
var Colores;
(function (Colores) {
    Colores[Colores["Rojo"] = 0] = "Rojo";
    Colores[Colores["Verde"] = 1] = "Verde";
    Colores[Colores["Azul"] = 2] = "Azul";
})(Colores || (Colores = {}));
;
let colorFavorito = Colores.Rojo;
let tarea1 = {
    id: 1,
    nombre: "Tarea 1",
    estado: true,
    valor: 100
};
let carro = {
    precio: 100,
    nombre: "Carro"
};
// Operadores ternarios ? : 
let listaTareasPendientes = [
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
];
// foreach
listaTareasPendientes.forEach((tarea, index) => {
    // console.log(`La tarea ${tarea.nombre} tiene un valor de ${tarea.valor}`);
});
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
function saludar() {
    let saludo = "Hola";
    console.log(saludo);
}
// invocacion de la funcion
saludar();
/**
 * Funcion que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a saludar
 */
function saludar2(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar2("Juan");
function despedirPersona(nombre = "Pepe") {
    console.log(`Adios ${nombre}`);
}
function despedirPersona2(nombre) {
    if (nombre) {
        console.log(`Adios ${nombre}`);
    }
    else {
        console.log(`Adios`);
    }
}
despedirPersona();
despedirPersona2();
function variosParams(nombre, edad, estado = true) {
    console.log(`Hola ${nombre} tienes ${edad} años y tu estado es ${estado}`);
}
variosParams("Juan", 20, false);
function ejemploVariosTipos(a) {
    if (typeof (a) === 'string') {
        console.log("Es un string");
    }
    else if (typeof (a) === 'number') {
        console.log("Es un numero");
    }
    else {
        console.log(a);
    }
}
ejemploVariosTipos("true");
/**
 * Funciones anonimas
 */
let saludarAnonima = function () {
    console.log("Hola");
};
// saludarAnonima();
function ejemploReturn(a, b) {
    return a + b;
}
let resultado = ejemploReturn(1, 20.5);
// console.log(resultado);
/**
 * Funciones
 * @param params es un parametro que va recibir varios parametros de tipo numero
**/
function ejemploMultipleParams(...params) {
    console.log(params);
}
let empleadoJuan = {
    nombre: "Juan",
    apellidos: "Perez",
    edad: 16,
};
const mostrarEmpleado = (empleado) => {
    console.log(`El empleado ${empleado.nombre} ${empleado.apellidos} tiene ${empleado.edad} años`);
};
// mostrarEmpleado(empleadoJuan);
const datosEmpleado = (empleado) => {
    if (empleado.edad > 18) {
        return `El empleado ${empleado.nombre} ${empleado.apellidos} es mayor de edad`;
    }
    else {
        return `El empleado ${empleado.nombre} ${empleado.apellidos} es menor de edad`;
    }
};
// console.log(datosEmpleado(empleadoJuan));
const obtenerSalario = (empleado, cobrar) => {
    if (empleado.edad > 18) {
        return cobrar();
    }
    else {
        return "No se puede cobrar";
    }
};
const cobrarEmpleado = (empleado) => {
    return `El empleado ${empleado.nombre} ${empleado.apellidos} ha cobrado`;
};
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
    while (index < 5) {
        yield index++;
    }
}
// Guardamos la funcion generadora en una variable
let generadora = ejemploGenerator();
// Accedemos a los valores emitidos
// console.log(generadora.next().value);
// Worker
function* watcher(valor) {
    yield valor; // valor unicial
    yield* worker(valor); // valor incrementado
    yield valor + 4;
}
function* worker(valor) {
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
function mostrarError(error) {
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
    empezar() {
        setTimeout(() => {
            if (!this.terminar)
                return;
            //cuando haya pasado el tiempo, sejecutará la funcion terminar
            this.terminar(Date.now());
        }, 5000);
    }
}
const minTemporizador = new Temporizador();
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
    empezar() {
        setTimeout(() => {
            //cuando haya pasado el tiempo, sejecutará la funcion terminar
            this.dispatchEvent(new Event("terminar"));
        }, 5000);
    }
}
const minTemporizador2 = new Temporizador2();
/**
 * CLASES EN TYPESCRIPT
 */
// usamos el mock
const listaCursos = cursos_mock_1.LISTA_CURSOS;
// Creamos un nuevo estudiante
const juan = new Estudiante_1.Estudiante("Juan", "Perez", 20, listaCursos);
const profeCesar = new Profesor_1.Profesor("Cesar Acjota", listaCursos.filter(curso => curso.nombre === "Angular"));
const cursoAngular = new Curso_1.Curso("Angular", 30);
// juan.cursos.push(cursoAngular);
// console.log(juan.mostrarDatos());
// console.log(juan.horasEstudiadas);
// console.log(profeCesar.nombre + " y enseña el curso de " + profeCesar.cursosImpartidos);
if (juan instanceof Estudiante_1.Estudiante) {
    console.log("Es un estudiante");
}
/**
 * HERENCIA Y POLIMORFISMO EN TS
 */
let empleado1 = new Persona_1.Trabajador("Juan", "Perez", 20, 1000);
let empleado2 = new Persona_1.Trabajador("Pepe", "Florez", 20, 3000);
let jefe1 = new Persona_1.Jefe("Cesar", "Acosta", 30);
jefe1.trabajadores.push(empleado1, empleado2);
// empleado1.saludar();
// jefe1.saludar();
jefe1.trabajadores.forEach((trabajador) => {
    trabajador.saludar();
});
//  Uso de interfaces
let programar = {
    titulo: "Programar",
    descripcion: "Programar en Angular",
    completado: false,
    urgencia: ITarea_1.Nivel.AVANZADO,
    resumen: function () {
        return `${this.titulo} - ${this.completado} - Nivel: ${this.urgencia}`;
    }
};
// console.log(programar.resumen());
//  tarea de programacion (implementa de tarea)
let programarTS = new Programar_1.Programar("Programar en TS", "Programar en Angular", false, ITarea_1.Nivel.AVANZADO);
// console.log(programarTS.resumen());
/**
 * DECORADORES
 */
// Decoradores experimentares --> @
// -Clases
// -Parametros
// - Metodos
// - Propiedades
function Override(label) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            get: function () {
                return label;
            }
        });
    };
}
class PruebaDecorador {
    constructor() {
        this.nombre = "Juan";
    }
}
__decorate([
    Override('prueba') // llamar a la funcion Override
    ,
    __metadata("design:type", String)
], PruebaDecorador.prototype, "nombre", void 0);
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
const miPrimeSingelton = Singelton_1.Singelton.getInstance();
const miSegundoSingelton = Singelton_1.Singelton.getInstance();
if (miPrimeSingelton === miSegundoSingelton) {
    console.log("Son la misma instancia");
    miPrimeSingelton.doSomething();
}
else {
    console.log("Son diferentes instancias");
}
//# sourceMappingURL=index.js.map