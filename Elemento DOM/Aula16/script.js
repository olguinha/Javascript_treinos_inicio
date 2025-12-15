"use strict";


const h1 = document.querySelector("h1");
const p = document.querySelector("p");

console.log(h1.nextSibling); // ele pega o proprio elemento
console.log(h1.nextElementSibling);// pega o proximo elemento irmão dele.

console.log(p.previousSibling);//

console.log(p.previousElementSibling); //ele pega o elemento anterior, ele pega de tudo como elemento, texto, espaçamento