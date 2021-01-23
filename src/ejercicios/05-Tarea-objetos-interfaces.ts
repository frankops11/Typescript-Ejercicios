/*
    ===== Código de TypeScript =====
*/

interface SuperHero{
    nombre: string,
    edad: number,
    direccion: Direccion
    mostrarDireccion:()=>string
}
interface Direccion{
    calle: string,
    pais:string,
    ciudad:string
}

const superHeroe:SuperHero = {
    nombre: "Thor",
    edad: 30,
    direccion: {
        calle: "Main St",
        pais: "USA",
        ciudad: "NY"
    },
    mostrarDireccion() {
        return `${this.nombre} - ${this.direccion.ciudad} - ${this.direccion.pais}`
    }
}

const dir = superHeroe.mostrarDireccion();
console.log(dir);
