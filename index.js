'use strict';
const math = require('./math')
const greet = require('./greetings')
const hello = require('./greetings/hello')
const test = require('./greetings/test')


console.log(math.add(4,5))
console.log(math.multiply(5,4))
console.log(math.divide(6,2))
console.log(math.substract(20,5))

let saludo = greet.greet('Hola como estas?')
console.log(saludo)

let hola = hello.sayHello('Fabio')
console.log(hola)

let sal = test('JOjo')
console.log(sal)