let target = document.getElementById('target');

let item1 = document.createElement('li');
let item2 = document.createElement('li');
let item3 = document.createElement('li');

item1.textContent = "First item";
item2.textContent = "Second item";
item3.textContent = "Third item";

item2.classList.add('my-item');


target.appendChild(item1);
target.appendChild(item2);
target.appendChild(item3);