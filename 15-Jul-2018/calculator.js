class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide===undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
           throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            }
            else {
                return this.expenses.sort().join(', ');
            }
        }
        else return 'empty';
    }
}

let assert = require('chai').assert;
describe("Calculator", function() {
    it("should be initialized with empty array", function() {
        let calculator = new Calculator();

        assert.deepEqual(calculator.expenses, []);
    });
    
    describe("add", function() {
        it("adds the passed in item (of any type) to the expenses", function() {
            let calculator = new Calculator();
            let int = 5;
            let float = 42.6;
            let str = 'dd';

            calculator.add(int);
            calculator.add(float);
            calculator.add(str);

            assert.equal(calculator.expenses.length, 3);
        });
    });
    
    describe("divideNums", function() {
        it("divides only the numbers from the expenses  and returns the result", function() {
            let calculator = new Calculator();
            let int = 42;
            let float = 5.6;
            let str = 'dd';
            calculator.add(int);
            calculator.add(float);
            calculator.add(str);

            let result = calculator.divideNums();

            assert.equal(result.toFixed(1), 7.5);
            assert.equal(calculator.expenses.length, 1);
        });

        it("should return error string if trying to divide by 0", function() {
            let calculator = new Calculator();
            let int = 42;
            let float = 0;
            let str = 'dd';
            calculator.add(int);
            calculator.add(float);
            calculator.add(str);

            let result = calculator.divideNums();

            assert.equal(result, 'Cannot divide by zero');
        });

        it("should throw error if no elemnts i array", function() {
            let calculator = new Calculator();

            assert.throws(() => {let result = calculator.divideNums();}, 'There are no numbers in the array!');
        });
    });
    
    describe("toString", function() {
        it("If there are no items stored, it should return the string 'empty array'", function() {
            let calc = new Calculator();

            let result = calc.toString();

            assert.equal(result, 'empty array')
        });
        
        it("returns a string, containing a list of all items from the expenses, joined with  an arrow", function() {
            let calc = new Calculator();
            let arr = ['d', 55, 4.25, 'ygbdyb'];
            for (const el of arr) {
                calc.add(el);
            }

            let result = calc.toString();

            assert.equal(result, arr.join(' -> '))
        });
    });
    
    describe("orderBy", function() {
        it("returns a string joined which is the sorted expenses, sorting them by two criteria - one for numbers and another for mixed data", function() {
            let calc = new Calculator();
            let arr = ['d', 55, 4.25, 'ygbdyb'];
            let arr2 = [4.25, 55, 'd', 'ygbdyb'];
            for (const el of arr) {
                calc.add(el);
            }

            let result = calc.orderBy();

            assert.equal(result, arr2.join(', '))
        });
        
        it("If there are no items stored, it should return the string 'empty'", function() {
            let calc = new Calculator();

            let result = calc.orderBy();

            assert.equal(result, 'empty')
        });
    });
    
});
