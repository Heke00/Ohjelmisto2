let amount = prompt("How many participants?");

let names = [];

for (let i = 0; i < amount; i++) {
    let name = prompt("Enter participant name:");
    names.push(name);
}

names.sort();

let list = document.getElementById("target");

for (let i = 0; i < names.length; i++) {
    list.innerHTML += `<li>${names[i]}</li>`;
}