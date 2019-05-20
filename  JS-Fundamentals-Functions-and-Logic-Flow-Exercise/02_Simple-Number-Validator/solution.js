function validate() {
    Array.from(document.getElementsByTagName('button')).forEach((btn) => {
		btn.addEventListener('click', clickEvent);
    });
    
    function clickEvent(e){
        let inputValue = document.querySelector('input').value;
        let numbers = inputValue.split('').map((n) => +n);
        let resultElement = document.querySelector('#response');

        if (isValidNumber(numbers)) {
            resultElement.textContent = 'This number is Valid!';
        } else {
            resultElement.textContent = 'This number is NOT Valid!';
        }
    }

    function isValidNumber(numbers) {
        if(numbers.length === 10) {
            let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            let expectedLastDigit = 0;
            let lastDigit = numbers[9];

            for (let i = 0; i < numbers.length - 1; i++) {
                const num = numbers[i];
                const weight = weights[i];

                expectedLastDigit += num * weight;
            }

            expectedLastDigit %= 11;
            expectedLastDigit %= 10;

            return lastDigit === expectedLastDigit;
        } else {
            return false;
        }
    }
}