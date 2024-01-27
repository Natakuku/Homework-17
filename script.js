'use strict';

// 1.
// let userInput = prompt('Please input any symbols here.');
// let userNum = userInput.replace(/\D/g, '');
// let userArray = userNum.split('').map(Number);

// function calculateAverage(arr) {
//     let sum = 0;
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         count++;
//     }
//     let average = sum / count;
//     return average;
// }
// let result = calculateAverage(userArray);
// console.log(`Your average number is: ${result}`);



// 2.
// let x = prompt("Input your first number.");
// let y = prompt("Input your second number.");
// let znak = prompt("What you want to do(+, -, *, /, %, ^)?");

// function doMath(x, znak, y) {
//     x = parseFloat(x);
//     y = parseFloat(y);

//     switch (znak) {
//         case '+':
//             return x + y;
//         case '-':
//             return x - y;
//         case '*':
//             return x * y;
//         case '/':
//             return (y !== 0) ? x / y :"You cannot divide on 0";
//         case '%':
//             return x % y;
//         case '^':
//             return Math.pow(x, y);
//         default:
//             return "Wrong input";
//     }
// }
// let result = doMath(x, znak, y);
// console.log(`Your result is: ${result}`);


// 3.
// function fillArray() {
//     let rows = prompt('Введіть кількість рядків:');
//     let cols = prompt('Введіть кількість стовпців:');
//     let twoDimArray = [];
//     for (let i = 0; i < rows; i++) {
//         let row = [];
//         for (let j = 0; j < cols; j++) {
//             let value = prompt(`Введіть значення для елемента (${i + 1}, ${j + 1}):`);
//             row.push(value);
//         }
//         twoDimArray.push(row);
//     }

//     return twoDimArray;
// }
// let userArray = fillArray();
// console.log(userArray);


//4.
// let userString = prompt("Input your string here:");
// let userSymbolsToDelete = prompt("Input any symbols you want to delete (separate with commas):");
// let symbolsArray = userSymbolsToDelete.split(',');

// function deleteChars(inputString, charsToDelete) {
//     let stringArray = inputString.split('');
//     let resultArray = stringArray.filter(char => !charsToDelete.includes(char));
//     return resultArray.join('');
// }
// let resultString = deleteChars(userString, symbolsArray);
// console.log(resultString);