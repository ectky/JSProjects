function greatestCD() {
    
        let firstNum = document.querySelector('#num1').value;
        let secondNum = document.querySelector('#num2').value;

        let gcdNum = gcd(firstNum, secondNum);
        console.log(firstNum);

        let resultElement = document.querySelector('#result');
        resultElement.textContent = gcdNum;

    function gcd(a, b) {
        if ( ! b) {
            return a;
        }
    
        return gcd(b, a % b);
    };
}