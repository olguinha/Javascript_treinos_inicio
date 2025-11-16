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
        alimento:"Coxinha",
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
        alimento:"Coxinha",
        bebida:"Suco de manga",
    },
];

/*Como o nome já diz, esse método deve ser utilizado quando 
temos a necessidade de filtrar nossa */

const filterRefri = pedidos.filter((element, index) => {
    return element.bebida === "Refrigerante";
});

console.log(1, filterRefri);
console.log(2, pedidos);