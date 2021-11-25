const alunasGama = ["Paula", "Maria", "Estela", "Clara"];

//Acessar informações num array
console.log(alunasGama[3]); //"Clara"


// Operador spread (...)
const alunasXp = [...alunasGama, "Valeria"];
console.log(alunasXp);  //[ 'Paula', 'Maria', 'Estela', 'Clara', 'Valeria' ]


//Metodos de iteração
//Map
alunasXp.map((aluna) => console.log(aluna)); // Paula Maria Estela Clara Valeria 



const numeros = [34, 45, 67, 90, 55, 76];

//Filter

const numerosImpares = numeros.filter((numero) => numero % 2 != 0);
console.log(numerosImpares);

const numerosPares = numeros.filter((numero) => numero % 2 == 0);
console.log(numerosPares);


//find
const produtos = ["geladeira", "fogao", "cama", "mesa"];

const encontraCama = produtos.find((produto) => produto === "cama");
console.log(encontraCama);

const encontraMesa = produtos.find((produto) => produto === "mesa");
console.log(encontraMesa);


//sort - ordenação
const numerosOrdenadosCrescente = numeros.sort();
console.log(numerosOrdenadosCrescente);

const numerosOrdenadosDecrescente = numeros.sort((a, b) => b - a);
console.log(numerosOrdenadosDecrescente);


//reduce - reduz nosso array a um resultado de uma operação matemática

const numbers = [1, 34, 35, 70];

const soma = numbers.reduce((valorAnterior, valorAtual) => {
  return valorAnterior + valorAtual;
});

console.log(soma); 
