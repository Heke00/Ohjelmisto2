function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

let max = Number(prompt("How many sides does the dice have?"));

let result;
let list = document.getElementById("target");

do {
    result = rollDice(max);
    list.innerHTML += `<li>${result}</li>`;
} while (result !== max);