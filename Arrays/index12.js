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

/*Nome bem subjetivo também, mas ele procura e te returna 1 o primeiro*/

const findId = pedidos.find((element) => {
    return element.bebida === "Refrigerante";
});

console.log(findId);