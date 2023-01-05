var aluno = {
  matricula: 1234,
  nome: "Marcos",
  telefone: 910429014289,
  cidade: "Barra do piraí",
};
var aluno1 = {
  matricula: 1235,
  nome: "joao",
  telefone: 910429014289,
  cidade: "Barra do piraí",
};
var aluno2 = {
  matricula: 1236,
  nome: "jose",
  telefone: 910429014289,
  cidade: "Barra do piraí",
};
// var { matricula, nome } = aluno; //dessa maneira faço mostrar o que quero

// console.log(matricula);
// console.log(nome);

// const { matricula, nome, ...resto } = aluno; //dessa maneira eu tiro matricula e nome da copia do array e fico com o resto que sobrou

// console.log(resto);

//com arrays

var alunos = [aluno, aluno1, aluno2];

var [aluno, ...outros] = alunos; //dessa forma separo o primeiro aluno e junto os outros dois so que com arrays

console.log(aluno);

console.log(outros);
