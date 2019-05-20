function solve() {
  let firstNumber = document.querySelector('#num1').value;
  let secondNumber = document.querySelector('#num2').value;
  let resultElement = document.querySelector('#result');
  resultElement.textContent = '';
  if (+firstNumber > +secondNumber) {
      resultElement.textContent = 'Try with other numbers.';
  } else {
    for (let i = +firstNumber; i <= +secondNumber; i++) {
      let newPElement = document.createElement('p');
      newPElement.textContent = `${i} * ${secondNumber} = ${i*(+secondNumber)}`;
      resultElement.appendChild(newPElement); 
    }
  }

  console.log(firstNumber);
}