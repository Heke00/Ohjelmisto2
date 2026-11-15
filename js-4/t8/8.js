
document.getElementById('calculate').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation').value;

    let result = 0;

    if (operation == 'add') {
        result = num1 + num2;
    } else if (operation == 'sub') {
        result = num1 - num2;
    } else if (operation == 'multi') {
        result = num1 * num2;
    } else if (operation == 'div') {
        result = num1 / num2;
    }

    document.querySelector('#result').innerHTML = result;
});
