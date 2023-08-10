// function highOrdertwo(func) {
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// highOrdertwo(rollDie);

// function makebetweenfunc(min, max) {
//     return function (num) {
//         return (num >= min && num <= max)
//     }
// }
// const isChild = makebetweenfunc(0, 18); //writing it this way isChild has access to function(num), so if we write (isChild(4)) will be applied to that inner function
// console.log(isChild);
// console.log(isChild(4));

// try and catch

// try {
//     console.log(hello);
// }
// catch {
//     console.log("Check if the hello is defined or not (maybe assign a string) ");
// }

// let n = 412;
// let even_sum = 0;
// let odd_sum = 0;
// let a = n.toString();
// let arraydig = a.split('');
// let dig = arraydig.map(Number);
// for (let i = 0; i < dig.length; i++) {
//     if (dig[i] % 2 == 0) {
//         even_sum += dig[i];
//     }
//     else {
//         odd_sum += dig[i]
//     }
// }

// console.log(even_sum - odd_sum);

// let n = [1, 2, 3];
// let stringDig = n.map(String);
// console.log(stringDig);
// let stringNum = n.join('');
// let num = parseInt(stringNum);
// num += 1;
// stringNum = num.toString();
// stringDig = stringNum.split('');
// stringDig = stringDig.map(Number);
// console.log(stringDig);

//implicit returns in arrow functions
// this way we don't have to write keywords like function or return
// const add = (x, y) => (x + y);
// console.log(add(3, 4));
//we can also do this with function methods like map or filter
// movies = [
//     {
//         title: "Kung Fu Panda",
//         rating: 9
//     },
//     {
//         title: "The Irishman",
//         rating: 9.5
//     },
//     {
//         title: "John Wick Chapter 4",
//         rating: 10 / 10
//     }
// ]

// const newMovies = movies.map((movie) => (`${movie.title} -- ${movie.rating}`))
// console.log(newMovies);

//setTimeout()
// console.log("Hello");
// setTimeout(() => {
//     console.log("Hey, thanks for still being here");
// }, 3000) // this appears last
// console.log("Good Evening");


//setInterval()
// console.log("Enjoy this as it plays out");
// const message = setInterval(() => {
//     console.log("You miss Ashi");
// }, 2000)// consistently appears every 2 seconds
// // in console, you can type clearInterval(message) to stop when running in chrome
// console.log("does this appear"); //it does lol

//filter()
// let userNames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];
// filteredUser = userNames.filter((username) => (username.length < 10));
// console.log(filteredUser);

//some() and every()
// these do no return new arrays like map() and filter() do, they instead return boolean expressions 'true' or 'false'
// some returns true if at least one of the elements in the array or object satisfies condition
// every returns true if and only if all of the elements in the array or object satisfy the condition
//using every()
// const allEvens = (numArr)=>(
//     numArr.every(number=>((number%2===0)))) //used implicit return, below is the more readable way
// const allEvens = (numArr) => {
//     return (
//         numArr.every(number => {
//             return (number % 2 === 0);


//         })
//     )
// }


// console.log(allEvens([1, 2, 3, 4]))// returns false, since not all numbers in array are even



//reduce

// nums = [1, 2, 3, 4, 5, 6];
// const res = nums.reduce((accumulator, currVal) => {
//     return (accumulator + currVal)
// })

// console.log(res); // 21


// understand reduce syntax, for it can be used in a variety of operations, accumulator parameter can also be used when wanting to fing the min or max of an array or an onject.
// You can also add an initial value if say you want the sum to add like 300 to the final value, as shown below

// nums = [1, 2, 3, 4, 5, 6];
// const res = nums.reduce((accumulator, currVal) => {
//     return (accumulator + currVal)
// }, 300)

// console.log(res); // 321

// To note, the 'this' keyword works differently when used in arrow functions as opposed to regular functions, watch lecture 233 for more details


// name = {
//     firstName: "Yoki",
//     lastName: "Fan",
//     fullName: () => {
//         return (`${this.firstName}--${this.lastName}`)
//     }
// }

// spread operator
// let nums = [1, 2, 6, 90, 43, 59];
// console.log(Math.max(nums));//gives you NaN, since it cannot spread out the array values as separate arguments
// console.log(Math.max(...nums));

// fun thing to do with spread operator
// console.log({ ...[1, 2, 3, 4] }); // you get object with key as indices and value as array value

// const array = [1, 2, 3, 4, 5];
// console.log({ ...array });

// function getWinningString(characters, numLetters) {
//     let winningString = '';
//     let accumulatedString = '';

//     for (let i = 0; i < numLetters; i++) {
//         let currentChar = characters[i];
//         accumulatedString += currentChar;

//         let nonRepeatingChar = findNonRepeatingChar(accumulatedString);
//         if (nonRepeatingChar) {
//             winningString += nonRepeatingChar;
//         } else {
//             winningString += '-1';
//         }
//     }

//     return winningString;
// }

// function findNonRepeatingChar(str) {
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (str.indexOf(char) === str.lastIndexOf(char)) {
//             return char;
//         }
//     }
//     return null;
// }

// let inputCharacters = ['w', 'w', 'w', 'c', 'a'];
// let numLetters = 5;

// let winningString = getWinningString(inputCharacters, numLetters);
// console.log(winningString); // Output: 'abcac'


function getWinningString(letters, n) {
    let checkString = '';
    let winString = '';
    for (let i = 0; i < n; i++) {
        let currChar = letters[i];
        checkString += currChar;
        let nonRepeatChar = nonRepeating(checkString);
        if (nonRepeatChar) {
            winString += nonRepeatChar;
        }
        else {
            winString += '-1';
        }


    }
    return winString;
}

function nonRepeating(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            // the above condition checks for any instance of character first appearing in the string to any instance of the char appearning fort he final time in the string, if they are equal then character hasn't repeated, else it has
            return char;
        }
    }
    return null;
}

let letters = ['w', 'w', 'w', 'c', 'a'];
let n = 5;

console.log(getWinningString(letters, n));