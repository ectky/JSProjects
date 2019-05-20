// function validateRequest(request) {
//     let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
//     let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

//     if (!request.method || !methods.includes(request.method)) {
//         throw new Error('Invalid request header: Invalid Method');
//     }

//     let regex = /^[\w\.]+$/gm;
//     if (!request.uri || regex.exec(request.uri) == null) {
//         throw new Error('Invalid request header: Invalid URI');
//     }

//     if (!request.version || !versions.includes(request.version)) {
//         throw new Error('Invalid request header: Invalid Version');
//     }
  
//     regex = /^[^<>\\&'"]*$/gm;
//     if (!request.hasOwnProperty('message') || regex.exec(request.message) == null) {
//         throw new Error('Invalid request header: Invalid Message');
//     }

//     console.log(request);
// }

// function isOddOrEven(string) {
//     if (typeof(string) !== 'string') {
//         return undefined;
//     }
//     if (string.length % 2 === 0) {
//         return "even";
//     }

//     return "odd";
// }

// let assert = require('chai').assert;

// describe('isOddOrEven', function () {
//     it('should return undefined if parameter string', function () {
//         let string = 5;
        
//         let result = isOddOrEven(string);

//         assert.equal(result, undefined);
//     });

//     it('should return odd', function () {
//         let string = 'odd';
        
//         let result = isOddOrEven(string);

//         assert.equal(result, 'odd');
//     });

//     it('should return even', function () {
//         let string = 'even';
        
//         let result = isOddOrEven(string);

//         assert.equal(result, 'even');
//     });
// });
  

// function lookupChar(string, index) {
//     if (typeof(string) !== 'string' || !Number.isInteger(index)) {
//         return undefined;
//     }
//     if (string.length <= index || index < 0) {
//         return "Incorrect index";
//     }

//     return string.charAt(index);
// }

// let assert = require('chai').assert;
// describe('lookupChar', function () {
//     it('shuld return undefined if 1rst param not string', function () {
//         let string = 5;
//         let index = 4;

//         let result = lookupChar(string, index);

//         assert.equal(result, undefined);
//     });

//     it('shuld return undefined if 2nd param not number', function () {
//         let string = 'string';
//         let index = 'alsoString';

//         let result = lookupChar(string, index);

//         assert.equal(result, undefined);
//     });

//     it('shuld return undefined if 2nd param not number', function () {
//         let string = 'string';
//         let index = 5.698;

//         let result = lookupChar(string, index);

//         assert.equal(result, undefined);
//     });

//     it('shuld return undefined if index incorrect', function () {
//         let string = 'string';
//         let index = 6;

//         let result = lookupChar(string, index);

//         assert.equal(result, "Incorrect index");
//     });

//     it('shuld return undefined if index incorrect', function () {
//         let string = 'string';
//         let index = -5;

//         let result = lookupChar(string, index);

//         assert.equal(result, "Incorrect index");
//     });

//     it('shuld return undefined if index incorrect', function () {
//         let string = 'string';
//         let index = 100;

//         let result = lookupChar(string, index);

//         assert.equal(result, "Incorrect index");
//     });

//     it('shuld return char at index', function () {
//         let string = 'string';
//         let index = 0;

//         let result = lookupChar(string, index);

//         assert.equal(result, 's');
//     });

//     it('shuld return char at index', function () {
//         let string = 'string';
//         let index = 4;

//         let result = lookupChar(string, index);

//         assert.equal(result, 'n');
//     });
// });


let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let assert = require('chai').assert;
describe('mathEnforcer', function () {
    it('addFive', function () {
        let num = 'notNum';

        let result = mathEnforcer.addFive(num);

        assert.equal(result, undefined);
    });

    it('addFive', function () {
        let num = 4;

        let result = mathEnforcer.addFive(num);

        assert.equal(result, 9);
    });
  
  it('addFive', function () {
        let num = 4.7;

        let result = mathEnforcer.addFive(num);

        assert.equal(result, 9.7);
    });

    it('addFive', function () {
        let num = -8.2;

        let result = mathEnforcer.addFive(num);

        assert.equal(result, -3.2);
    });

    it('substractTen', function () {
        let num = 'notNum';

        let result = mathEnforcer.subtractTen(num);

        assert.equal(result, undefined);
    });

    it('substractTen', function () {
        let num = 24;

        let result = mathEnforcer.subtractTen(num);

        assert.equal(result, 14);
    });
  
  it('substractTen', function () {
        let num = 24.35;

        let result = mathEnforcer.subtractTen(num);

        assert.equal(result, 14.35);
    });

    it('sum', function () {
        let num1 = 'notNum';
        let num2 = 'notNum';

        let result = mathEnforcer.sum(num1, num2);

        assert.equal(result, undefined);
    });
  
  it('substractTen', function () {
        let num = -500;

        let result = mathEnforcer.subtractTen(num);

        assert.equal(result, -510);
    });
  
  it('substractTen', function () {
        let num = 10;

        let result = mathEnforcer.subtractTen(num);

        assert.equal(result, 0);
    });
  
  it('sum', function () {
        let num1 = 3;
        let num2 = -5;

        let result = mathEnforcer.sum(num1, num2);

        assert.equal(result, -2);
    });
  
  it('sum', function () {
        let num1 = 'ff';
        let num2 = 5;

        let result = mathEnforcer.sum(num1, num2);

        assert.equal(result, undefined);
    });
  
  it('sum', function () {
        let num1 = 3;
        let num2 = 'ffff';

        let result = mathEnforcer.sum(num1, num2);

        assert.equal(result, undefined);
    });

    it('sum', function () {
        let num1 = 3;
        let num2 = 5;

        let result = mathEnforcer.sum(num1, num2);

        assert.equal(result, 8);
    });
  
  it('sum', function () {
        let num1 = 3;
        let num2 = 5.5;

        let result = mathEnforcer.sum(num1, num2);

        assert.equal(result, 8.5);
    });
  
  it('sum', function () {
        let num1 = 3.7;
        let num2 = 5;

        let result = mathEnforcer.sum(num1, num2);

        assert.equal(result, 8.7);
    });
});