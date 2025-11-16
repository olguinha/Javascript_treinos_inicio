const pedidos = [
    {
        id: 234,
        nome:"Olga",
        alimento:"Pizza",
        bebida:"Refrigerante",
    },
    {
        id: 345,
        nome:"Maria",
        alimento:"ototo",
        bebida:"Suco de uva",
    },
    {
        id: 678,
        nome:"João",
        alimento:"Manga",
        bebida:"Refrigerante",
    },
    {
        id: 590,
        nome:"Isadora",
        alimento:"rty3",
        bebida:"Suco de manga",
    },
];

/* O some pergunta se apenas 1 dos valores da array equivale a sua condição */


// Retorne true se houver pelo menos um pedido de Coxinha
const temCoxinha = pedidos.some((element) => {
    return element.alimento === "Coxinha";
});
console.log(temCoxinha); 