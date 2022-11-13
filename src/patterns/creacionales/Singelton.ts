export class Singelton {
    private static instance: Singelton;

    private constructor() { }

    public static getInstance(): Singelton {
        if (!Singelton.instance) {
            Singelton.instance = new Singelton(); // se crea la unica instancia compartida a nivel de aplicacion
        }
        return Singelton.instance;
    }
    
    public doSomething(): void {
        console.log('Hello World!');
    }
}