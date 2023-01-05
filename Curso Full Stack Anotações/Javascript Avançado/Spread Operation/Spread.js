// com objeto
var pessoa = {
  name: "José Silva",
  idade: 32,
};

var contato = {
  telefone: 98765432,
  email: "josedasilva@hotmail.com",
};

var copia = { ...pessoa, cidade: "Rio de janeiro" }; //da para adicionar algum dado
var copia2 = { ...pessoa, ...contato }; // da para juntar os dois objetos completos independente de quantas propriedade ele tenha
// com array

var notas_turma1 = [10, 8, 4, 3];

var notas_turma2 = [4, 5, 4, 6];

var todas_notas = [...notas_turma1, ...notas_turma2];

console.log(todas_notas);
