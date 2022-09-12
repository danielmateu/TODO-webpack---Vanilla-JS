export class Todo{
    constructor(tarea){
        this.tarea = tarea;

        this.id = new Date().getTime(); //123456987
        this.completado = false; //false
        this.creado = new Date();
    }
}