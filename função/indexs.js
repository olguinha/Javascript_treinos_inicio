/*O strict mode elima alguns erros selenciosos que passariam batido do JavaScript
e os faz emitir erros.

Além disso, essa forma corrige alguns erros que tornam que o JavaScript
dificil de ser otimizado, então algumas vezes os códigos no modo estrito
rodam mais otimizados e velozes do que os códigos no 'modal normal'


*/

"use sctrict";
var arguments;

(() => {
 teste  = "teste";

})();

console.log(teste);