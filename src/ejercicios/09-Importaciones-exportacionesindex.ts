import { Producto, calcularISV3 } from './08-Desestructuracion-argumentos';
/*
    ===== Código de TypeScript =====
*/
const carritoCompras: Producto[] = [
    {
        desc: "Telefono 1",
        precio: 100
    },
    {
        desc: "Telefono 2",
        precio: 100
    },
    {
        desc: "Telefono 3",
        precio: 100
    }
];

const [ total, isv ] = calcularISV3(carritoCompras);
console.log("Total: ", total);
console.log("ISV: ", isv);
console.log("Total + ISV: ", total+isv);