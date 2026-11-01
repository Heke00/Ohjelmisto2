if (confirm("Should I calculate the square root?")) {
    let number = Number(prompt("Enter a number:"));

    if (number < 0) {
        document.body.innerHTML = "The square root of a negative number is not defined";
    } else {
        let result = Math.sqrt(number);
        document.body.innerHTML = "The square root is " + result;
    }
} else {
    document.body.innerHTML = "The square root is not calculated.";
}