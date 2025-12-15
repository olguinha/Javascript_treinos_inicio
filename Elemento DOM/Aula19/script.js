"use script";

const container = document.querySelector(".container");

const newP = document.createElement("p");
container.innerHTML = "Olá, Dener";
container.after("olá, olga");

container.after(newP); // vem depois do container
container.before(newP); //vem antes do container ou de qualquer outra tag