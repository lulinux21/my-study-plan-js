const myHeading = document.querySelector('h1');

myHeading.textContent = 'Olá Mundo!';

// Variáveis

/*
  Variables são contêineres que armazenam valores. Você começa declarando uma variável com a palavra-chave let, seguida do nome que você dá à variável: 
 */

let myVariable;
// Depois de declarar uma variável, podemos atribuir um valor a ela:
myVariable = 'Lucas';

// Condicionais
/*
  Condicionais são estruturas de código usadas para testar se uma expressão retorna verdadeira ou não. Uma forma muito comum de condicionais é a instrução if...else. Por exemplo:
*/

let iceCream = 'chocolate';

if (iceCream === 'chocolate') {
  alert('Sim, eu amo sorvete de chocolate!');
} else {
  alert('Aaaah, mas chocolate é o meu favorito...');
}
