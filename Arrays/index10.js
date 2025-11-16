const pedidos = [
    {
        id: 234,
        nome:"Olga",
        alimento:"Pizza",
        bebida:"Suco de Laranja",
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
        bebida:"Coca-cola",
    },
    {
        id: 590,
        nome:"Isadora",
        alimento:"Coxinha",
        bebida:"Suco de manga",
    },
];
/*O método Map além de iterar todo o array ele é muito bom 
para editar o iterado (resumindo os dados do array)*/

pedidos.map((element, index) =>{
   if (element.id === 590 && element.alimento === "Coxinha"){
    return (element.alimento = "Brigadeiro");
   }
});

console.log(pedidos);