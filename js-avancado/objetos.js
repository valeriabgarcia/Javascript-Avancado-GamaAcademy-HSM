const pessoa = {
  nome: "Valeria",
  idade: 32,
  cidade: "Itambaraca",
};

//Notação de ponto
console.log(pessoa.nome);

//Notação de colchetes
console.log(pessoa["idade"]);

//Como desestruturar Objetos

const { nome, idade, cidade } = pessoa;

console.log(nome);
console.log(idade);
console.log(cidade);
