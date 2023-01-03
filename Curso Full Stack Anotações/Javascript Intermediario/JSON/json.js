let a = {
  nome: "Igor",
  nota: 8.5,
};
let b = JSON.stringify(a);

let a2 = '{"nome":"fabio", "nota": 7.8}';
let b2 = JSON.parse(a2);

console.log(a);
console.log(b);

console.log(a2);
console.log(b2);

console.log(a2.nome); //vai da undefined por que ele está como string
console.log(b2.nome); //vai aparecer como objeto porque o json transformou a string em objeto
