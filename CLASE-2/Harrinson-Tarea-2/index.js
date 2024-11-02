// index.js
import Chance from 'chance';
    
const chance = new Chance();

// Generar datos aleatorios
const nombre = chance.name();
const correo = chance.email();
const fechaNacimiento = chance.birthday();
const telefono = chance.phone();

// Imprimir los datos aleatorios generados
console.log("Datos aleatorios generados:");
console.log("Nombretarea2:", nombre);
console.log("Correo electrónico:", correo);
console.log("Fecha de nacimiento:", fechaNacimiento.toLocaleDateString());
console.log("Teléfono:", telefono);

// utilizando dependencias
const twitter = chance.twitter();
// impresion

console.log("utilizando twitter",twitter )

// usage
const naturales1 =chance.natural();
const naturales2 = chance.natural({ min: 1, max: 20 });
// impresion
console.log("impresion numeros naturales", naturales1,);
console.log("impresion numeros naturales", naturales2,);

// cc
const cc1 = chance.cc();
const cc2 = chance.cc({type: 'Mastercard'});
// impresion
console.log("impresion cc", cc1);
console.log("impresion cc", cc2);
// animal
const animal1 = chance.animal();
const animal2 = chance.animal({type: 'zoo'});

// impresion
console.log("impresion de animal1", animal1);
console.log("impresion  de animal2", animal2);