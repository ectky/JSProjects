// function solve(arr) {
//     let delimiter = arr[arr.length - 1];
//     arr = arr.slice(0, arr.length - 1);
//     let joinedArr = arr.join(delimiter);
//     console.log(joinedArr);
// }

// function solve(arr) {
//     let step = arr[arr.length - 1];
//     arr = arr.slice(0, arr.length - 1);

//     for (let i = 0; i < arr.length; i++) {
//         const el = arr[i];
        
//         if (i % step === 0) {
//             console.log(el);
//         }
//     }
// }

// function solve(arr) {
//     let newArr = [];
//     let num = 1;

//     for (let i = 0; i < arr.length; i++) {
//         const el = arr[i];
        
//         if (el === 'add') {
//             newArr.push(num);
//         } else {
//             newArr.pop();
//         }

//         num++;
//     }
//     if (newArr.length === 0) {
//         console.log('Empty');
//     } else {
//     console.log(newArr.join('\n'));
//     }
// }

// function solve(arr) {
//     let step = arr[arr.length - 1];
//     arr = arr.slice(0, arr.length - 1);
//     step %= arr.length;
//     for (let i = 0; i < step; i++) {
//         let el = arr.pop();
//         arr.unshift(el);
//     }

//     console.log(arr.join(' '));
// }

// function solve(arr) {
//     let biggestNum;
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         const el = arr[i];
        
//         if (i === 0) {
//             biggestNum = el;
//             newArr.push(biggestNum);
//         } else if (el >= biggestNum ) {
//             biggestNum = el;
//             newArr.push(biggestNum);
//         }
//     }

//     console.log(newArr.join('\n'));
// }

// function solve(arr) {
//     arr.sort(function(a, b) {
//         return a.length - b.length || a.toLowerCase() - b.toLowerCase();
//     });
//     console.log(arr.join('\n'));
// }

function solve(matrix) {
    let sum = -1;
    let currSum = 0;
    let result = true;

    for (let i = 0; i < matrix.length; i++) {
        for (let p = 0; p < matrix[i].length; p++) {
            const element = matrix[i][p];
            currSum += element;
        }

        if (sum === -1) {
            sum == currSum;
        } 
        console.log(currSum);u8*9
        if(sum !== currSum) {
            result = false;
            break;
        }
        currSum = 0;
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let p = 0; p < matrix[i].length; p++) {
            const element = matrix[p][i];
            currSum += element;
        }

        if (sum === -1) {
            sum == currSum;
        } 
        if(sum !== currSum) {
            result = false;
            break;
        }
        currSum = 0;
    }

    console.log(result);
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );