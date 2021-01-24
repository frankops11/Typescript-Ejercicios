/*
    ===== Código de TypeScript =====
*/

//Encadenamiento opcional


interface Pasajero{
    nombre: string,
    hijos?: string[]
}

const pasajero1:Pasajero =  {
    nombre: "Francisco"
}


const pasajero2:Pasajero = {
    nombre: "Maria",
    hijos: ['Natalia', 'Gabriel']
}

function imprimerHijo(pasajero:Pasajero):void {
    const numerosHijos = pasajero.hijos?.length || 0;
    console.log('Tiene', numerosHijos , "hijos");
}

imprimerHijo(pasajero1);