// const stringArray = ["A", "N", "y", "P", "F", "E"];
// console.log(stringArray.sort());
// console.log(stringArray.reserve());


const numberArray =[1, 5, 3, 6, 3000, 5, 7 , 7654, 646, 0, 3, 345, 2084, 729, 89,];
console.log(numberArray.sort((a,b) => a - b));
// console.log(numberArray.sort((a,b) => b - a));
// console.log(numberArray.sort((a,b) => a - b).reserve());


const objetcArray = [
    {name: "John tette", },
     {name: "ana hgyhd", },
      {name: "pedro yehbfe"},
];


console.log(objetcArray.sort((a, b) => a.nome.localeCompare(b.nome)));
