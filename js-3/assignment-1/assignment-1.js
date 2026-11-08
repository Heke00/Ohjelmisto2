let a = prompt("1/5 Anna numero: ");
let b = prompt("2/5 Anna numero: ");
let c = prompt("3/5 Anna numero: ");
let d = prompt("4/5 Anna numero: ");
let e = prompt("5/5 Anna numero: ");


const numbers = [];
numbers[0] = a
numbers[1] = b
numbers[2] = c
numbers[3] = d
numbers[4] = e

for (let i = numbers.length -1; i >= 0; i--) {
  console.log(numbers[i]);
}