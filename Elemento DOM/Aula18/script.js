"use script";

const container = document.querySelector(".container");
const paragrafo = container.querySelector(".paragrafo");
const h1 = container.querySelector("h1");

const newH2 = document.createElement("h2");
newH2.innerHTML = "Novo H2";

container.insertBefore(newH2, h1); //insertBefore insere antes do document 