// 1)   Write a program that prints all prime numbers in given range. Take sub from 1-100.

// for (var number = 0; number <= 100; number++) {
//   var prime = true;
//   for (var i = 2; i <= number; i++) {
//     if (number % i === 0 && i !== number) {
//       prime = false;
//     }
//   }
//   if (prime === true) {
//     console.log(number);
//   }
// }

// 2)   Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether
// their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if
// they input the same number multiple times consecutively. Range 1-100.

// const ld = require("lodash");
// let min = 1,
//   max = 100;

// const secretNumber = ld.random(min, max);
// let chosenNumber,
//   numberOfTries = 0;

// console.log("Secret number:", secretNumber);

// for (numberOfTries = 1; ; numberOfTries++) {
//   chosenNumber = ld.random(min, max);

//   if (chosenNumber < secretNumber) {
//     min = chosenNumber + 1;
//     console.log(chosenNumber, "- secret number is greater than", chosenNumber);
//   } else if (chosenNumber > secretNumber) {
//     max = chosenNumber - 1;
//     console.log(chosenNumber, "- secret number is lower than", chosenNumber);
//   } else {
//     console.log(chosenNumber, "- Secret number is:", chosenNumber);
//     break;
//   }
// }

// console.log("Number of tries:", numberOfTries);

// 3)   Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2].
// Try solving this without creating a copy of the list.
// let arr = [1, 2, 3, 4, 5, 6];

// function rotate(arr, k) {
//   let newArr = arr.splice(0, k);
//   console.log(arr.concat(newArr)); //concat - łączy ze sobą tablice
// }

// rotate(arr, 2);

// 4)   Write a class that prints the list of the first n Fibonacci numbers. The first two Fibonacci numbers are 1 and 1.
// The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number.
// The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

// class Fibonacci {
//   constructor(n) {
//     this.n = n;
//     this.arr = [1, 1];

//     while (this.arr.length < n) {
//       let nextNumber =
//         this.arr[this.arr.length - 2] + this.arr[this.arr.length - 1];

//       this.arr.push(nextNumber);
//     }

//     return this.arr;
//   }
// }

// let fibNum = new Fibonacci(20);

// console.log(fibNum);

// 5)   Write a code that takes a number/string and returns a list of its digits. So for 2342 it should return [2,3,4,2].
// ’A243b’ -> [2,4,3].

// function myFunction(input) {
//   return input
//     .split("") // Dzielimy wejściowy string na tablicę
//     .filter(elem => {
//       return elem >= "0" && elem <= "9"; // Wybieramy tylko cyfry
//     })
//     .map(elem => {
//       return parseInt(elem); // Cyfry jako string konwertujemy na number
//     });
// }
// console.log(myFunction("sahh1212jbv3bm7v9"));

// 6)   Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter
//  of every word, moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.

let sentence = "The quick brown fox";

function pigLatin(e) {
  let text = e.toLowerCase();
  let textArr = text.split(" ").map(e => {
    return e.split("");
  });
  let latin = [];
  for (let i = 0; i < textArr.length; i++) {
    textArr[i].push(textArr[i][0]);
    textArr[i].splice(0, 1);
    textArr[i].push("ay");
    let joined = textArr[i].join("");
    latin.push(joined);
  }
  return latin.join(" ");
}

console.log(pigLatin(sentence));
