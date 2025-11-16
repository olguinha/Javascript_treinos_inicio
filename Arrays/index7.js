const myArray = [10, 20, 30, 40, 50];
const myArrayobj = [
    {nome: "Olga", sobrenome: "Silva"},
    {nome: "Ana", sobrenome: "Souza"},
    {nome: "Maria", sobrenome: "Oliveira"},
];


//for ([inicialização]}; [condição]; [expressão final])



// for (let i = 0; i < myArray.length; i++){
//     console.log(myArrayobj[i].nome, myArrayobj[i].sobrenome);
// }


// //for Of 
// for (let item of myArrayobj){
//     console.log(item);
// }

//for in
const obj = {
    nome: "Olga",
    sobrenome: "Silva",
};

for(let item in myArrayobj) {
    console.log(item);
}

