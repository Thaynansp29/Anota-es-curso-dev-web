var timer;

function mudarcor() {
  let h = document.getElementsByTagName("h1")[0];
  h.style.color = "green";
}

function mudartexto() {
  let h = document.getElementsByTagName("h1")[0];
  h.innerHTML = "Novo titulo";

  timer = setTimeout(mudarcor, 1000);
}
function voltar() {
  clearTimeout(timer);
}
