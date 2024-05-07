# Noções básicas de JS

## Variáveis

*Variables são contêineres que armazenam valores. Você começa declarando uma variável com a palavra-chave let, seguida do nome que você dá à variável:*

`let myVariable;`

*Depois de declarar uma variável, podemos atribuir um valor a ela:*

`myVariable = 'Lucas';`


## Condicionais

*Condicionais são estruturas de código usadas para testar se uma expressão retorna verdadeira ou não. Uma forma muito comum de condicionais é a instrução if...else. Por exemplo:*

```let iceCream = 'chocolate';

if (iceCream === 'chocolate') {
alert('Sim, eu amo sorvete de chocolate!');
} else {
alert('Aaaah, mas chocolate é o meu favorito...');
}
```

## Funções

*Functions são uma forma de empacotar a funcionalidade que você deseja reutilizar. É possível definir um corpo de código como uma função que é executada quando você chama o nome da função em seu código. Esta é uma boa alternativa para escrever repetidamente o mesmo código. Você já viu alguns usos de funções. Por exemplo:*

```
let selectorJS = document.querySelector('h1');

alert('olá!');
```

*Essas funções, document.querySelector e alert, são incorporadas ao navegador.*

```
function multiply(num1, num2) {
let result = num1 \* num2;
return result;
}
```

*O return diz ao navegador para retornar a variável result da função para que ela esteja disponível para usar.*

## Eventos

*A interatividade real em um site requer manipuladores de eventos. Essas são estruturas de código que detectam atividades no navegador e executam o código em resposta. O exemplo mais óbvio é lidar com o evento de click, que é acionado pelo navegador quando você clica em algo com o mouse.*

```
let html = document.querySelector('html');
html.addEventListener('click', function () {
alert('Pare de me cutucar');
});
```
