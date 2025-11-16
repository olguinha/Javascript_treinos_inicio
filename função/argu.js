

// function soma(num1, num2) {
//     if (typeof num1 === "number" && typeof num2 === "number") {
//         return num1 + num2;
//     }

//     return "Os valores são doferentes"
    
   
// }

//  console.log(soma(soma(1 , 4), soma(1 , 4)));


// function subtracao (){
//     return arguments;
// }

// console.log(subtracao(1, 2, 3, "abc"));

const subtracao = (num1 = null , num2 = 0) => {
    return num1 - num2;
}

 console.log (subtracao(1, 2));