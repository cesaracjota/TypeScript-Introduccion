console.log("hola")

let lista = ["uno", "dos", "tres"]
lista.foreach({_} => console.log);

console.clear();

console.assert(1 === 2, "1 no es igual a 2");

console.info("Hola");
console.warn("Hola");
console.error("Error");

console.countReset("contador");

//  console trace 

function funcion1() {
    funcion2();
}

function funcion2() {
    funcion3();
}

function funcion3() {
    console.trace();
}

funcion1();

let usuario = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    trabajadores: {
        nombre: "Pedro",
        apellido: "Perez",
        edad: 25,
    }
}

console.dir(usuario);

console.group("Grupo 1");
console.table(usuario);

console.time("tiempo");
console.timeEnd("tiempo");