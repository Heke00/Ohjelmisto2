function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let result;
let list = document.getElementById("target");

do {
    result = rollDice();
    list.innerHTML += `<li>${result}</li>`;
} while (result !== 6);