const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [numerosPares, numerosImpares];
const numerosD = [...numerosPares, ...numerosImpares];

console.log(numeros);
console.log(numerosD);

// const num1 = 1;
// const num2 = 2;

//const[num1, num2] = [1, 2];
const[num1, num2, ...outrosNum] = [1, 2, 3, 4, 5];

console.log(num1, num2, outrosNum);

//const [nome1 = 'Deivid'] = [1];
const [nome1 = 'Deivid'] = [];

console.log(nome1);

const pessoa = {
    nome: 'Deivid',
    idade: 34
};

const pessoaTelefone = {
    ...pessoa,
    telefone: 61985302526
}

console.log(pessoa);
console.log(pessoaTelefone);

const { nome } = pessoa;
const { idade } = pessoa;

console.log(nome);
console.log(idade);

function ImprimeDados ({nome, idade}) {
    console.log(nome, idade);
}

ImprimeDados(pessoa);