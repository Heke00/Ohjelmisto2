let students = [
    {name: "John", id: "2345768"},
    {name: "Paul", id: "2134657"},
    {name: "Jones", id: "5423679"}
];

let target = document.getElementById('target');

for (let i = 0; i < students.length; i++) {
    let option = document.createElement('option');

    option.textContent = students[i].name;
    option.value = students[i].id;

    target.appendChild(option);
}