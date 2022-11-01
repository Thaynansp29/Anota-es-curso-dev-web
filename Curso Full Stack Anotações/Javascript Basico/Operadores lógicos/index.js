// && e
// || ou
// ! Negativo

var idade = 35;

var maior20 = idade > 20;
var menor30 = idade < 30;

var entre = maior20 && menor30;

console.log("Idade", idade);
console.log("Maior que vinte", maior20);
console.log("Menor que trinta", menor30);
console.log("Entre 20 e 30", entre);

var idade2 = 20;

var maior65 = idade >= 65;
var menor10 = idade <= 10;

var gratuidade = maior65 || menor10;

console.log("Idade", idade2);
console.log("Maior que vinte", maior65);
console.log("Menor que trinta", menor10);
console.log("Entre 20 e 30", gratuidade);

var idade = 35;

var maior20 = idade >= 20;
var menor20 = !maior20;

console.log("Maior que vinte", maior20);
console.log("Menor que vinte", menor30);
