"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singelton = void 0;
class Singelton {
    constructor() { }
    static getInstance() {
        if (!Singelton.instance) {
            Singelton.instance = new Singelton(); // se crea la unica instancia compartida a nivel de aplicacion
        }
        return Singelton.instance;
    }
    doSomething() {
        console.log('Hello World!');
    }
}
exports.Singelton = Singelton;
//# sourceMappingURL=Singelton.js.map