let start = Number(prompt("Enter the start year:"));
let end = Number(prompt("Enter the end year:"));

let list = "<ul>";

for (let year = start; year <= end; year++) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        list += "<li>" + year + "</li>";
    }
}

list += "</ul>";

document.body.innerHTML = list;