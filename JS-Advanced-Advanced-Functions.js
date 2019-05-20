// function solve(arr, command) {
//     var ascendingComparator = function (a, b) {
//         return a - b;
//     };

//     var descendingComparator = function (a, b) {
//         return b - a;
//     };

//     var sortingCategories = {
//         'asc' : ascendingComparator,
//         'desc' : descendingComparator
//     };

// //     return arr.sort(sortingCategories[command]);
// // }

// function solve() {
//     let summary = {};

//     for (let i = 0; i < arguments.length; i++) {
//         let element = arguments[i];
//         let type = typeof element;
//         console.log(`${type}: ${element}`)

//         if (!summary[type]) {
//             summary[type] = 1;
//         } else {
//             summary[type]++;
//         }

//     }

//     var sorted = [];
//     for (const element in summary) {
//         sorted.push([element, summary[element]]);
//     }

//     sorted = sorted.sort(function (a, b) {
//         return b[1] - a[1];
//     });

//     for (const element of sorted) {
//         console.log(`${element[0]} = ${element[1]}`);
//     }
// }

// const add = (function() {
//     let sum = 0;

//     function add(number) {
//         sum += number;

//         return add;
//     }

//     add.toString = function (){
//         return sum;
//     };

// //     return add;
// // })();

// function composeChart(name, age, weight, heightCm) {
//     const calcBMI = (weight, heightM) => {
//         return Math.round(weight / heightM ** 2);
//     };

//     const generateStatus = (bmi) => {
//         if (bmi < 18.5) {
//             return 'underweight';
//         } else if (bmi < 25) {
//             return 'normal';
//         } else if (bmi < 30) {
//             return 'overweight';
//         } else {
//             return 'obese';
//         }
//     };

//     const bmi = calcBMI(weight, heightCm / 100);
//     const status = generateStatus(bmi);

//     const chart = {
//         name,
//         personalInfo: {
//             age,
//             weight,
//             height: heightCm
//         },
//         BMI: bmi,
//         status
//     }

//     if (chart.status === 'obese') {
//         chart.recommendation = 'admission required';
//     }

//     return chart;
// }


// (function() {
//     const add = ([x1, y1], [x2, y2]) => {
//         return [x1 + x2, y1 + y2];
//     };

//     const multiply = ([x1, y1], s) => {
//         return [x1 * s, y1 * s];
//     };

//     const length = ([x1, y1]) => {
//         return Math.sqrt(x1 ** 2 + y1 ** 2)
//     };

//     const dot = ([x1, y1], [x2, y2]) => {
//         return x1 * x2 + y1 * y2;
//     };

//     const cross = ([x1, y1], [x2, y2]) => {
//         return x1 * y2 - y1 * x2;
//     };

//     return {
//         add,
//         multiply,
//         length,
//         dot,
//         cross
//     }
// })();


// let manager = (function () {
//     const ingredients = {
//         protein: 0,
//         carbohydrate: 0,
//         fat: 0,
//         flavour: 0
//     };

//     const recepies = {
//         'apple': {carbohydrate: 1, flavour: 2},
//         'coke': {carbohydrate: 10, flavour: 20},
//         'burger': {carbohydrate: 5, fat: 7, flavour: 3},
//         'omelet': {protein: 5, fat: 1, flavour: 1},
//         'cheverme': {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
//     };

//     const prepare = (recepie, neededQ) => {
//         const neededIngredients = Object.entries(recepies[recepie]);
        
//         for (const [ingr, q] of neededIngredients) {
//             const stored = ingredients[ingr] * neededQ;

//             if (q > stored) {
//                 return `Error: not enough ${ingr} in stock`;
//             }
//         }

//         for (const [ingr, q] of neededIngredients) {
//             ingredients[ingr] -= q * neededQ;
//         }

//         return 'Success';
//     };

//     return function (input) {
//         let tokens = input.split(' ');
//         const command = tokens[0];

//         switch (command) {
//             case 'restock':
//                 ingredients[tokens[1]] += Number(tokens[2]);
//                 return 'Success';
//             case 'prepare':
//                 return prepare(tokens[1], Number(tokens[2]));
//             case 'report':
//                 return Object.entries(ingredients)
//                 .map((kvp) => `${kvp[0]}=${kvp[1]}`).join(' ');
//         }
//     }
// })();