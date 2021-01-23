/*
    ===== Código de TypeScript =====
*/
let habilidad: string[] = ['Hola'];
let habilidades:(boolean | number | string)[] = ['Bash', 'Counter', 'Healing', 10, true];
habilidades.push(...habilidades);
console.log(habilidades);


interface Personaje {
    nombre:string,
    hp: number,
    habilidades: string[],
    color?:string
}


const hulk: Personaje ={
    nombre: "Banner",
    hp: 5000,
    habilidades: ['Smash']
}

hulk.color = "Green";


console.table(hulk);