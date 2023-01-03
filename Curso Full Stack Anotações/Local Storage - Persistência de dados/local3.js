let a = {
  nome: "Igor",
  n1: 7.3,
};

localStorage.setItem("aluno", JSON.stringify(a));
let b = localStorage.getItem("aluno");

let c = console.log(JSON.parse(b));
