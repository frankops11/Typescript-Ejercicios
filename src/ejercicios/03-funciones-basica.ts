/*
    ===== Código de TypeScript =====
*/
function sumar(a:number, b:number):number {
 return a+b;   
}

const sumarFlecha = (x:number, y:number):number=>{
    return x+y;
}

const resultado = sumar(4,5);
const resultado2 = sumarFlecha(5,5);
console.log(resultado);
console.log(resultado2);


/**
 * 
 * @param numero Es significa que es obligatorio 
 * @param otro? Esto significa que es opcional 
 * @param base=2 Esto significa que es un param x defecto   
 */


function multiplicar(numero:number, otro?:number, base:number=2) {
    return numero*base;
}


const r = multiplicar(10);
console.log(r);