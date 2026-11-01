let dice = Number(prompt("How many dice?"));
let target = Number(prompt("What sum are you looking for?"));

let repetitions = 10000;
let hits = 0;

for (let i = 0; i < repetitions; i++) {
    let sum = 0;

    for (let j = 0; j < dice; j++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }

    if (sum === target) {
        hits++;
    }
}

let probability = (hits / repetitions) * 100;

document.body.innerHTML = "Probability to get sum " + target +
    " with " + dice + " dice is " + probability.toFixed(2) + "%";