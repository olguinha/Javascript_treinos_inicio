const myArrayobj = [
    {
      nome: "Olga",
      sobrenome: "Silva"
    },
    {
      nome: "Ana",
      sobrenome: "Souza"
    },
    {
     nome: "Maria",
     sobrenome: "Oliveira"
    },
];

 myArrayobj.forEach(item, index => {
    if (item.nome === "Ana"){
       return console.log("O mozão ta te esperando!");
    }
    console.log(index, item.nome);
 });