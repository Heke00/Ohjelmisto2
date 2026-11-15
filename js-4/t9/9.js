
document.getElementById('calculate').addEventListener('click', function() {

    let calculation = document.getElementById('calculation').value;

    let num1;
    let num2;
    let result;

    if (calculation.includes('+')) {
        let numbers = calculation.split('+');
        num1 = Number(numbers[0]);
        num2 = Number(numbers[1]);
        result = num1 + num2;
    }
    else if (calculation.includes('-')) {
        let numbers = calculation.split('-');
        num1 = Number(numbers[0]);
        num2 = Number(numbers[1]);
        result = num1 - num2;
    }
    else if (calculation.includes('*')) {
        let numbers = calculation.split('*');
        num1 = Number(numbers[0]);
        num2 = Number(numbers[1]);
        result = num1 * num2;
    }
    else if (calculation.includes('/')) {
        let numbers = calculation.split('/');
        num1 = Number(numbers[0]);
        num2 = Number(numbers[1]);
        result = num1 / num2;
    }

    document.getElementById('result').textContent = result;

});
