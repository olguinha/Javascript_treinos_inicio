// este primeiro é uma exemplo de function

function nomeFuncao() {
    return "hello world!";
}
console.log(nomeFuncao());

// este segundo é uma exemplo de arrow function

const nomefuc = () => {
    return "hello world!";
}
console.log(nomefuc());


// este terceiro é uma exemplo de arrow function reduzida

const nomefucreturn  = () =>"hello world!";
console.log(nomefucreturn());

//agora um exemplo com hoisting

const nomefucreturnhosting = () => {
    return "hello world!";
}
console.log(nomefucreturnhosting());


//agora um exemplo com argunments

function nomefuncArguments() {
    return arguments;
}
console.log(nomefuncArguments("Olga de Oliveira"));


// params podem ser colocados com parentes ou sem parenteses, mas não pode colocar "," pois assim não consederam um params

const nomeFunctionArrowParams = (param) => param;


// Arrow function não podem ser invocadas com New

// function novafunc() {
//     return 123; 
// }
// new  novafunc();

// const novafuncArrow = () => {
//     return console.log(123);
// }

// class newfunction {
//     constructor(nome){
//         this.nome = nome
//     }
// }

// const a = newfunction("Olga de Oliveira");
// console.log(a.nome);


// Arrow functions possuem dois tipos de chamadas this.lexico e this.dinamico

const lanches = {
    cardapio: [
        { nome: "x-salada", preco: "R$ 25" },
        { nome: "x-bacon", preco: "R$ 30" }
    ],

    // ✅ Função normal — this se refere corretamente ao objeto "lanches"
    meuPedidoFunc(select) {
        console.log("👉 meuPedidoFunc:");
        console.log(this.cardapio[select]);
    },

    // ✅ setTimeout com arrow function — this continua sendo o objeto "lanches"
    meuPedidoFuncTimeOut() {
        console.log("⏳ Aguardando 1 segundo...");
        setTimeout(() => {
            console.log("👉 meuPedidoFuncTimeOut:");
            console.log(this.cardapio);
            console.log(this);
        }, 1000);
    },

    // 🚫 Arrow function — this NÃO é o objeto "lanches"
    // (mostramos só pra você ver a diferença)
    meuPedidoArrowFunc: (select) => {
        console.log("👉 meuPedidoArrowFunc (arrow function):");
        console.log("this =", this);
        console.log(this?.cardapio?.[select]); // provavelmente undefined
    }
};

// Testes:
lanches.meuPedidoFunc(1);       // ✅ mostra o segundo lanche (x-bacon)
lanches.meuPedidoArrowFunc(1);  // 🚫 this é undefined ou window
lanches.meuPedidoFuncTimeOut(); // ✅ funciona após 1 segundo
