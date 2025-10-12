//console.log("we are learning about the module in node.js")

// const { sum, sub, mul, div } = require('./utils')
import {sum,sub,mul,div} from './utils.js'
console.log("Sum of two numbers =", sum(1, 20));
console.log("Multiplication of two numbers =", mul(15, 20));
console.log("Subtraction of two numbers =", sub(15, 20));
console.log("Division of two numbers =", div(15, 20));