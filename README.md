# Soma de Múltiplos de 3 e 5 
Este é um pequeno script JavaScript que calcula a soma de todos os números menores que um determinado valor (entrada) que são múltiplos de 3 ou 5.

## Como funciona
O código define uma função chamada somaMultiplos que recebe um número inteiro positivo como entrada e retorna a soma de todos os números menores que esse valor e que são divisíveis por 3 ou 5. Se a entrada for menor ou igual a zero, a função retorna "Entrada inválida".

## Instruções para Execução
Certifique-se de ter o ambiente Node.js instalado em seu sistema operacional.
Se não o tiver, você pode instalar em sua máquina usando o "NVM" para ambientes com base Unix de forma mais simples, seguindo o tutorial do próprio repositório do NVM (https://github.com/nvm-sh/nvm), e se você utiliza ambiente Windows, pode baixar o instalador no site do Node.js (https://nodejs.org/en/download) e realizar a instalção padrão.

1. Baixe o código para o seu computador: Se você possuí o Git instalado, pode usar no seu terminal os comandos abaixo para clonar direto o repositório para sua máquina e acessá-lo:
 <br> 
 ```git clone https://github.com/Albino-Marques/desafio-escribo.git``` 
 <br>
 ```cd desafio-escribo```
 <br>
  Caso contrário, pode baixá-lo diretamente como zip e extraí-lo para a execução. 
2. Na pasta onde o código está localizado abra o terminal.
    * Execute o seguinte comando para rodar o script:

        ```node somaMultiplos.js```

<br>

## Testando a Função
O código já inclui algumas chamadas de exemplo para a função somaMultiplos, as quais você pode utilizar para testar o comportamento da função. Para testar outros valores, substitua os argumentos nas chamadas de função como nos exemplos abaixo:

```console.log(somaMultiplos("Substitua aqui"))```<br>
```console.log(somaMultiplos(-1))```<br>
```console.log(somaMultiplos(537))```<br>

Sinta-se à vontade para modificar e expandir esses testes conforme necessário.

Espero que estas instruções sejam úteis! Se houver alguma dúvida ou problema, não hesite em entrar em contato.