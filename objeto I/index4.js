const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{nome:"Nike"}, {nome:"Adidas"}],
    secret: 123456,
    n: 3,
    link: {a: "a", b: {c: "C"}},
};

const {tamanho, estoque, marcas = "Não temos essa marca no momento"} = Tenis; 

console.log(tamanho, estoque, marcas);


// const {secret: randoNumber, n: avaliacoes} = Tenis;
// console.log(secret);
// console.log(randoNumber);
// console.log(avaliacoes);


const {
    link: {
        a,
        b: { c },
    },
} = Tenis;

console.log(a, c);


//hasOwnProperty | PropertyName in Tenis
// tem essas duas maneiras de fazer o user property

// if(Tenis.hasOwnProperty("tamanho")){
//  console.log("Existe Tenis");
// } else {
//   console.log("Não Existe Tamanho!");
// }


console.log(Tenis.hasOwnProperty("tamanho"));
console.log("teste" in Tenis);
