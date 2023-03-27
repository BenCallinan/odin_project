// Functions

// == Add 7 ==
// number = Number(prompt("Enter a number:"));

// function add7() {
//     let a = 7;
//     let result = a + number;

//     return result;
// }

// console.log(add7());

// == Multiply ==
// number1 = Number(prompt("Enter a number:"));
// number2 = Number(prompt("Enter a number:"));

// function multiply() {
//     let result = number1 * number2;
//     return result;
// }

// console.log(multiply());

// == Capitalize ==
// yourName = String(prompt("Enter your name:"));

// function capitalize() {
//     const str = yourName;
//     const str2 = str.charAt(0).toUpperCase() + str.slice(1);
//     return str2;
// }

// console.log(capitalize());

// == Last letter == 
yourName = String(prompt("Enter your name:"));

function lastLetter() {
    const str = yourName;
    const str2 = str.slice(-1);
    return str2;
}

console.log(lastLetter());