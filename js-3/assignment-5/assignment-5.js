let numbers = [];

let number = Number(prompt("Enter a number:"));

while (!numbers.includes(number)) {
    numbers.push(number);
    number = Number(prompt("Enter a number:"));
}

alert("You already entered that number!");

numbers.sort((a, b) => a - b);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}