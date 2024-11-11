import fs from 'fs';
fs.readFile('./numeros.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('Error al leer el archivo:', error);
        return;
    }
    const numbers = data.split('\n').map(number => (number));

    const findevenNumbers = numbers.filter(numero => numero % 2 === 0);


    console.log('Números pares:', findevenNumbers.join(' '));
});