"use strict";


const p = document.getElementById("paragrafo");

console.log(p);

const c = document.getElementsByClassName("paragrafo");
console.log(c);


for (let element of p){
  console.log(element);
}