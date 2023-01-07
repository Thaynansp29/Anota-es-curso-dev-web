document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});
function init() {
  changeColor();
}
function changeColor() {
  var cor = document.querySelector("input").value;
  document.getElementsByClassName("square").style.backgroundColor = cor;
}

init();
function handleClick(event) {
  let square = event.target;
  let postion = square.id;

  if (handleMove(postion)) {
    setTimeout(() => {
      alert("O Jogo Acabou - O Vencedor foi o jogador de numero " + playerTime);
    }, 300);
  }
  updateSquares();
}
function updateSquares() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    let postion = square.id;
    let symbol = board[postion];
    if (symbol != "") {
      square.innerHTML = `<div class='${symbol}'></div>`;
    }
  });
}
