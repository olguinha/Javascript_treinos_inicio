// o que é uma função?
 // É um conjunto de instruções que executa uma tarefa ou calacula um valor.


 // function declaration

 function novafunc(){
    const soma = 2 + 5;

    if (soma === 4){
        return true;
    }

    return false;
 }

 console.log(novafunc());

 // functions expression

 const isvalidexpression = function(){
    return false;
 }

 // arrow functions

 const arrowfunction = () => {
    const soma = 2 + 2;
    return soma 
 };

 console.log(arrowfunction());
