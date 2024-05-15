const input = prompt('Digite idades separadas por vírgula:', '10,5,23,18,31,50,13,2,80,42');
const values = input.split(',');
console.log('Idades', values);

const maior = [];
const menor = [];

for(let i=0; i<values.length; i++) {
    const age = parseInt(values[i]);
    if (age >= 18) {
        maior.push(age);
    } else {
      menor.push(age);
    }

}

console.log('Maiores de idade:', maior);
console.log('Menores que dezoito',menor);
 
//criei os arrays maior e menor para separar as idades menores de 18 das maiores de 18, usando if para quando as idades forem maiores ou iguais a 18, puxar o array maior, criando o indice de maiores de idade, e utilizando else para quando forem menor de 18, puxar o array menor.

































