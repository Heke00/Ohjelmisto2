let rolls = Number(prompt("How many times do you want to roll the dice?"));

let sum = 0;

for (let i = 0; i < rolls; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    sum = sum + roll;
}

document.body.innerHTML = "The sum of the dice rolls is " + sum;