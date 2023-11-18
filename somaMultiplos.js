/* Descrição do Desafio: Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado. */

function somaMultiplos(entrada) {
    if (entrada <= 0 || typeof entrada !== 'number' || isNaN(entrada)) {
      return "Entrada inválida! Por favor, insira um numero inteiro positivo...";
    }
  
    let soma = 0;
    for (let i = 1; i < entrada; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
      }
    }
    
    return soma;
}

console.log(somaMultiplos("Teste"));
console.log(somaMultiplos(-1));
console.log(somaMultiplos(10));
console.log(somaMultiplos(11));
console.log(somaMultiplos(576));
  