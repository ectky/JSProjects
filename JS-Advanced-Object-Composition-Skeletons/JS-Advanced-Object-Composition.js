// let extensions = (function(){
// Array.prototype.last = function () {
//     return this[this.length - 1];
// }

// Array.prototype.skip = function (n) {
//     return this.slice(n);
// }

// Array.prototype.take = function (n) {
//     return this.slice(0, n);
// }

// Array.prototype.sum = function () {
//     return this.reduce((a,b) => a + b, 0);
// }

// Array.prototype.average = function () {
//     return this.reduce((a,b) => a + b, 0) / this.length;
// }
// })()

// function solve(obj) {
//     if (obj.handsShaking === false) {
//         return obj;
//     }

//     obj.bloodAlcoholLevel += obj.experience * obj.weight * 0.1;
//     obj.handsShaking = false;
//     return obj;
// }


// function solve() {
//     let myObj = {
//         extend: function (template) {
//             const entries = Object.entries(template);
//             for (const [key, value] of entries) {
//                 if (typeof value === 'function') {
//                     Object.getPrototypeOf(this)[key] = value;
//                 } else {
//                     this[key] = value;
//                 }
//             }
//         }
//     }

//     return myObj;
// }

// let extensions = ( function () {
//     String.prototype.ensureStart = function (str) {
//         if (this.startsWith(str)) {
//             return this.toString();
//         }

//         return str + this;
//     };

//     String.prototype.ensureEnd = function (str) {
//         if (this.endsWith(str)) {
//             return this.toString();
//         }

//         return this + str;
//     };

//     String.prototype.isEmpty = function () {
//         return this.length === 0;
//     };

//     String.prototype.truncate = function (n) {
//         if (n < 4) {
//             return '.'.repeat(n);
//         }

//         if (this.length <= n) {
//             return this.toString();
//         }

//         const lastIndexOfSpace = this.toString().substr(0, n - 2).lastIndexOf(' ');

//         if (lastIndexOfSpace !== -1) {
//             return this.substr(0, lastIndexOfSpace) + '...';
//         } else {
//             return this.substr(0, n - 3) + '...';
//         }
//     };

//     String.format = function (str, ...args) {
//         for (let i = 0; i < args.length; i++) {
//             const el = args[i];
//             str = str.replace(`${i}`, args[i]);
//         }

//         return str.toString();
//     };
// })();

// function solve() {
//     let collection = (() => {
//         let list = [];
//         let size = 0;

//         const sort = function(){
//             list = list.sort(a,b => a - b);
//         };
    
//         const add = function(element){
//             list.push(element);
//             size++;
    
//             sort();
//         };
    
//         const remove = function(index){
//             if (!(index >= list.length || index < 0)) {
//                 list.splice(index, 1);
//                 size--;
    
//                 sort();
//             }
    
//         };
    
//         const get = function(index){
//             if (!(index >= list.length || index < 0)) {
//                 return list[index];
                
//                 sort();
//             }
//         }

//         return {
//             add,
//             remove,
//             get,
//             size
//         }
//     })();

//     return collection;
// }

// function solve(selector) {
//     const htmlElemnt = document.querySelector(selector);
//     htmlElemnt.classList.add('highlight');

//     highlightChildren(htmlElemnt);

//     function highlightChildren(element) {
//         const children = element.children;

//         if (children.length === 0) {
//             return;
//         }

//         for (let i = 0; i < children.length; i++) {
//             highlightChildren(children[i]);
//             children[i].classList.add('highlight');
//         }
//     }
// }
