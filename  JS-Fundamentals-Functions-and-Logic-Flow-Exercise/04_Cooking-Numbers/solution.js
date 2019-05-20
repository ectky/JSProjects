function solve() {
    Array.from(document.getElementsByTagName('button')).forEach((btn) => {
		btn.addEventListener('click', clickEvent);
	});

	function clickEvent(e){
        let outputElement = document.querySelector('#output');
        let output = outputElement.textContent;
        let number;

        if (output) {
            number = +output;
        } else {
            let input = document.querySelector('input').value;
            if (input) {
                number = +input;
            } else {
                number = 0;
            }
        }

        number = cookNumber(e.target.textContent, number);

        outputElement.textContent = number;
    }

    function cookNumber(action, number) {
        switch (action.toLowerCase()) {
            case 'chop':
              number /= 2;
              break;
            case 'dice':
              number = Math.sqrt(number);
              break;
            case 'spice':
               number += 1;
              break;
            case 'bake':
              number *= 3;
              break;
            case 'fillet':
              number *= 0.8;
              break;
          }
        return number;
        }
    }

