/*
    ===== Código de TypeScript =====
*/

class Persona{
    //public nombre: string;
    //protected apellido: string;
    //private edad: number;
    //static poder: string;

    constructor(
        public nombre:string, 
        public apellido:string, 
        public edad:number
    ){}

}

class Hero extends Persona{
    public alterEgo:string;
    constructor(_alterEgo:string) {
        super('Tony', 'Stark', 34);
        this.alterEgo = _alterEgo;
    }
}

const spd = new Hero('Ironman');
console.log(spd);


