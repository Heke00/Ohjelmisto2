let candidates = [];

let amount = Number(prompt("How many candidates?"));

for (let i = 0; i < amount; i++) {
    let name = prompt("Name for candidate " + (i + 1));

    candidates.push({
        name: name,
        votes: 0
    });
}

let voters = Number(prompt("How many voters?"));

for (let i = 0; i < voters; i++) {
    let vote = prompt("Who do you vote for?");

    for (let j = 0; j < candidates.length; j++) {
        if (vote === candidates[j].name) {
            candidates[j].votes++;
        }
    }
}

candidates.sort((a, b) => b.votes - a.votes);

console.log("The winner is " + candidates[0].name +
    " with " + candidates[0].votes + " votes.");

console.log("results:");

for (let i = 0; i < candidates.length; i++) {
    console.log(candidates[i].name + ": " +
        candidates[i].votes + " votes");
}