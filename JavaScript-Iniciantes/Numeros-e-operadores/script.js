var total = 19 + 8
var divisao = 200 / 5
var modulo = 213131321 % 3

console.log(total)
console.log(divisao)
console.log(modulo)

var testeNaN = 'isso é 100' / 2
console.log(testeNaN)
// É possível verificar se uma variável é NaN ou não com a função isNaN()

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
// Lembrando que 'soma' + em Strings serve para concatenar


// Incrementando
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
// Mesma coisa para o decremento--x


// O + e - tenta transformar o valor seguinte em número
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// O - antes de um número torna ele negativo