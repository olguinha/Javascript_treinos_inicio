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

/*É bacana entender que, se voce tem uma condição, ela vai tratar toda seu array
assim podemos verificar se eles estão ok  */

const temRefri = pedidos.every((element) => {
    return element.bebida === "Refrigerante";
});

console.log(temRefri);
