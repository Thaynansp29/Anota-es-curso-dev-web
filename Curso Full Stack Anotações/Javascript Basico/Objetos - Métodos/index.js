function calcMedia() {
  return (this.notas[0] + this.notas[1] + this.trabalho[0]) / 2;
}

var aluno = {
  nome: "Igor",
  notas: [9, 5],
  trabalho: [2],
  media: calcMedia,
};
var aluno1 = {
  nome: "Joao",
  notas: [4, 7],
  trabalho: [0],
  media: calcMedia,
};

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());
