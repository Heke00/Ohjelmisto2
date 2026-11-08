let dogs = [];

for (let i = 0; i < 6; i++) {
    let name = prompt("Enter a dog name:");
    dogs.push(name);
}

dogs.sort();
dogs.reverse();

let list = document.getElementById("target");

for (let i = 0; i < dogs.length; i++) {
    list.innerHTML += `<li>${dogs[i]}</li>`;
}