/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}

interface Detalles{
    autor:string,
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 60,
    cancion: "Before you go",
    detalles: {
        autor: 'Lewis Capaldi',
        anio:2021
    }
}

const autor = "Juanito"
const { volumen:vol, segundo, cancion, detalles: { autor: aut }} = reproductor;
// const { autor } = detalles;

console.log('El volumen actual es de: ', vol);
console.log('El segundo actual es: ', segundo);
console.log('La canción es: ', cancion);
console.log('El autor es: ', aut);