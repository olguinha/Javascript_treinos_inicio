(function(num1, num2){ // Aqui é uma function, Feito no IIFE 
    const calc = num1 + num2;
    console.log(calc);
    console.log("Olga de Oliveira")
})(1 , 2);

(() => { // Uma ArrowFunction em IIFE, mas trazendo um o conceito de escopo
    var teste = "teste2";
    console.log(teste);
})();






