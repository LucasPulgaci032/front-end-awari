const value = prompt('digite um numero inteiro','10');
window.alert("o numero escolhido é" + value);

const par = [];
const impar = [];

for(let i=1; i<=value; i++) {
    if (i % 2 === 0) {
        par.push(i);
    } else {
        impar.push(i);
    }
}
console.log('numeros pares', par);
console.log('numeros impares', impar);














