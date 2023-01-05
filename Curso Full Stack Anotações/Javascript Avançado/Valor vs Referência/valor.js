//array

let notaA = [7.5, 2.0, 5.0];

let notaB = [...notaA]; //copiando o array sem modificando a primeira nota

notaB.push(8.0);

console.log(`a nota A tem seguintes valores ${notaA}`);
console.log(`a nota B tem seguintes valores ${notaB}`);

//objeto

let alunoA = { nome: "Igor", idade: 15 };

let alunoB = { ...alunoA }; //copiando o objeto sem modoficar o alunoA

alunoB.idade = 25;

console.log(alunoA);
console.log(alunoB);
