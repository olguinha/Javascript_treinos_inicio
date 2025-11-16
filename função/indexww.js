// function Name(nome, sobrenome){
//     this.name = nome;


//     this.sobreNome = () => {
//         const nomecompleto = `${this.name} ${sobrenome}`;
//         return this.nomecompleto;
//     }
// }

// const deneer  = new Name("Olga","Oliveira");

// console.log(deneer.sobreNome()); 
// // chamando a função 
// junto com o objeto constructor é possivel visulizar o que tem dentro 


function Calculadora(num1, num2){
    this.soma = () => {
        return `${num1 + num2}`;
    };

     this.subtracao = () => {
        return `${num1 - num2}`;
    };
}

const calculadora = new Calculadora(1 , 4); // pode passar dentro do parametro e também fora, no caso seria dentro do console no "()"
console.log(calculadora.soma());
console.log(calculadora.subtracao());

