let tenis = {
    cardaco: "G",
    Tipo: "Tenis de Corrida",
    estoque: "false",
    tamanho: {
        palmilha: 20,
        tenis: 40,
        caixa: {
            largura: 23,
            profudidade: 45,
            altura: 46
        },
    },

    marcaArrayValores: ["boots", "adidas", "nike"],

    marcaArrayobj:[
        {
            nome: "boots"
        },
        {
            nome: "boots"
        },
        {
            nome: "boots"
        },
    ],

    getMarcaArrayValores: function (param) {
        return this.marcaArrayobj[param].nome;
    },

    getMarcaArrayobj: function (param) {
        return this.marcaArrayobj[param].nome;
    },

};

console.log(tenis);
console.log(tenis.Tipo);
console.log(tenis.tamanho);