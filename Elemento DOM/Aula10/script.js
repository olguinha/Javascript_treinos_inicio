"use strict";

const ul = document.querySelector("ul");
const fragment = document.createDocumentFragment();

const lanches = ["lanches1", "lanches2", "lanches3", "lanches4"];

lanches.forEach(element => {
    const li = document .createElement("li");
    li.textContent = element;
   fragment.append(li);

});

console.log(fragment);
ulappend(fragment);