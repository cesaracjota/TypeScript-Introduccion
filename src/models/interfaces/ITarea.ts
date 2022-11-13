export enum Nivel {
    PRINCIPIANTE = "Principiante",
    INTERMEDIO = "Intermedio",
    AVANZADO = "Avanzado"
}

//  Interface sirve para definir la firma y los puntos necesarios a implementar por quien la use

export interface ITarea {
    titulo:string;
    descripcion?:string;
    completado:boolean;
    urgencia?:Nivel;
    resumen: () => string;
}