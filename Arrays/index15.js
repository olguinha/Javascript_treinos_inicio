const pedidos = [
    {
        id: 234,
        nome:"Olga",
        alimento:"Pizza",
        bebida:"Refrigerante",
        preco: 45,
    },
    {
        id: 345,
        nome:"Maria",
        alimento:"Coxinha",
        bebida:"Suco de uva",
        preco: 67,
    },
    {
        id: 678,
        nome:"João",
        alimento:"Manga",
        bebida:"Refrigerante",
        preco: 23,
    },
    {
        id: 590,
        nome:"Isadora",
        alimento:"Coxinha",
        bebida:"Suco de manga",
        preco: 20,
    },
];

/* A ideia dele é pegar todos os valores um Array e condensá-los em um só  */

const balancete = pedidos.reduce((total, element) =>{
   return total + element.preco;
}, 0);

console.log(balancete);