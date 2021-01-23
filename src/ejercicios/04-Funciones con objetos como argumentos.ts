/*
    ===== Código de TypeScript =====
*/

interface PersonajeX {
    nombre: string,
    pv: number,
    mostrarPV: () => void;
}

function curar(personaje: PersonajeX, curarX): void {
    personaje.pv += curarX;
}


const nuevoPersonaje: PersonajeX = {
    nombre: "Sisco",
    pv: 50,
    mostrarPV() {
        console.log('Puntos de vida', this.pv);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarPV();