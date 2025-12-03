"use strict";

const h1 = document.querySelector("h1");

h1.style.fontFamily = "Arial, sans-serif";
h1style.color ="pink";
h1style.textAlign = "center";
h1.style.textDecoration = "underline";

const p = document.querySelector("p");

p.forEach(element => {
    elememnt.style.fontFamily = "Arial, sans-serif";
     elememnt.style.color = "blue";
      elememnt.style.backgroundcolor = "white";
});


/// aqui vai ficar os estudos para o desenvolvimento da CLASSLIST

const h1 = document.querySelector("h1");
h1.classList.add("active");
h1.classList.remove("active");
h1.classList.toggle("active");
h1.classList.contains("active");

if(h1.classList.contains("active")){
    alert("Existe a classe active no h1");
}

console.log(h1.classList.contains("active"));
console.log(h1);


///aqui vai ficar a parte dos essinamentos de CLASSNAME

const h1 = document.querySelector("h1");
console.log(h1.className);