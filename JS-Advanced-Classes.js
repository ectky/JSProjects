// class Request{
//     constructor(method, uri, version, message) {
//         this.method = method;
//         this.uri = uri;
//         this.version = version;
//         this.message = message;
//         this.response = undefined;
//         this.fulfilled = false;
//     }
// }


// function solve(arr, sortingPar) {
//     class Ticket{
//         constructor(destination, price, status){
//             this.destination = destinationName;
//             this.price = price;
//             this.status = status;
//         }
//     }

//     let tickets = [];

//     for (const el of arr) {
//         let tokens = el.split('|');
//         let ticket = new Ticket(tokens[0], tokens[1], tokens[2]);
//         tickets.push(ticket);
//     }

//     let sortedTickets = [];

//     if (sortingPar === 'destination') {
//         sortedTickets = tickets.sort(function (a, b) {
//             if (a.destination < b.destination) {
//                 return -1;
//             } else if (a.destination > b.destination) {
//                 return 1;
//             }

//             return 0;
//         })
//     } else if (sortingPar === 'price') {
//         sortedTickets = tickets.sort(function (a, b) {
//             if (a.price < b.price) {
//                 return -1;
//             } else if (a.price > b.price) {
//                 return 1;
//             }

//             return 0;
//         })
//     } else if (sortingPar === 'status') {
//         sortedTickets = tickets.sort(function (a, b) {
//             if (a.status < b.status) {
//                 return -1;
//             } else if (a.status > b.status) {
//                 return 1;
//             }

//             return 0;
//         })
//     }

//     return sortedTickets;
// }

// class Rat{
//     constructor(name){
//         this.name = name;
//         this.rats = [];
//     };

//     unite(rat) {
//         if (rat instanceof Rat) {
//             this.rats.push(rat);
//         }
//     };

//     getRats(){
//         return this.rats;
//     }

//     toString(){
//         return `${this.name}\n${this.getRats().map(r => `##${r.name}`).join('\n')}`;
//     }
// }

// class Stringer{
//     constructor(innerString, innerLength){
//         this.innerLength = innerLength,
//         this.innerString = innerString;
//     }

//     increase(length){
//         this.innerLength += length;
//     }

//     decrease(length){
//         this.innerLength -= length;

//         if (this.innerLength < 0) {
//             this.innerLength = 0;
//         }
//     }

//     toString(){
//         if (this.innerString.length > this.innerLength) {
//             let newstr = this.innerString.slice(0, this.innerLength);
//             return `${newstr}...`;
//         }

//         return this.innerString;
//     }
// }

// class List{
//     constructor(){
//         this.list = [];
//         this.size = 0;
//     }

//     sort(){
//         this.list = this.list.sort(a,b => a - b);
//     }

//     add(element){
//         this.list.push(element);
//         this.size++;

//         this.sort();
//     }

//     remove(index){
//         if (!(index >= this.list.length || index < 0)) {
//             this.list.splice(index, 1);
//             this.size--;

//             this.sort();
//         }

//     }

//     get(index){
//         if (!(index >= this.list.length || index < 0)) {
//             return this.list[index];
            
//             this.sort();
//         }
//     }
// }

// class CheckingAccount{
//     constructor(clientId, email, firstName, lastName){
//         let regex = /^[0-9]{6}$/gm;
//         if (regex.exec(clientId) === null) {
//             throw new TypeError('Client ID must be a 6-digit number');
//         }

//         this.clientId = clientId;

//         regex = /^[\w]+@[a-zA-Z.]+$/gm;
//         if (regex.exec(email) === null) {
//             throw new TypeError('Invalid e-mail');
//         }
//         this.email = email;

//         if (firstName.length < 3 || firstName.length > 20) {
//             throw new TypeError('First name must be between 3 and 20 characters long');
//         }

//         regex = /^[a-zA-Z]+$/gm;
//         if (regex.exec(firstName) === null) {
//             throw new TypeError('First name must contain only Latin characters');
//         }
//         this.firstName = firstName;

//         if (lastName.length < 3 || lastName.length > 20) {
//             throw new TypeError('Last name must be between 3 and 20 characters long');
//         }

//         regex = /^[a-zA-Z]+$/gm;
//         if (regex.exec(lastName) === null) {
//             throw new TypeError('Last name must contain only Latin characters');
//         }
//         this.lastName = lastName;
//     }
// }