
const myArrayobj = [
    {nome: "Olga", sobrenome: "Silva"},
    {nome: "Ana", sobrenome: "Souza"},
    {nome: "Maria 0", sobrenome: "Oliveira"},
    {nome: "Ana", sobrenome: "Souza"},
    {nome: "Maria 1", sobrenome: "Oliveira"},
    {nome: "Maria 2", sobrenome: "Oliveira"},
    {nome: "Maria 3", sobrenome: "Oliveira"},
];

for(let item of myArrayobj) {
    if (item.nome === "Nay"){
     console.log("Achei Nay!");
     continue;
    } 

    if (item.nome === "maria 0"){
     console.log("Lembrar de enviar um SMS");
     break;
    }

    console.log(item);
 }

 

