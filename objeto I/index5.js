const Tenis = {
    tamanho: 45,
    estoque: true,
};


Tenis.tamanho = 42;
Tenis.estoque = false;
// Tenis.preco = "R$ 234"
Tenis["preco"] = "R$ 234";

console.log(Tenis);
console.log(Tenis["tamanho"]);
