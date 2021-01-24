/*
    ===== Código de TypeScript =====
    Un decorador es un simple funcion que agrega y extiende  funcionalidades a una en particular
*/
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      propiedad1 = "new property";
      propiedad2 = "override";
    };
  }
  


@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}


console.log( MiSuperClase );

const miClase = new MiSuperClase();