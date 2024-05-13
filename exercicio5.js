
function gerarTabuada(numero) {
  console.log(`\nTabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}


for (let numero = 1; numero <= 10; numero++) {
  gerarTabuada(numero);
}
