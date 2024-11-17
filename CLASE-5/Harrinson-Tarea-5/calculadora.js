
const args = process.argv.slice(2); 

const [num1, operation, num2] = args;
const number1 = parseFloat(num1);
const number2 = parseFloat(num2);

if (isNaN(number1) || isNaN(number2)) {
    console.error("se deben ingresa solo numeros");
  }
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}
function calculadora(a, operacion, b) {
    switch (operacion) {
        case '+':
            return suma(a, b);
        case '-':
            return resta(a, b);
        case '*':
            return multiplicacion(a, b);
        
        default:
            console.error("operacion invalida");
       
    }
}


const result = calculadora(number1, operation, number2);
console.log(`Resultado: ${result}`);

