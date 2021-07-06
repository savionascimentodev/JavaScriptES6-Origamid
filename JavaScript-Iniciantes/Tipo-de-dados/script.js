var nome = 'Savio'
console.log(typeof nome) // Para saber o tipo do dado.

var nome = 'Savio'
var sobrenome = 'Nascimento'
var nomeCompleto = nome + ' ' + sobrenome // Espaço entre strings com concatenação.
console.log(nomeCompleto)

var gols = 1000
var frase = 'CR7 fez ' + gols + 'gols' // Quando concatena uma string com um number o resultado é string.
console.log(typeof frase)

// var frase1 = "Esse é o "melhor" jogo" // Modo errado de se colocar aspas.

var frase2 = `CR7 fez ${gols * 2} gols` // Utilizando template string.

/*--------------- ATIVIDADES ---------------*/

// Declare uma variável contendo uma string.
var anime = 'One Piece'

// Declare uma variável contendo um número dentro de uma string.
var time = 'Santos2021'

// Declare uma variável com a sua idade.
var idade = 19
console.log(idade)

// Declare duas variáveis, uma com seu nome;
// e outra com seu sobrenome e some as mesmas.
var nome = 'Savio'
var sobrenome = 'Nascimento'
var nomeCompleto = `${nome} ${sobrenome}`
// var nomeCompleto = nome + ' ' + sobrenome // Segunda opção.

// Coloque a seguinte frase em uma variável: It's time.
var inicio = `It's time`
// var inicio2 = "It's time" // Segunda opção com aspas simples.

// Verifique o tipo da variável que contém o seu nome.
var verificarTipo = typeof nomeCompleto
console.log(verificarTipo)
// console.log(typeof nomeCompleto) // Segunda opção.
