// verificando o IMC (Índice de Massa Corporal)

const peso = 75;
const altura = 1.53;
const imc = Number((peso / (altura * altura)).toFixed(2));

switch (true) {
    case imc < 17:
        console.log("Peso muito baixo do ideal!");
    break;

    case imc >= 17 && imc <= 18.49:
        console.log("Peso abaixo do ideal!");
    break;
    case imc >=18.5 && imc <= 24.99:
        console.log("Peso ideial!");
    break;
    case imc >= 25 && imc <= 29.99:
        console.log("sobrepeso!");
    break;
    case imc >= 30 && imc <= 34.99:
        console.log("Obesidade I!");
    break;
    case imc >= 35 && imc <= 39.99:
        console.log("Obesidade II (severa)!");
    break;
    }

console.log(imc);