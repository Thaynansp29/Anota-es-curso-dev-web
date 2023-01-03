var interval;
var numero = 0;
function atualizartexto() {
  let h = document.getElementsByTagName("h1")[1];
  h.innerHTML += " " + numero;
  numero++;
}

function iniciar() {
  interval = setInterval(atualizartexto, 1000);
}

function parar() {
  clearInterval(interval);
}
