function even(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(array[i]);
        }
    }

    return result;
}

let numbers = [2, 7, 4, 9, 10, 13];

let evenNumbers = even(numbers);

console.log("Original array:", numbers);
console.log("Even numbers:", evenNumbers);