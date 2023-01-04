//Criação de promise
const mypromise = new Promise((resolve, reject) => {
  const nome = "matheus";

  if (nome === "matheus") {
    resolve("Usuario matheus encontrado!");
  } else {
    reject("O usuario nao foi encontrado!");
  }
});

mypromise.then((data) => {
  console.log(data);
});
// Retorno do catch

const mypromise2 = new Promise((resolve, reject) => {
  const nome = "joao";

  if (nome === "matheus") {
    resolve("Usuario matheus encontrado!");
  } else {
    reject("O usuario nao foi encontrado!");
  }
});

mypromise2
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Aconteceu um erro: " + err);
  });
// Resolver varias promessas com all

const p1 = new Promise((resolve, reject) => {
  resolve("p1 ok");
});
const p2 = new Promise((resolve, reject) => {
  resolve("p2 ok");
});
const p3 = new Promise((resolve, reject) => {
  resolve("p3 ok");
});

const resolveall = Promise.all([p1, p2, p3]).then((data) => {
  console.log(data);
});

//Varias promessas com race

const p4 = new Promise((resolve, reject) => {
  resolve("p4 ok");
});
const p5 = new Promise((resolve, reject) => {
  resolve("p5 ok");
});
const p6 = new Promise((resolve, reject) => {
  resolve("p6 ok");
});
const resolveallrace = Promise.race([p1, p2, p3]).then((data) => {
  console.log(data);
});

// Fetch request na API do Github
// Fetch API

const username = "Thaynansp29";

fetch(`https://api.github.com/users/${username}`, {
  method: "GET",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
})
  .then((response) => {
    console.log(typeof response);
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
