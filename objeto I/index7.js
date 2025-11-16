const Tenis = {
  tamanho: 45,
  estoque: true,
};

let link = { a: "a", b: { c: "C" } };

let clone1 = JSON.parse(JSON.stringify(Tenis));

console.log(1, clone1);
console.log(2, Tenis);

let mescla1 = Object.assign({}, JSON.parse(JSON.stringify(Tenis)));
let mescla2 = Object.assign({}, JSON.parse(JSON.stringify(Tenis)));

clone1.estoque = false;
mescla1.link = "ABC";

console.log(1, clone1);
console.log(2, mescla2);
console.log(3, mescla1);
console.log(4, Tenis);
