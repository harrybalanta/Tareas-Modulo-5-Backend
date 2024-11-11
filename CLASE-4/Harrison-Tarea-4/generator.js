import * as fs from "fs";
const createFile = () => {
    let suma = 1;
    for (let i = 1; i <= 1000; i++) {
        suma += i + ' ';
    }

    fs.writeFile('./numeros.txt', suma, (error) => {
        if (error) {
            console.error('Error:', error);
            return;
        }
        console.log('Archivo numeros.txt generado');
    });
};

fs.readFile('./numeros.txt', { encoding: 'utf-8' }, (error, data) => {
    if (error) {
        createFile();
        return;
    }
    console.log(data);
});





