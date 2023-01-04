function novoAluno(nome, idade) {
  return { nome, idade };
}

let alunos = [
  novoAluno("Mario", 25),
  novoAluno("Fernanda", 35),
  novoAluno("Thaynan", 42),
  novoAluno("Estefane", 33),
];

let jogadores = [
  novoAluno("Ester", 12),
  novoAluno("Danrley", 72),
  novoAluno("Ivone", 23),
  novoAluno("Estela", 82),
];

function temMenosde30(MERDA) {
  return MERDA.idade < 30;
}

function temMaisde30(MERDA) {
  return MERDA.idade > 30;
}

console.log(alunos.filter(temMaisde30));
