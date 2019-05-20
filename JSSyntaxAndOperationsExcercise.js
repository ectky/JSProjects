// function solve(name){
//     console.log(`Hello ${name}, do you like JavaScript?`);
// }

// function solve(integer){
//     for (let index = 1; index <= integer; index++) {
//         if (index % 2 == 0) {
//             console.log(index);
//         }
//     }
// }

// function solve(type, wpg, ppk){
//     let weight = wpg / 1000;
//     let money = weight * ppk;
//     console.log(`I need ${money.toFixed(2)} leva to buy ${weight.toFixed(2)} kilograms ${type}.`);
// }

// function solve(dayOfWeek, service, time){
//     let price = 0;
//     if (dayOfWeek == "Monday" || dayOfWeek == "Tuesday" || dayOfWeek == "Wednesday" 
//     || dayOfWeek == "Thursday" || dayOfWeek == "Friday") {
//         if (service == "Fitness") {
//             if (time >= 8 && time <= 15) {
//                 price = 5;
//             }
//             else if (time > 15 && time <= 22) {
//                 price = 7.5;
//             }
//         }
//         else if (service == "Sauna") {
//             if (time >= 8 && time <= 15) {
//                 price = 4;
//             }
//             else if (time > 15 && time <= 22) {
//                 price = 6.5;
//             }
//         }
//         else if (service == "Instructor") {
//             if (time >= 8 && time <= 15) {
//                 price = 10;
//             }
//             else if (time > 15 && time <= 22) {
//                 price = 12.5;
//             }
//         }
//     }
//     else{
//         if (service == "Fitness") {
//             price = 8;
//         }
//         else if (service == "Sauna") {
//             price = 7;
//         }
//         else if (service == "Instructor") {
//             price = 15;
//         }
//     }
//     console.log(price);
// }

// function solve(number) {    
//     let digits = Math.abs(number).toString().split('');
//     let sumOfDigits = digits.reduce(function(a,b){return +a + +b}, 0);
//     for (let index = 1; index < digits.length; index++) {
//         const digit = digits[index];
//         const prevDigit = digits[index-1];
//         if (digit != prevDigit) {
//             console.log(false);
//             console.log(sumOfDigits);
//             return;
//         }
//     }
//     console.log(true);
//     console.log(sumOfDigits);
// }

function solve(array){
    console.log(`${array[0]}: Destination - ${array[1]}, Flight - ${array[3]}, Time - ${array[2]}, Gate - ${array[4]}`);
}

solve(11111);