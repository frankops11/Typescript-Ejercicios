/*
    ===== Código de TypeScript =====
*/
export interface Producto {
    desc: string,
    precio: number
}

const laptop: Producto = {
    desc: "Laptop",
    precio: 100,
}

const celular: Producto = {
    desc: "S10",
    precio: 500
}

//Funcion tradicional
function calcularISV(productos: Producto[]): number {
    let total = 0;
    productos.forEach((producto) => {
        total += producto.precio;
    });
    return total * 0.15;
}

//Funcion tradicional - aplicando desestructuración de argumentos
function calcularISV2(productos: Producto[]): number {
    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio;
    });
    return total * 0.15;
}

//Funcion tradicional - aplicando desestructuración de argumentos y retornando un array
export function calcularISV3(productos: Producto[]): [number, number] {
    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio;
    });
    return [total, total * 0.15];
}

const articulos = [ laptop, celular ];

const isv = calcularISV(articulos);
const isv2 = calcularISV2(articulos);
const [total, impuesto] = calcularISV3(articulos);

console.log("isv: ", isv);
console.log("isv2: ", isv2);
console.log("isv3 total: ", total);
console.log("isv3: isv", impuesto);