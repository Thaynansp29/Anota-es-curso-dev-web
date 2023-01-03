let pessoas = [
  "Igor",
  "José",
  "Marcos",
  "Pamela",
  "Joana",
  "Estefane",
  "Thaynan",
];
function sortear1() {
  let np = pessoas.length;
  let ns = Math.floor(Math.random() * np);

  document.getElementById("e").innerHTML = pessoas[ns];
}
